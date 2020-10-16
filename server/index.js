const http = require('http');
const type = 'fail-random';
const port = 3000;
const status_ok = 200;
const status_error = 500;

const sleep = ms => new Promise(resolve => setTimeout( resolve , ms));

let treshold = 0.95;
setTimeout( () => {
  console.log('Server crash');
  treshold = 0.3 
}, 30000);

setTimeout( () => {
  console.log('Server recovered');
  treshold = 0.95
}, 60000);


http.createServer( async (request, response) => {

  await sleep(Math.floor(Math.random() * 1000 ));

  const status = Math.random() < treshold ? status_ok : status_error;

  response.writeHead(status , {'Content-Type': 'application/json'});
  response.write(JSON.stringify({ type }));
  response.end();
  console.log(status);
}).listen(port, 
    () => console.log(`Server '${type}' listening on port ${port}`)
);