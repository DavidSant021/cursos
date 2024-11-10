const { createEvent, getAllEvents, getEventsByName } = require("./functions");

async function tests() {
    //await createEvent("Show 2", new Date("2025-01-02"), 1000)

    const result = await getAllEvents()
    console.log(result)

    const result2 = await getEventsByName('Show 2')
    console.log(result2)

    process.exit(0)
}

tests();