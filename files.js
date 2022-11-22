// const decoder = new TextDecoder('utf-8');

// const data = await Deno.readFile('./hello.txt');

// console.log(decoder.decode(data));

// write files

// const encoder = new TextEncoder();

const newText = 'Hello world, from the files.js file 2';

// await Deno.writeFile('./hello.txt', encoder.encode(newText));

// renaming files

await Deno.writeTextFile('./hello.txt', newText);

const renameConfirmation = confirm('Do you want to rename the file?');

if(renameConfirmation) {
 await Deno.rename('./hello.txt', './greetings.txt');
} else {
  console.log('File not renamed');
}

//  removing files

const removeConfirmation = confirm('Do you want to remove the file?');

if(removeConfirmation) {
  await Deno.remove('./greetings.txt');
}