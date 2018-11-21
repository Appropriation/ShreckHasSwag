const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Log#') {
    	message.reply('Current Log 2016-2017 Last log before shutdown');
  	}
});

client.on('message', message => {
    if (message.content === 'No u') {
    	message.reply('You have achieved the big homosapian, miss me with that gay shit');
  	}
});

var Client = require("bot.js"); var client = new Client("ws://multiplayerpiano.com:443"); var room = "Room1"; setInterval(()=>{
    if ((client.isConnected() && !client.channel) || (client.channel && client.channel._id != room)) 
        client.setChannel(room); 
     }                                                                                                                            
 });                                                                                                                                                                                                                                                         
                                                                                                                              

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
