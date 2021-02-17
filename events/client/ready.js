const { prefix } = require('./../../config');

module.exports = client => {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0');
	var h = String(today.getHours() + 1);
	if(h > 23) h -= 24;
	var m = String(today.getMinutes());

    client.user.setPresence({ activity: { name: `${prefix}help`, type: 'PLAYING' } });
    console.log(`Varza has been restarted the ${dd}/${mm} at ${h}:${m}`);
}