var events = require('events')
var fs = require('fs')

var eventEmitter = new events.EventEmitter();

var ringBell = () => {
  console.log('Ring ring ring');
}

eventEmitter.on('someOneAtDoor',ringBell);

eventEmitter.emit('someOneAtDoor');


//readable stream
//writable stream
let file = 'input.txt'
var readableStream = fs.createReadStream(file)
readableStream.setEncoding('utf-8')

let data = '';
readableStream.on('data',(chunk)=>{
  data = data + chunk;
});

readableStream.on('end',() =>{
  console.log(data)
});


let dataToWrite= "data to write";

let writableStream = fs.createWriteStream('output.txt')
writableStream.write(dataToWrite,'utf-8');
writableStream.end();

writableStream.on('finish',()=>{
  console.log('File is ready to read.');
});
