// import { serve } from "https://deno.land/std@0.167.0/http/server.ts";

// oak server
// import { Application } from "https://deno.land/x/oak/mod.ts";

// express server
import express from "npm:express";

const decoder = new TextDecoder('utf-8');

const data = await Deno.readFile("./data.json");

// serve((_req) => {
//   return new Response(data, {
//     headers: {
//       "content-type": "application/json",
//     },
//   });
// })

// const app = new Application();

// app.use((ctx) => {
//   ctx.response.body = data;
// })

// await app.listen({ port: 8000 });

const app = express();

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

app.get("/", (req, res) => {
  res.send(decoder.decode(data));
});
