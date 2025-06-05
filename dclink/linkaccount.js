const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('linkaccount')
    .setDescription('Link your Discord account to your MyForge account.'),

  async execute(interaction) {
    const discordId = interaction.user.id;

    // Construct the auth link
    const authLink = `https://my.botforge.linkpc.net/auth?discordId=${discordId}`;

    await interaction.reply({
      content: `🔐 Click the link below to link your Discord account to your MyForge account:\n${authLink}\n\nMake sure you're signed into your MyForge account on the site before proceeding!`,
      ephemeral: true
    });
  }
};
