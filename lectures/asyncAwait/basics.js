(async function helloWorld() {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1500);
  });

  console.log('Hello, world!');
})(() => console.log('done'));
 
