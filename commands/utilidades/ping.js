module.exports = {
    name:'ping',
    description:'Mi velocidad de respusta',
    options:[],
    run: async (client, int) => {
        int.reply({
            content:"Analizando",
            fetchReply: true
        }).then((m) =>{
            m.edit(`Ping: \`${Date.now() - m.createdTimestamp}ms\``);
        });
    }
}