const Discord = require(`discord.js`);
const emo = require('../../src/emojis.js');

module.exports.run = async (client, message, args) => {

	
    var chan = message.channel;
    var dungeonsList = ['Cult (c)', 'MBC (m)', 'Void (v)', 'O3 (o)', 'Parasites (p)', 'Fungal caverns (f)'];
    var dungeonString = '';
    for (var i = 0; i < dungeonsList.length; i++) {
        dungeonString += `\n- ${dungeonsList[i]}, `;
    }

    if (args.length == 0) return message.reply(`There must be a dungeon given in argument\nExample: \`.hc o3\`\nThere are specific headcounts for certain dungeons:${dungeonString}`);
    if (args.length > 0) {
        //var headcounts = ["cult", "mbc", "void", "o3"]
        //if (!headcounts.includes(dungeon)) return chan.send("This dungeon isn't supported, ask a question instead");
        
        var dungeon = args[0].toLowerCase();

        if (dungeon == "cult" || dungeon == "c") {
            var dungeonName = `Cult`;
            var thumb = 'https://i.imgur.com/oY8zTM2.png';
            var description = `React with ${emo.cultistPortal} to participate\nReact with ${emo.lhkey} if you have one and are willing to pop\nReact with ${emo.rush} if you want to rush\nReact with your class and ability`;
            var reacts = [emo.cultistPortalReact, emo.lhkeyReact, emo.warriorReact, emo.paladinReact, emo.knightReact, emo.wizardReact, emo.mysticReact, emo.sorcererReact, emo.msealReact, emo.rushReact];
        }

        else if (dungeon == "void" || dungeon == "v") {
            var dungeonName = `Void`;
            var thumb = 'https://i.imgur.com/kbzthE4.png';
            var description = `React with ${emo.voidPortal} to participate\nReact with ${emo.lhkey} if you have one and are willing to pop\nReact with your class and ability`;
            var reacts = [emo.voidPortalReact, emo.lhkeyReact, emo.vialReact, emo.warriorReact, emo.paladinReact, emo.knightReact, emo.wizardReact, emo.mysticReact, emo.msealReact, emo.slowReact];
        }

        else if (dungeon == "mbc" || dungeon == "m") {
            var dungeonName = `MBC`;
            var thumb = 'https://i.imgur.com/CroeOAh.png';
            var description = `React with ${emo.lhPortal} to participate\nReact with ${emo.lhkey} if you have one and are willing to pop\nReact with your class and ability`;
            var reacts = [emo.lhPortalReact, emo.lhkeyReact, emo.warriorReact, emo.paladinReact, emo.knightReact, emo.wizardReact, emo.mysticReact, emo.msealReact];
        }

        else if (dungeon == "o3" || dungeon == "o") {
            var dungeonName = `O3`;
            var thumb = 'https://i.imgur.com/DSVqdZo.png';
            var description = `React with ${emo.o3portal} to participate\nReact with inc and runes if you are willing to pop\nReact with your class and ability`;
            var reacts = [emo.o3portalReact, emo.incReact, emo.swordReact, emo.shieldReact, emo.helmReact, emo.warriorReact, emo.paladinReact, emo.mysticReact];
        }

        else if (dungeon == "para" || dungeon == "parasite" || dungeon == "parasites" || dungeon == "p") {
            var dungeonName = `Parasites`;
            var thumb = 'https://i.imgur.com/zodPEFO.png';
            var description = `React with ${emo.paraPortal} to participate\nReact with ${emo.paraKey} if you are willing to pop\nReact with ${emo.rush} if you want to rush`;
            var reacts = [emo.paraPortalReact, emo.paraKeyReact, emo.rushReact];
        }

        else if (dungeon == "fung" || dungeon == "fungal" || dungeon == "fungals" || dungeon == "f") {
            var dungeonName = `Fungal caverns`;
            var thumb = 'https://i.imgur.com/K6rOQzR.png';
            var description = `React with ${emo.fungalPortal} to participate\nReact with ${emo.fungalKey} if you are willing to pop\nReact with your class and ability`;
            var reacts = [emo.fungalPortalReact, emo.fungalKeyReact, emo.warriorReact, emo.paladinReact, emo.knightReact, emo.mysticReact, emo.msealReact, emo.armorBrokenReact, emo.slowReact];
        }

        else {
            var dungeonName = args.join(" ");
            dungeonName = dungeonName.charAt(0).toUpperCase() + dungeonName.slice(1)
            var thumb = 'https://static.drips.pw/rotmg/wiki/Environment/Portals/Glowing%20Portal.png';
            var description = `React with ${emo.genericPortal} to participate\nReact with ${emo.mkey} if you are willing to pop\nReact with your class and ability`;
            var reacts = [emo.genericPortalReact, emo.mkeyReact, emo.warriorReact, emo.paladinReact, emo.knightReact, emo.wizardReact, emo.bardReact, emo.mysticReact, emo.priestReact, emo.msealReact, emo.armorBrokenReact, emo.slowReact];
        }

        //const playerName = await message.member.displayName;
        //message.member.nickname !== null && message.member.nickname !== undefined ? playerName = message.member.nickname

        const title = `Headcount for ${dungeonName} started by ${message.member.displayName}`;

        const myEmbed = new Discord.MessageEmbed()
            .setColor(`#0C4EB2`)
            .setTitle(title)
            .setDescription(description)
            .setThumbnail(thumb)
            //.addField(``,``,false) // true permet le inline
            .setTimestamp()
            .setFooter(`© Varza`, `https://i.imgur.com/9pHEBe1.jpg`);

        message.channel.bulkDelete(1, true).catch(err => {
            console.error(err);
        });

        chan.send('@here',myEmbed)
            .then(m => {
                for (var i =  0; i < reacts.length; i++) {
                    m.react(reacts[i])
                }
            });
    }


};

module.exports.help = {
    name: "headcount",
    aliases: ['hc'],
    category: 'rotmg',
    description: "Headcount for dungeons",
    cooldown: 3,
    usage: '[dungeon]',
    roles:[''],
    permissions: false,
    isUserAdmin: false,
};