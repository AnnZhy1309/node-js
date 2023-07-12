import {createServer} from 'node:http';
import figlet from 'figlet';

const server = createServer((res, req)=>{
   res.statusCode = 200;
   res.setHeader = ('Content-type', 'text/plain');

  figlet("Hello World!!", function (err, data) {
     if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
  }
});
   res.end = (figlet())
});

server.listen(3000, ()=>{
    console.log('Server is running');
} );