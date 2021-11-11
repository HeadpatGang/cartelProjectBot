const csvFilePath='./mytioneh.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})

/*
    const craftingArray = ['Weaponsmithing', 'Armoring', 'Engineering', 'Jewelcrafting', 'Arcana', 'Cooking', 'Furnishing']
    const refiningArray = ['Smelting', 'Woodworking', 'Leatherworking', 'Weaving', 'Stonecutting']
    const gatheringArray = ['Logging', 'Mining', 'Fishing', 'Harvesting', 'Tracking & Skinning']

    for i = 0; i < array.length; i++ {
        if parsed.Json.text === array[i]
            push parsed.json.value => storage map
            push parsed.json.text => storage map
            repeat
            push completed map => database
    }

*/