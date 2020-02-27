const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = 'NjgxNTE2OTg2MzE1ODMzMzk5.XlZtuw.lTQ3FfwbKhQ-0I0gCDWdSqdeNu4';
const {Client, RichEmbed} = require('discord.js');

var servers = {};

const PREFIX = '!';

bot.on('ready', () => {
console.log('bot is rady')

})

bot.login(Token)

bot.on('message', message => {
let args = message.content.substring(PREFIX.length).split(" ");
switch(args[0]){
case 'ip':
const embed = new Discord.RichEmbed()
.setColor(0xff0000)
.setThumbnail(message.author.avatarURL)
.setTitle('IP: ')
.setDescription('Soon')
message.delete();
message.channel.send(embed);
}})

bot

bot.on('message' , message=>{

let args = message.content.substring(PREFIX.length).split(' ');

switch(args[0]){
case 'helpme':
const embed = new Discord.RichEmbed()
.setColor(0xff0000)
.setThumbnail(message.author.avatarURL)
.setTitle('רשימת פקודות ')
.setDescription('!ip : מראה את האיפי של השרת')
.setFo(' : אתה יכול לרשום בתור הבוט רק עם יש לך גישות')

  message.delete();
  message.channel.send(embed);
  message.delete();
  message.channel.send(embed);
}

})

