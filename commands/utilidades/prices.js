const axios = require('axios');
module.exports = {
    name:'prices',
    description:'Compara el precio de los Items en los mercados',
    options:[],
    run: async (client, int) => {
        try {
            const response = await axios.get('https://www.albion-online-data.com/api/v2/stats/prices/T4_BAG?locations=Caerleon');
            const equipment = await axios.get(`https://gameinfo.albiononline.com/api/gameinfo/items/${response.data[0].item_id}/data`);
            console.log(equipment.data.localizedNames);
            const image = 'https://render.albiononline.com/v1/item/';
            console.log(response.status);

            if (response.status === 200) {
                int.reply({
                    content:"Buscando precios",
                    fetchReply: true
                }).then((m) =>{
                    const exampleEmbed = {
                        color: 0x0099ff,                        
                        author: {
                            name: `Ciudad: ${response.data[1].city}`,
                        },
                        thumbnail: {
                            url: `${image}/${response.data[0].item_id}.png`,
                        },
                        fields: [
                            {
                                name: 'Regular field title',
                                value: 'Some value here',
                            },
                            {
                                name: '\u200b',
                                value: '\u200b',
                                inline: false,
                            },
                            {
                                name: 'Inline field title',
                                value: 'Some value here',
                                inline: true,
                            },
                            {
                                name: 'Inline field title',
                                value: 'Some value here',
                                inline: true,
                            },
                            {
                                name: 'Inline field title',
                                value: 'Some value here',
                                inline: true,
                            },
                        ],                       
                        timestamp: new Date().toISOString(),
                        footer: {
                            text: 'Consultado',
                        },
                    };                    
                    m.reply({embeds: [exampleEmbed]});            
                });                  
            }                    
        } catch (error) {
            console.log(error);
        }   
    }
}