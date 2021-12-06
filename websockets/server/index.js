const WebSocket=require('ws');

const wss=new WebSocket.Server({port:8082});
wss.on('connection', ws=>{
    console.log('new connected');
    ws.on('message',data=>{
        console.log(`sent: ${data}`);
        ws.send('all good');
    })
    ws.on('close',()=>{
        console.log('disconnect');
    })
})