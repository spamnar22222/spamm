const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("520987691719065602"
")
setInterval(function() {
channel.send(`3mk 3mk`);
}, 30)
})

client.login(process.env.BOT_TOKEN);