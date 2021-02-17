const Discord = require(`discord.js`);
const emo = require('./emojis.js');
const deckImage = "https://cdn.discordapp.com/attachments/575297153577254935/694634239823446116/image0.gif";

var frbEmbed = new Discord.RichEmbed()
    .setColor(`#0C4EB2`) // #C91800 pour
    .setTitle(`**Règles des French Baguette**`)
    .setDescription(`• Raid lvl : 120 mini\n• Ticket par semaine mini : 38\n• Dégâts de raid mini : 1.5m/attaque\n• 100% des attaques sur cycle complet + participation maximum au dernier cycle\n• Avoir une expérience en raid et participer à la vie du clan\n• Être actif Discord et ig\n• Donner régulièrement de l’argent au GM`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/586275387823226897/598203118718812165/unknown.png`)
    .setTimestamp()
    .setFooter(`© Varza`, `https://i.imgur.com/9pHEBe1.jpg`);

var lmEmbed = new Discord.RichEmbed()
    .setColor(`#0C4EB2`) // #C91800 pour
    .setTitle(`**Les Mercenaires (Loutres Magnifiques)**`)
    .setDescription(`• Raid lvl : 100 mini\n• Ticket par semaine mini : 35)\n• Dégâts de raid mini : 1.25m/attaque\n• 100% des attaques sur cycle complet + participation maximum au dernier cycle\n• Avoir une expérience en raid et participer à la vie du clan\n• Être actif Discord et ig\n • Aimer les loutres`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/569590573728792576/586261887403032623/images_27.jpg`)
    .setTimestamp()
    .setFooter(`© Varza`, `https://i.imgur.com/9pHEBe1.jpg`);

var madEmbed = new Discord.RichEmbed()
    .setColor(`#0C4EB2`) // #C91800 pour
    .setTitle(`**Règles des Mal aux Doigts**`)
    .setDescription(`• 32 TR/semaine (demote le dimanche soir)\n• 100% des attaques de Raid sur cycle complet (demote en fin de Raid)\n• 800k de dégâts moyen\n• Validation de la strat **obligatoire** sur Discord (demote après le premier cycle)`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/575297153577254935/598212310263267329/doigt_fusil.jpg`)
    .setTimestamp()
    .setFooter(`© Varza`, `https://i.imgur.com/9pHEBe1.jpg`);

var scEmbed = new Discord.RichEmbed()
    .setColor(`#0C4EB2`) // #C91800 pour
    .setTitle(`**Règles des Semi-Croustillants**`)
    .setDescription(`• Niveau de raid à 50\n• Être actif en jeu et lire discord\n• Lire et respecter les consignes de raid sur Discord\n• 28 tickets par semaine\n• Participer à 75% des raids au minimum`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/586275387823226897/598971282184339459/image0.png`)
    .setTimestamp()
    .setFooter(`© Varza`, `https://i.imgur.com/9pHEBe1.jpg`);

var tffEmbed = new Discord.RichEmbed()
    .setColor(`#0C4EB2`) // #C91800 pour
    .setTitle(`**Règles de Tap Family Fr**`)
    .setDescription(`• Inscrit sur discord / motivé à apprendre et évoluer, avec un MS minimum de 8k\n• 30 tickets par semaine / Kick 3 jours d’absence\n•  Dégât/atk : 400k\n• 75% des attaques disponible sur un raid\n• Etre disponible sur Discord\n• Condition pour évoluer: Avoir le ms du clan supérieur: SC 20k! + demander gentiment à arkhorm`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/576704121608994826/606251662419427328/tff_nb.jpg`)
    .setTimestamp()
    .setFooter(`© Varza`, `https://i.imgur.com/9pHEBe1.jpg`);

var deckEmbed = new Discord.RichEmbed()
    .setColor(`#0C4EB2`)
    .setTitle(`Decks`)
    .setDescription(`Voici les decks utilisés par la coallition\nN'hésitez pas à mp un Master ou un Capitaine si vous avez besoin d'aide !`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/576346658909192193/586310279613120512/Logo.jpg`)
    .setImage(deckImage)
    .setTimestamp()
    .setFooter(`© Varza`, `https://i.imgur.com/9pHEBe1.jpg`);

var raidHelpEmbed = new Discord.RichEmbed()
    .setColor(`#0C4EB2`)
    .setTitle(`Utilisation des commandes de raid`)
    .setDescription(`Les commandes ci-après permettent de créer, modifier et supprimer des raids.\nElles ne sont utilisables que par les masters et capitaines.\nLes arguments entre parenthèses sont facultatifs, n'hésitez pas à taper le nom d'une commande (".rs" ou ".er" par exemple) pour connaître les arguments à renseigner.`)
    .addField(`.raidStart`,`**Fonction** : permet d'initialiser une date de début d'un cycle (pas de raid uniquement). Le "-r" est à rajouter si le raid a déjà débuté, ce qui permettra de ping 1h avant la fin du cycle en cours.\n**Utilisation** : \`.rs [clan] ([jour/mois]) [heure h minutes] (-r)\`\n**Exemple** : \`.rs lm 8/9 19h5\` ou \`.rs sc 10h -r\``,false)
    .addField(`.getRaid`,`**Fonction** : permet de connaître l'heure de début de raid d'un ou plusieurs clans si elle existe.\n**Utilisation** : \`.gr\` ou \`.gr [clan]\`\n**Exemple** :\`.gr\` ou \`.gr mad\``,false)
    .addField(`.endRaid`,`**Fonction** : permet de terminer un raid (pour arrêter les notifications).\n**Utilisation** :\`.er [clan]\`\n**Exemple** : \`.er lm\``,false)
    /*.addField(`.set`,`Fonction : permet de modifier une donnée de raid. Cette donnée peut être le statut (valeur = "waiting" ou "running") et le numéro du cycle (valeur = un nombre).\nUtilisation : \`.s [clan] [propriété] [nouvelle valeur]\`\nExemple : \`.s tff statut waiting\``,false)*/
    .addField(`.timeCalc`,`**Fonction** : permet de calculer une date et un horaire en ajouter une durée à maintenant, notamment pour connaître l'heure de début de raid.\n**Utilisation** : \`.tc [durée]\`\n**Exemple** : \`.tc 19h32\``,false)
    .setTimestamp()
    .setFooter(`© Varza`, `https://i.imgur.com/9pHEBe1.jpg`);


module.exports = {
	frbEmbed: frbEmbed,
	lmEmbed: lmEmbed,
	madEmbed: madEmbed,
	scEmbed: scEmbed,
	tffEmbed: tffEmbed,
    deckEmbed: deckEmbed,
    deckImage: deckImage,
    raidHelpEmbed: raidHelpEmbed
};