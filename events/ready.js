const client = require("../index");
const cfonts = require('cfonts');
client.on("ready", () => {
    client.user.setActivity(`${client.guilds.cache.size} guilds`, {
        type: "COMPETING",
    });
    console.clear();
    console.log(`✔️ ${client.user.tag}`);
});
console.clear();