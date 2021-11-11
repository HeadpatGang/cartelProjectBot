const { MessageEmbed } = require('discord.js')

module.exports = function(crafter, interaction, discordID) {
    this.interaction = interaction;
    this.crafter = crafter;
    this.crafterEmbed = new MessageEmbed()
        .setTitle(`About ${crafter.playerName}`)
        .setColor('#d0a3ba')
        .addFields(
            { name: 'Discord Name', value: `${crafter.discordName}`, inline: true},
            { name: 'Player Name', value: `${crafter.playerName}`, inline: true},
            { name: 'When to Contact', value: `${crafter.timeOfContact}`, inline: true},
            { name: 'Crafter Pronouns', value: `${crafter.crafterPronouns}`, inline: true},
            { name: '\u200B', value: '\u200B', inline: true},
            { name: 'Materials Needed', value: `${crafter.materialsOfUse}`}
        )
        .setFooter(`${discordID}`);
        console.log('Crafter selected')
        interaction.update({ content: `Information about ${crafter.playerName}`, embeds: [this.crafterEmbed], ephemeral: true})
}