const openStream = require('./openStream');
//openStream();
// webpack ./src/app.js ./public/bundle.js
// webpack ./src/app.js --o ./public/bundle.js
const $ = require('jquery');
const Peer = require('simple-peer');
const p = new Peer({ initiator: location.hash === '#1', trickle: false })
 
p.on('error', function (err) { console.log('error', err) })
 
p.on('signal', function (data) {
  $('#txtMySignal').val(JSON.stringify(data));
});
$('#btnConnect').click(()=>{
    const friendSignal = JSON.parse($('#txtFriendSignal').val());
    p.signal(friendSignal);
});
p.on('connect',()=>{
    setInterval(()=>p.send(Math.radom()),2000);
});
p.on('data',data=>console.log('Nhan du lieu voi',data));
