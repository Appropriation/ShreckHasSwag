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

client.on('message', message => {
    if (message.content === 'no u') {
    	message.reply('Good commies do not use capitals because they are not capitalist scumbags good work commrades *stands and solutes*');
  	}
});

client.on('message', message => {
    if (message.content === 'Shreck Meme') {
    	message.reply('https://cdn.discordapp.com/attachments/380292099377201162/515270334174461952/tumblr_pie02giID21xoyw8po1_400.gif');
  	}
});
client.on('message', message => {
    if (message.content === 'ez') {
    	message.reply('the only thing easy here is that hairline you rockin');
  	}
});
client.on('message', message => {
    if (message.content === 'stfu') {
    	message.reply('nigga who is u speaking too u built like a bologny samwich');
  	}
});
client.on('message', message => {
    if (message.content === 'kys') {
    	message.reply('Naw you kill yourself i hope you get to the best part of your life and get diagnosed with cancer');
  	}
});
client.on('message', message => {
    if (message.content === 'nigger') {
    	message.reply('white trash');
  	}
});
client.on('message', message => {
	if (message.content === 'bruh') {
		message.channel.send("**Bruh**", {files:["https://gifimage.net/wp-content/uploads/2017/10/bruh-gif.gif"]});;
	}
});
client.on('message', message => {
    if (message.content === '>Owner') {
    	message.reply('My Daddy is @Damagex11#9413 :weary:');
  	}
});
                                                                                                                                                                                                                                                        
                                                                                                                              
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
