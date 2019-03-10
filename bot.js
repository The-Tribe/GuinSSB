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
    
// Fighters	
	
    if (command === 'mario') {
	message.reply('https://www.ssbwiki.com/Mario_(SSBU)')
    }
    if (command === 'luigi') {
	message.reply('https://www.ssbwiki.com/Luigi_(SSBU)')
    }
    if (command === 'peach') {
	message.reply('https://www.ssbwiki.com/Peach_(SSBU)')
    }
    if (command === 'daisy') {
	message.reply('https://www.ssbwiki.com/Daisy_(SSBU)')
    }
    if (command === 'dr. mario') {
	message.reply('https://www.ssbwiki.com/Dr._Mario_(SSBU)')
    }
    if (command === 'rosalina & luma') {
    message.reply('https://www.ssbwiki.com/Rosalina_%26_Luma_(SSBU)')
    }
    if (command === 'piranha plant') {
	message.reply('https://www.ssbwiki.com/Piranha_Plant_(SSBU)')
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
    if (command === 'yoshi') {
	message.reply('https://www.ssbwiki.com/Yoshi_(SSBU)')
    }
    if (command === 'donkey kong') {
	message.reply('https://www.ssbwiki.com/Donkey_Kong_(SSBU)')
    }
    if (command === 'diddy kong') {
	message.reply('https://www.ssbwiki.com/Diddy_Kong_(SSBU)')
    }
    if (command === 'king k. rool') {
	message.reply('https://www.ssbwiki.com/King_K._Rool_(SSBU)')
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
    if (command === 'dark samus') {
	message.reply('https://www.ssbwiki.com/Dark_Samus_(SSBU)')
    }
    if (command === 'zero suit samus') {
	message.reply('https://www.ssbwiki.com/Zero_Suit_Samus_(SSBU)')
    }
    if (command === 'ridley') {
	message.reply('https://www.ssbwiki.com/Ridley_(SSBU)')
    }
    if (command === 'kirby') {
	message.reply('https://www.ssbwiki.com/Kirby_(SSBU)')
    }
    if (command === 'meta knight') {
	message.reply('https://www.ssbwiki.com/Meta_Knight_(SSBU)')
    }
    if (command === 'king dedede') {
	message.reply('https://www.ssbwiki.com/King_Dedede_(SSBU)')
    }
    if (command === 'fox') {
	message.reply('https://www.ssbwiki.com/Fox_(SSBU)')
    }
    if (command === 'falco') {
	message.reply('https://www.ssbwiki.com/Falco_(SSBU)')
    }
    if (command === 'wolf') {
	message.reply('https://www.ssbwiki.com/Wolf_(SSBU)')
    }
    if (command === 'pikachu') {
	message.reply('https://www.ssbwiki.com/Pikachu_(SSBU)')
    }
    if (command === 'jigglypuff') {
	message.reply('https://www.ssbwiki.com/Jigglypuff_(SSBU)')
    }
    if (command === 'pichu') {
	message.reply('https://www.ssbwiki.com/Pichu_(SSBU)')
    }
    if (command === 'mewtwo') {
	message.reply('https://www.ssbwiki.com/Mewtwo_(SSBU)')
    }
    if (command === 'pokemon trainer') {
	message.reply('https://www.ssbwiki.com/Pokémon_Trainer_(SSBU)')
    }
    if (command === 'squirtle') {
	message.reply('https://www.ssbwiki.com/Squirtle_(SSBU)')
    }
    if (command === 'ivysaur') {
	message.reply('https://www.ssbwiki.com/Ivysaur_(SSBU)')
    }
    if (command === 'charizard') {
	message.reply('https://www.ssbwiki.com/Charizard_(SSBU)')
    }
    if (command === 'lucario') {
	message.reply('https://www.ssbwiki.com/Lucario_(SSBU)')
    }
    if (command === 'greninja') {
	message.reply('https://www.ssbwiki.com/Greninja_(SSBU)')
    }
    if (command === 'incineroar') {
	message.reply('https://www.ssbwiki.com/Incineroar_(SSBU)')
    }
    if (command === 'captain falcon') {
	message.reply('https://www.ssbwiki.com/Captain_Falcon_(SSBU)')
    }
    if (command === 'ness') {
	message.reply('https://www.ssbwiki.com/Ness_(SSBU)')
    }
    if (command === 'lucas') {
	message.reply('https://www.ssbwiki.com/Lucas_(SSBU)')
    }
    if (command === 'ice climbers') {
	message.reply('https://www.ssbwiki.com/Ice_Climbers_(SSBU)')
    }
    if (command === 'marth') {
	message.reply('https://www.ssbwiki.com/Marth_(SSBU)')
    }
    if (command === 'lucina') {
	message.reply('https://www.ssbwiki.com/Lucina_(SSBU)')
    }
    if (command === 'ike') {
	message.reply('https://www.ssbwiki.com/Ike_(SSBU)')
    }
    if (command === 'roy') {
	message.reply('https://www.ssbwiki.com/Roy_(SSBU)')
    }
    if (command === 'chrom') {
	message.reply('https://www.ssbwiki.com/Chrom_(SSBU)')
    }
    if (command === 'robin') {
	message.reply('https://www.ssbwiki.com/Robin_(SSBU)')
    }
    if (command === 'corrin') {
	message.reply('https://www.ssbwiki.com/Corrin_(SSBU)')
    }
    if (command === 'mr. game & watch') {
	message.reply('https://www.ssbwiki.com/Mr._Game_%26_Watch_(SSBU)')
    }
    if (command === 'mr game & watch') {
	message.reply('https://www.ssbwiki.com/Mr._Game_%26_Watch_(SSBU)')
    }
    if (command === 'mr. game and watch') {
	message.reply('https://www.ssbwiki.com/Mr._Game_%26_Watch_(SSBU)')
    }
    if (command === 'mr game and watch') {
	message.reply('https://www.ssbwiki.com/Mr._Game_%26_Watch_(SSBU)')
    }
    if (command === 'pit') {
	message.reply('https://www.ssbwiki.com/Pit_(SSBU)')
    }
    if (command === 'dark pit') {
	message.reply('https://www.ssbwiki.com/Dark_Pit_(SSBU)')
    }
    if (command === 'palutena') {
	message.reply('https://www.ssbwiki.com/Palutena_(SSBU)')
    }
    if (command === 'wario') {
	message.reply('https://www.ssbwiki.com/Wario_(SSBU)')
    }
    if (command === 'olimar') {
	message.reply('https://www.ssbwiki.com/Olimar_(SSBU)')
    }
    if (command === 'alph') {
	message.reply('https://www.ssbwiki.com/Alph')
    }
    if (command === 'rob') {
	message.reply('https://www.ssbwiki.com/R.O.B._(SSBU)')
    }
    if (command === 'r.o.b.') {
	message.reply('https://www.ssbwiki.com/R.O.B._(SSBU)')
    }
    if (command === 'r.o.b') {
	message.reply('https://www.ssbwiki.com/R.O.B._(SSBU)')
    }
    if (command === 'villager') {
	message.reply('https://www.ssbwiki.com/Villager_(SSBU)')
    }
    if (command === 'isabelle') {
	message.reply('https://www.ssbwiki.com/Isabelle_(SSBU)')
    }
    if (command === 'wii fit trainer') {
	message.reply('https://www.ssbwiki.com/Wii_Fit_Trainer_(SSBU)')
    }
    if (command === 'little mac') {
	message.reply('https://www.ssbwiki.com/Little_Mac_(SSBU)')
    }
    if (command === 'shulk') {
	message.reply('https://www.ssbwiki.com/Shulk_(SSBU)')
    }
    if (command === 'duck hunt duo') {
	message.reply('https://www.ssbwiki.com/Duck_Hunt_(SSBU)')
    }
    if (command === 'duck hunt') {
	message.reply('https://www.ssbwiki.com/Duck_Hunt_(SSBU)')
    }
    if (command === 'snake') {
	message.reply('https://www.ssbwiki.com/Snake_(SSBU)')
    }
    if (command === 'solid snake') {
	message.reply('https://www.ssbwiki.com/Snake_(SSBU)')
    }
    if (command === 'sonic') {
	message.reply('https://www.ssbwiki.com/Sonic_(SSBU)')
    }
    if (command === 'sonic the hedgehog') {
	message.reply('https://www.ssbwiki.com/Sonic_(SSBU)')
    }
    if (command === 'mega man') {
	message.reply('https://www.ssbwiki.com/Mega_Man_(SSBU)')
    }
    if (command === 'megaman') {
	message.reply('https://www.ssbwiki.com/Mega_Man_(SSBU)')
    }
    if (command === 'pac-man') {
	message.reply('https://www.ssbwiki.com/Pac-Man_(SSBU)')
    }
    if (command === 'pacman') {
	message.reply('https://www.ssbwiki.com/Pac-Man_(SSBU)')
    }
    if (command === 'pac man') {
	message.reply('https://www.ssbwiki.com/Pac-Man_(SSBU)')
    }
    if (command === 'ryu') {
	message.reply('https://www.ssbwiki.com/Ryu_(SSBU)')
    }
    if (command === 'ken') {
	message.reply('https://www.ssbwiki.com/Ken_(SSBU)')
    }
    if (command === 'cloud') {
	message.reply('https://www.ssbwiki.com/Cloud_(SSBU)')
    }
    if (command === 'cloud strife') {
	message.reply('https://www.ssbwiki.com/Cloud_(SSBU)')
    }
    if (command === 'bayonetta') {
	message.reply('https://www.ssbwiki.com/Bayonetta_(SSBU)')
    }
    if (command === 'mii brawler') {
	message.reply('https://www.ssbwiki.com/Mii_Brawler_(SSBU)')
    }
    if (command === 'mii swordfighter') {
	message.reply('https://www.ssbwiki.com/Mii_Swordfighter_(SSBU)')
    }
    if (command === 'mii gunner') {
	message.reply('https://www.ssbwiki.com/Mii_Gunner_(SSBU)')
    }
    if (command === 'mii') {
	message.reply('https://www.ssbwiki.com/Mii_Fighter_(SSBU)')
    }
    if (command === 'mii fighter') {
	message.reply('https://www.ssbwiki.com/Mii_Fighter_(SSBU)')
    }
    if (command === 'inkling') {
	message.reply('https://www.ssbwiki.com/Inkling_(SSBU)')
    }
    if (command === 'simon belmont') {
	message.reply('https://www.ssbwiki.com/Simon_(SSBU)')
    }
    if (command === 'simon') {
	message.reply('https://www.ssbwiki.com/Simon_(SSBU)')
    }
    if (command === 'richter belmont') {
	message.reply('https://www.ssbwiki.com/Richter_(SSBU)')
    }
    if (command === 'richter') {
	message.reply('https://www.ssbwiki.com/Richter_(SSBU)')
    }
    if (command === 'joker') {
	message.reply('https://www.ssbwiki.com/Joker_(SSBU)')
    } // Assist Trophies
    if (command === 'akira') {
	message.reply('https://www.ssbwiki.com/Akira')
    }
    if (command === 'akira yuki') {
	message.reply('https://www.ssbwiki.com/Akira_Yuki')
    }
    if (command === 'alucard') {
	message.reply('https://www.ssbwiki.com/Alucard')
    }
    if (command === 'son of dracula') {
	message.reply('https://www.ssbwiki.com/Alucard')
    }
    if (command === 'andross') {
	message.reply('https://www.ssbwiki.com/Andross')
    }
    if (command === 'arcade bunny') {
	message.reply('https://www.ssbwiki.com/Arcade_Bunny')
    }
    if (command === 'ashley') {
	message.reply('https://www.ssbwiki.com/Ashley')
    }
    if (command === 'black knight') {
	message.reply('https://www.ssbwiki.com/Black_Knight')
    }
    if (command === 'the black knight') {
	message.reply('https://www.ssbwiki.com/Black_Knight')
    }
    if (command === 'bomberman') {
	message.reply('https://www.ssbwiki.com/Bomberman')
    }
    if (command === 'white bomberman') {
	message.reply('https://www.ssbwiki.com/Bomberman')
    }
    if (command === 'burrowing snagret') {
	message.reply('https://www.ssbwiki.com/Burrowing_Snagret')
    }
    if (command === 'chain chomp') {
	message.reply('https://www.ssbwiki.com/Chain_Chomp')
    }
    if (command === 'chainchomp') {
	message.reply('https://www.ssbwiki.com/Chain_Chomp')
    }
    if (command === 'chain-chomp') {
	message.reply('https://www.ssbwiki.com/Chain_Chomp')
    }
    if (command === 'chef kawasaki') {
	message.reply('https://www.ssbwiki.com/Chef_Kawasaki')
    }
    if (command === 'cook kawasaki') {
	message.reply('https://www.ssbwiki.com/Chef_Kawasaki')
    }
    if (command === 'color tv-game 15') {
	message.reply('https://www.ssbwiki.com/Color_TV-Game_15')
    }
    if (command === 'color tv game 15') {
	message.reply('https://www.ssbwiki.com/Color_TV-Game_15')
    }
    if (command === 'colour tv-game 15') {
	message.reply('https://www.ssbwiki.com/Color_TV-Game_15')
    }
    if (command === 'colour tv game 15') {
	message.reply('https://www.ssbwiki.com/Color_TV-Game_15')
    }
    if (command === 'pong') {
	message.reply('https://www.ssbwiki.com/Color_TV-Game_15')
    }
    if (command === 'devil') {
	message.reply('https://www.ssbwiki.com/Devil')
    }
    if (command === 'demon') {
	message.reply('https://www.ssbwiki.com/Devil')
    }
    if (command === 'dillon') {
	message.reply('https://www.ssbwiki.com/Dillon')
    }
    if (command === 'dr. kawashima') {
	message.reply('https://www.ssbwiki.com/Dr._Kawashima')
    }
    if (command === 'dr kawashima') {
	message.reply('https://www.ssbwiki.com/Dr._Kawashima')
    }
    if (command === 'doctor kawashima') {
	message.reply('https://www.ssbwiki.com/Dr._Kawashima')
    }
    if (command === 'ryuta kawashima') {
	message.reply('https://www.ssbwiki.com/Dr._Kawashima')
    }
    if (command === 'host of the brain age series') {
	message.reply('https://www.ssbwiki.com/Dr._Kawashima')
    }
    if (command === 'dr. wright') {
	message.reply('https://www.ssbwiki.com/Dr._Wright')
    }
    if (command === 'dr wright') {
	message.reply('https://www.ssbwiki.com/Dr._Wright')
    }
    if (command === 'doctor wright') {
	message.reply('https://www.ssbwiki.com/Dr._Wright')
    }
    if (command === 'flies & hand') {
	message.reply('https://www.ssbwiki.com/Flies_%26_Hand')
    }
    if (command === 'hand & flies') {
	message.reply('https://www.ssbwiki.com/Flies_%26_Hand')
    }
    if (command === 'flies and hand') {
	message.reply('https://www.ssbwiki.com/Flies_%26_Hand')
    }
    if (command === 'hand and flies') {
	message.reply('https://www.ssbwiki.com/Flies_%26_Hand')
    }
    if (command === 'ghirahim') {
	message.reply('https://www.ssbwiki.com/Ghirahim')
    }
    if (command === 'ghosts') {
	message.reply('https://www.ssbwiki.com/Ghosts')
    }
    if (command === 'ghosts from pac-man') {
	message.reply('https://www.ssbwiki.com/Ghosts')
    }
    if (command === 'blinky, pinky, inky, and clyde') {
	message.reply('https://www.ssbwiki.com/Ghosts')
    }
    if (command === 'blinky, pinky, inky and clyde') {
	message.reply('https://www.ssbwiki.com/Ghosts')
    }
    if (command === 'blinky pinky inky and clyde') {
	message.reply('https://www.ssbwiki.com/Ghosts')
    }
    if (command === 'gray fox') {
	message.reply('https://www.ssbwiki.com/Gray_Fox')
    }
    if (command === 'grey fox') {
	message.reply('https://www.ssbwiki.com/Gray_Fox')
    }
    if (command === 'guile') {
	message.reply('https://www.ssbwiki.com/Guile')
    }
    if (command === 'hammer bro') {
	message.reply('https://www.ssbwiki.com/Hammer_Bro')
    }
    if (command === 'hammer brother') {
	message.reply('https://www.ssbwiki.com/Hammer_Bro')
    }
    if (command === 'hammer koopa') {
	message.reply('https://www.ssbwiki.com/Hammer_Bro')
    }
    if (command === 'isaac') {
	message.reply('https://www.ssbwiki.com/Isaac')
    }
    if (command === 'isaac from golden sun') {
	message.reply('https://www.ssbwiki.com/Isaac')
    }
    if (command === 'jeff') {
	message.reply('https://www.ssbwiki.com/Jeff')
    }
    if (command === 'jeff andonuts') {
	message.reply('https://www.ssbwiki.com/Jeff')
    }
    if (command === "kapp'n") {
	message.reply('https://www.ssbwiki.com/Kapp%27n')
    }
    if (command === 'kappn') {
	message.reply('https://www.ssbwiki.com/Kapp%27n')
    }
    if (command === 'klaptrap') {
	message.reply('https://www.ssbwiki.com/Klaptrap')
    }
    if (command === 'knuckle joe') {
	message.reply('https://www.ssbwiki.com/Knuckle_Joe')
    }
    if (command === 'knuckles') {
	message.reply('https://www.ssbwiki.com/Knuckles_the_Echidna')
    }
    if (command === 'knuckles the echidna') {
	message.reply('https://www.ssbwiki.com/Knuckles_the_Echidna')
    }
    if (command === 'knuckles echidna') {
	message.reply('https://www.ssbwiki.com/Knuckles_the_Echidna')
    }
    if (command === 'krystal') {
	message.reply('https://www.ssbwiki.com/Krystal')
    }
    if (command === 'lyn') {
	message.reply('https://www.ssbwiki.com/Lyn')
    }
    if (command === 'lyndis') {
	message.reply('https://www.ssbwiki.com/Lyn')
    }
    if (command === 'metroid') {
	message.reply('https://www.ssbwiki.com/Metroid_(creature)')
    }
    if (command === 'midna') {
	message.reply('https://www.ssbwiki.com/Midna')
    }
    if (command === 'moon') {
	message.reply('https://www.ssbwiki.com/Moon')
    }	
    if (command === 'mother brain') {
	message.reply('https://www.ssbwiki.com/Mother_Brain')
    }
    if (command === 'mommy brain') {
	message.reply('https://www.ssbwiki.com/Mother_Brain')
    }
    if (command === 'mom brain') {
	message.reply('https://www.ssbwiki.com/Mother_Brain')
    }
    if (command === '') {
	message.reply('https://www.ssbwiki.com/')
    }
    

    
