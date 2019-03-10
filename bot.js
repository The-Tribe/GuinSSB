const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    client.user.setUsername('GuinSSB');
    console.log("grapefruit");
});

client.on('message', async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (command === 'bayonetta') {
	message.reply('https://www.ssbwiki.com/Bayonetta_(SSBU)')
    }
    if (command === 'bowser') {
	message.reply('https://www.ssbwiki.com/Bowser_(SSBU)')
    }
    if (command === 'bowser jr.') {
	message.reply('https://www.ssbwiki.com/Bowser_Jr._(SSBU)')
    }
     if (command === 'larry koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Larry_Koopa')
    }
    if (command === 'roy koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Roy_Koopa')
    }
     if (command === 'wendy o. koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Wendy_O._Koopa')
     }
    if (command === 'iggy koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Iggy_Koopa')
    }
    if (command === 'morton koopa jr.') {
	message.reply('https://www.ssbwiki.com/Koopalings#Morton_Koopa_Jr.')
    }
    if (command === 'lemmy koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Lemmy_Koopa')
    }
    if (command === 'ludwig von koopa') {
	message.reply('https://www.ssbwiki.com/Koopalings#Ludwig_von_Koopa')
    }
    if (command === 'koopalings') {
	message.reply('https://www.ssbwiki.com/Koopalings#In_Super_Smash_Bros._Ultimate')
    }
    if (command === 'mario') {
	message.reply('https://www.ssbwiki.com/Mario_(SSBU)')
    }
    if (command === 'luigi') {
	message.reply('https://www.ssbwiki.com/Luigi_(SSBU)')
    }
    if (command === 'peach') {
	message.reply('https://www.ssbwiki.com/Peach_(SSBU)')
    }
    if (command === 'dr. mario') {
	message.reply('https://www.ssbwiki.com/Dr._Mario_(SSBU)')
    }
    if (command === 'rosalina & luma') {
    message.reply('https://www.ssbwiki.com/Rosalina_%26_Luma_(SSBU)')
    }
    if (command === 'yoshi') {
	message.reply('https://www.ssbwiki.com/Yoshi_(SSBU)')
    }
    if (command === 'donkey kong') {
	message.reply('https://www.ssbwiki.com/Donkey_Kong_(SSBU)')
    }
    if (command === 'diddy kong') {
	message.reply('https://www.ssbwiki.com/Diddy_Kong_(SSBU)')
    }
    if (command === 'link') {
	message.reply('https://www.ssbwiki.com/Link_(SSBU)')
    }
    if (command === 'zelda') {
	message.reply('https://www.ssbwiki.com/Zelda_(SSBU)')
    }
    if (command === 'sheik') {
	message.reply('https://www.ssbwiki.com/Sheik_(SSBU)')
    }
    if (command === 'young link') {
	message.reply('https://www.ssbwiki.com/Young_Link_(SSBU)')
    }
    if (command === 'ganondorf') {
	message.reply('https://www.ssbwiki.com/Ganondorf_(SSBU)')
    }
    if (command === 'toon link') {
	message.reply('https://www.ssbwiki.com/Toon_Link_(SSBU)')
    }
    if (command === 'samus') {
	message.reply('https://www.ssbwiki.com/Samus_(SSBU)')
    }
    if (command === 'zero suit samus') {
	message.reply('https://www.ssbwiki.com/Zero_Suit_Samus_(SSBU)')
    }
    
    
    
    

    
