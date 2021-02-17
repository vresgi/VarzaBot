const Discord = require(`discord.js`);

function getFormat(dataPing) {
	
	dataPing = new Date(dataPing).getTime() + 2 * 60 * 60 * 1000;
	dataPing = new Date(dataPing);

    var dd = String(dataPing.getDate()).padStart(2, '0');
    var mm = String(dataPing.getMonth() + 1).padStart(2, '0');
    var hh = String(dataPing.getHours()).padStart(2, '0');
    var m = String(dataPing.getMinutes()).padStart(2, '0');
    return format = `${dd}/${mm} - ${hh}h${m}`;
}

function arrayToObject(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; ++i){
        obj[i] = arr[i];
    }
    return obj;
}


module.exports = {
	getFormat: getFormat,
	arrayToObject: arrayToObject
};