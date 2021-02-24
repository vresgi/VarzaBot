const { prefix } = require('./../../config');
//const db = require('../.js');

module.exports = client => {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0');
	const h = String(today.getHours() + 1);
	if(h > 23) h -= 24;
	const m = String(today.getMinutes());

    //Blacklist.sync();

    client.user.setPresence({ activity: { name: `.help`, type: 'PLAYING' } });
    console.log(`Varza has been restarted the ${dd}/${mm} at ${h}:${m}`);
}