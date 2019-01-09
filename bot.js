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
    if (message.content === 'Staff2014') {
    	message.reply('Owner: Saito16: http://gotpvp.com/profile/5090109

Developer:

Sgt_Tailor: http://www.gotpvp.com/profile/4107084

GotMilk: http://www.gotpvp.com/profile/11822666

Administrators:

Pmg_Pro: Head of not reading PMs - http://gotpvp.com/profile/8415996

hihihih565: Server-wide Admin - http://gotpvp.com/profile/2552463

OregonDuckHAWK: Factions, Survival, Hub - http://gotpvp.com/profile/5742890

orian100: OPPVP -http://www.gotpvp.com/profile/5768020

Rhondeau, Prison - http://www.gotpvp.com/profile/2286824

Samdenby1: Server-wide Admin - http://gotpvp.com/profile/3137557

scott_davo: Survival - http://www.gotpvp.com/profile/6093126

SteamPunkShuffle: KitPvP - http://www.gotpvp.com/profile/9948113

Moderators:

alecclark14: Prison, OPPvP, KitPvP - http://www.gotpvp.com/profile/8126648

AndrewwwPlays: KitPvP, OPPVP, Survival, Fatkid, Hub - http://www.gotpvp.com/profile/10654518

codycute: Creative - http://www.gotpvp.com/profile/7559792

Hallyn: Skywars - http://gotpvp.com/profile/4874829

Haydonicus: Skywars, Hub, Survival, Creative, Fatkid, Skyblock, Prison - http://gotpvp.com/profile/8408407

hughes955: Prison, Hub, Survival - http://gotpvp.com/profile/9896148

inDepthGravity: KitPvP, OpPvP - http://gotpvp.com/profile/8222796

mrepic839: Hub, Creative, Survival - http://gotpvp.com/profile/7049569

iDirtyHerby: KitPVP, OPPVP, Survival - http://www.gotpvp.com/profile/9957829

ShadowKobra: Survival, Prison - http://gotpvp.com/profile/5426217

shadowright: Server-Wide - http://gotpvp.com/profile/9822114

Shawn8998: KitPvP, OPPvP - http://www.gotpvp.com/profile/7752980

SprHero: Survival - http://gotpvp.com/profile/10290612

ty2maniac: Factions -http://www.gotpvp.com/profile/8716049

Helpers

Basheer17: OPPvP, KitPvP - http://www.gotpvp.com/profile/10602037

buckeyeboy2001: Hub - http://www.gotpvp.com/profile/7069581

iiBammyExtreme: Prison - http://www.gotpvp.com/profile/11129065

DetroitPvP: KitPvP - http://gotpvp.com/profile/10097061

JazzTptEE: Skywars - http://www.gotpvp.com/profile/4155594

Lewiswtf99: Prison - http://www.gotpvp.com/profile/11311509

magicalbeans123: Prison - http://www.gotpvp.com/profile/9768292

Masprolegend: Prison - http://www.gotpvp.com/profile/8203617

michaeljay23: Factions - http://www.gotpvp.com/profile/1286455

Moving_Longshot: Fatkid - http://www.gotpvp.com/profile/9551543

MythicMist: Survival - http://www.gotpvp.com/profile/8878250

Noah30092002: Prison - http://www.gotpvp.com/profile/9827188

Pius225: Factions - http://www.gotpvp.com/profile/11243094

QwertCube: Factions - http://www.gotpvp.com/profile/10371552

Sir_Javid: KitPvP - http://www.gotpvp.com/profile/2712608

SpeedyFoHawk: KitPvP - http://www.gotpvp.com/profile/10254464

SunshineB23: Prison - http://www.gotpvp.com/profile/8921601

tassilo_tazz: KitPvP - http://www.gotpvp.com/profile/7717138

TeeMatrix: OPPvP - http://www.gotpvp.com/profile/10399154

Trismite: Survival - http://www.gotpvp.com/profile/8658540

vivesi: KitPvP - http://www.gotpvp.com/profile/10372132');
  	}
});
                                                                                                                                                                                                                                                        
                                                                                                                              
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
