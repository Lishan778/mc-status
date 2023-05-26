require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const axios = require('axios');
const api_url = 'https://api.mcstatus.io/v2/status/java/' + process.env.SERVER_IP;
const channel_id = process.env.CHANNEL_ID;

async function updateStatus() {
    const channel = await client.channels.fetch(channel_id);
    const embed = new Discord.MessageEmbed()
        .setTitle('Server Status')
        .setColor('#0099ff')
        .setDescription('Getting server info...');
    let message = await channel.send({ embeds: [embed] });
    setInterval(async () => {
        embed.setDescription('Getting server info...');
        message.edit({ embeds: [embed] });
        const response = await axios.get(api_url);
        const data = response.data;
        const version = data.version.name_clean;
        const players_online = data.players.online;
        const players_max = data.players.max;
        const online_status = data.online;
        embed.setDescription(`Server Status: ${online_status ? 'Online :green_circle:' : 'Offline :red_circle:'}\nVersion: ${version}\nPlayers: ${players_online}/${players_max}`);
        message.edit({ embeds: [embed] });
    }, 60000);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    updateStatus();
    client.user.setActivity('Minecraft', { type: 'PLAYING' }); // Set custom activity
});

client.login(process.env.TOKEN);