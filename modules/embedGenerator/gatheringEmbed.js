const { MessageEmbed } = require('discord.js')

module.exports = function(gathering, interaction, discordID, playerName) {
    this.gathering = gathering;
    this.gatheringEmbed = new MessageEmbed()
        .setTitle(`${playerName} Gathering Stats`)
        .setColor('#ffb6c1')
        .addFields(
            { name: 'Logging', value: `${gathering.logging}`, inline: true},
            { name: 'Mining', value: `${gathering.mining}`, inline: true},
            { name: 'Fishing', value: `${gathering.fishing}`, inline: true},
            { name: 'Harvesting', value: `${gathering.harvesting}`, inline: true},
            { name: 'Skinning', value: `${gathering.skinning}`}
        )
        .setFooter(`${discordID}`);
        console.log('Gathering selected')
        interaction.update({ content: `${playerName}'s ${interaction.values[0]} Stats`, embeds: [this.gatheringEmbed], ephemeral: true})
}