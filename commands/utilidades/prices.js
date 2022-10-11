const axios = require('axios');
module.exports = {
    name:'prices',
    description:'Compara el precio de los Items en los mercados',
    options:[],
    run: async (client, int) => {
        try {
            const response = await axios.get('https://www.albion-online-data.com/api/v2/stats/gold.json?count=1')            
            console.log(response.data);
            console.log(response.status);

            if (response.status === 200) {
                int.reply({
                    content:"Buscando precios",
                    fetchReply: true
                }).then((m) =>{
                    const exampleEmbed = {
                        color: 0x0099ff,
                        author: {
                            name: `Precio del Oro: ${response.data[0].price} de Plata`,
                        }                       
                    };
                    m.reply({embeds: [exampleEmbed]});                  
                });                  
            }                    
        } catch (error) {
            console.log(error);
        }   
    }
}