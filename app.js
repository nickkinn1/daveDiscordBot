const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});


client.on("message", (message) => {
    function daveRepsonse(){
        message.channel.send("Hi, Im Dave");
    }

    switch (message.content.toLocaleLowerCase()) {
        case "who is dave":
            daveRepsonse();
            break;
    
        case "who is dave?":
            daveRepsonse();
            break;

        case "whos dave?":
            daveRepsonse();
            break
        
        case "who's dave?":
             daveRepsonse();
            break
    }
});

client.login(config.token);