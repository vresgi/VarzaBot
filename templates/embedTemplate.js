const Discord = require(`discord.js`);

const myEmbed = new Discord.MessageEmbed()
    .setColor(`#0C4EB2`)// #C91800 pour rouge
    //.setAuthor(message.member.user.tag, message.author.displayAvatarURL)
    .setTitle(``)
    .setURL(``)
    .setDescription(``)
    .setThumbnail(`https://cdn.discordapp.com/attachments/576346658909192193/586310279613120512/Logo.jpg`)//pp frc
    .addField(``,``,false) // true permet le inline
    .addBlankField()
    .setImage(``)
    .setTimestamp()
    .setFooter(`© Varza`, `https://i.imgur.com/9pHEBe1.jpg`);

message.channel.send(myEmbed);