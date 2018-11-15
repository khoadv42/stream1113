const playVideo = require('./playVideo');
const $ = require('jquery');
const Peer = require('simple-peer');

function openStream(){
    navigator.mediaDevices.getUserMedia({audio:true,video:true})
        .then(stream=>{
            playVideo(stream,'localStream');
            const p = new Peer({ initiator: location.hash === '#1', trickle: false,stream:stream })
 
            p.on('error', function (err) { console.log('error', err) })
            
            p.on('signal', function (data) {
            $('#txtMySignal').val(JSON.stringify(data));
            });
            $('#btnConnect').click(()=>{
                const friendSignal = JSON.parse($('#txtFriendSignal').val());
                p.signal(friendSignal);

            });

            p.on('stream',fStream=>playVideo(fStream,'friendStream'));
        })
        .catch(err=>console.log(err));
}

module.exports = openStream;