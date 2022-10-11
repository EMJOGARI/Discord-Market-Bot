module.exports = {
    name:'ready',
    run: (client) => {
        console.log('✅ Estoy Listo!' .green);
        client.application.commands.set(client.commands.map(x => x));
        /*
        client.application.commands.set([
            {
                name: 'ping',
                description: 'Pong!',
                options:[],
            },
            {
                name: 'saludo',
                description: 'Enviar saludo',
                options:[{
                    type:'6',
                    name:'usuario',
                    description:'El usuario a saludar',
                    require: true
                }],
            }
        ]);*/
    }
}