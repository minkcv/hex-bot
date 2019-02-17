var Discord = require('discord.js');
var auth = require('./auth.json');
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

//console.log(bot);

bot.on('ready', function(evt) {
    console.log('ready');
});

bot.on('message', function (message) {
    if (message.author.bot)
        return;
    if (message.channel.name != 'hex')
        return;
    var hexmsg = '```';
    var dimension = 30;
    var extra = 30;
    for (var line = 0; line < dimension / 2; line++) {
        var middle = dimension / 10 + line * 2;
        var spaces = (dimension - middle) / 2;
        console.log(middle);
        console.log(spaces);
        for (var s = 0; s < spaces; s++) {
            hexmsg += ' ';
        }
        for (var s = 0; s < middle + extra; s++) {
            hexmsg += Math.floor(Math.random() * 16).toString(16);
        }
        for (var s = 0; s < spaces; s++) {
            hexmsg += ' ';
        }
        hexmsg += '\n';
    }
    for (var line = dimension / 2 - 1; line > -1; line--) {
        var middle = dimension / 10 + (line * 2);
        var spaces = (dimension - middle) / 2;
        for (var s = 0; s < spaces; s++) {
            hexmsg += ' ';
        }
        for (var s = 0; s < middle + extra; s++) {
            hexmsg += Math.floor(Math.random() * 16).toString(16);
        }
        for (var s = 0; s < spaces; s++) {
            hexmsg += ' ';
        }
        hexmsg += '\n';
    }
    hexmsg += '```';
    message.channel.send(hexmsg);
});

bot.login(auth.token);