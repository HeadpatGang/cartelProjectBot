const databaseConnection = require("./databaseConnection")
var crafterEmbed = require('../embedGenerator/crafterEmbed')
module.exports = {
    testDatabase: function () {
        let searchQuery = `SELECT crafters.playerName, crafting.arcana FROM crafting INNER JOIN crafters ON crafters.discordID = crafting.discordID AND crafting.arcana >= 50 ORDER BY crafting.arcana DESC`
        databaseConnection.connection.query(searchQuery, function(err, result) {
        if (err) throw err;
        console.log('Database connected to successfully')
        })
    },
    getCrafterByName: function(discordID) {
        let searchQuery = `SELECT crafters.discordID FROM crafters WHERE playerName = \'${discordID}\'`
        databaseConnection.connection.query(searchQuery, function(err, result) {
            var test = result[0].discordID.toString();      
        if (err) throw err;
        console.log(test)
        console.log(result[0].discordID)
        console.log('Idk if this shit works lol')
        })
    }
}

        
