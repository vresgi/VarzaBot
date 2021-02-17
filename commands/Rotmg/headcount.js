const Discord = require(`discord.js`);

module.exports.run = async (client, message) => {

	const arr1 = ["RL", "Overlord", "TRL"];
	const arr2 = ["senat", "xxx"];

	/*if (arr1.some((nombre) => arr2.includes(nombre))) {
    	message.channel.send('ok');
	} else {
    	message.channel.send('nok');
	}*/

    message.channel.send('ok');

    

    const myEmbed = new Discord.MessageEmbed()
        .setColor(`#0C4EB2`)// #C91800 pour rouge
        //.setAuthor(message.member.user.tag, message.author.displayAvatarURL)
        .setTitle(`test`)
        .setDescription(`test`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/576346658909192193/586310279613120512/Logo.jpg`)//pp frc
        .addField(`test`,`test`,false) // true permet le inline
        .setTimestamp()
        .setFooter(`© Varza`, `https://i.imgur.com/9pHEBe1.jpg`);

    //message.channel.send(myEmbed);


};

module.exports.help = {
    name: "headcount",
    aliases: ['hc'],
    category: 'rotmg',
    description: "Headcount for dungeons",
    cooldown: 5,
    usage: '[dungeon]',
    roles:['test'],
    permissions: false,
    isUserAdmin: false,
    args: false
};