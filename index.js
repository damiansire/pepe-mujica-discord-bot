const { Client } = require("discord.js");
const { clientId, guildId, token } = require("./config.json");
const commands = require("./commands.json");

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log("Bot Now connected!");
  console.log("Logged In as", client.user.tag);
  client.user.setStatus("dnd"); // online, idle, invisible, dnd
  console.log("Bot status: ", client.user.presence.status);
});

client.on("messageCreate", (msg) => {
  if (!msg.author.bot) {
    const command = commands.find((command) =>
      msg.content.includes(command.prefix)
    );

    if (command) {
      msg.channel.send(command.msg);
    }
  }
});

client.login(token);

//msg.content es el contenido del mensaje
