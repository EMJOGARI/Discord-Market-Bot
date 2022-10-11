require('http').createServer((rep, res) =>res.end('Hola')).listen(); // para las 24H activo

const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });
//const axios = require('axios');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');
require('colors');

const dirEvents = fs.readdirSync(path.join(__dirname, 'events'));
const dirCommands = fs.readdirSync(path.join(__dirname, 'commands'));

for(const fileEvent of dirEvents){
  const event = require(path.join(__dirname, 'events', fileEvent));
  client.on(event.name, (...args) => event.run(client, ...args));
  console.log(`✅ Evento ${event.name}` .blue);
}

client.commands = new Discord.Collection();
for( const subFolder of dirCommands){ //lee los archivo en el directorio
  const filesCommands = fs.readdirSync(path.join(__dirname, 'commands', subFolder));

  for (const fileCommand of filesCommands){
    const command = require(path.join(__dirname, 'commands', subFolder, fileCommand));
    console.log(`✅ Comando ${command.name} cargado correctamente...` .green);
    client.commands.set(command.name, command);
  }
}
client.login(config.token);

/*client.on('interactionCreate', (int) => {
  if (int.isCommand() && int.commandName === 'ping') {
    int.reply('Pong!');
  }

  if (int.isCommand() && int.commandName === 'saludo') {
    const usuario = int.options.getUser('usuario');
    int.reply(`Hola ${usuario.username}`);
  }
});*/

/*const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent

         Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent
      ] 
});*/



/*client.on('messageCreate', async message => {
  if (message.author.bot || !message.guild || message.channel.type === 'dm') return;

  var prefix = config.prefix;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    let embed = new Discord.EmbedBuilder()
            .setTitle('Ping Pong')
            .setDescription('El Ping del bot es de \'${client.ws.ping}ms\'!')
            .setColor(client.color)
    message.channel.send({embed:[embed]})   
  }
});*/