const data = await fetch('https://swapi.dev/api/people')

const results = await data.json()

const encoder = new TextEncoder()

await Deno.writeFile('./data.json', encoder.encode(JSON.stringify(results)))