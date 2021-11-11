const { MessageEmbed } = require('discord.js')

module.exports = function(refining, interaction, discordID, playerName) {
    this.refining = refining;
    this.refiningEmbed = new MessageEmbed()
    .setTitle(`${playerName} Refining Stats`)
        .setColor('#ffb6c1')
        .addFields(
            { name: 'Smelting', value: `${refining.smelting}`, inline: true},
            { name: 'Woodworking', value: `${refining.woodworking}`, inline: true},
            { name: 'Leatherworking', value: `${refining.leatherworking}`, inline: true},
            { name: 'Weaving', value: `${refining.weaving}`, inline: true},
            { name: 'Stonecutting', value: `${refining.stonecutting}`}
        )
        .setFooter(`${discordID}`);
        console.log('Refining selected')
        interaction.update({ content: `${playerName}'s ${interaction.values[0]} Stats`, embeds: [this.refiningEmbed], ephemeral: true})
}