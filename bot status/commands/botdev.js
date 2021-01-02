const Discord = require("discord.js");

module.exports = {
  name: "bot",
  async run(client, message, args) {
    let embed = new Discord.MessageEmbed()

      .setColor("RED")
	  .addField("Bot name :", `${client.user.tag}`,true)
	  .addField("developed by :", "<@639118234603487254>",true)
	  .addField("Server :", "https://discord.gg/NGtQ7nuvgY",true)
    message.channel.send(embed);
  },
};
