navigator.mediaDevices.getUserMedia({audio:false, video: true}).then((stream)=>{
    console.log(stream)

    let video = document.getElementById('video')

    video.scrObject=stream

}).catch((error)=>console.log(error))