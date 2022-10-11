const axios = require('axios');
module.exports = {
    name:'oro',
    description:'Busca el Precio del Oro Actual',
    options:[],
    run: async (client, int) => {
        try {
            const response = await axios.get('https://www.albion-online-data.com/api/v2/stats/gold.json?count=1') 

            if (response.status === 200) {
                int.reply({
                    content:"Buscando precios",
                    fetchReply: true
                }).then((m) =>{
                    const exampleEmbed = {
                        color: 0xe7c000, //f8b942
                        author: {
                            name: `Precio del Oro: ${response.data[0].price} de Plata`,
                        },
                        thumbnail: {
                            url: 'https://assets.albiononline.com/assets/images/shop/category-icons/gold.png',
                        },
                        timestamp: new Date().toISOString(),
                        footer: {
                            text: 'Consultado',
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