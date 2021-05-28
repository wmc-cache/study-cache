

//创建 RTCPeerConnection 对象
let localPeerConnection = new RTCPeerConnection();
const mediaStreamConstraints = { video: true, audio: false };
//调用 getUserMedia API 获取音视频流
navigator.mediaDevices.getUserMedia(mediaStreamConstraints).
  then(gotLocalMediaStream)


//如果 getUserMedia 获得流，则会回调该函数
//在该函数中一方面要将获取的音视频流展示出来
//另一方面是保存到 localSteam
function gotLocalMediaStream(mediaStream) {
  console.log(mediaStream)
  localVideo.srcObject = mediaStream;
  //将音视频流添加到 RTCPeerConnection 对象中
  localPeerConnection.addStream(mediaStream);

}







localPeerConnection.createOffer()
  .then(createdOffer)
  .catch(setSessionDescriptionError);





//当创建 offer 成功后，会调用该函数
function createdOffer(description) {

  //将 offer 保存到本地
  localPeerConnection.setLocalDescription(description)
    .then(() => {
      setLocalDescriptionSuccess(localPeerConnection);
    }).catch(setSessionDescriptionError);


  //远端 pc 将 offer 保存起来
  remotePeerConnection.setRemoteDescription(description)
    .then(() => {
      setRemoteDescriptionSuccess(remotePeerConnection);
    })


  //远端 pc 创建 answer
  remotePeerConnection.createAnswer()
    .then(createdAnswer)

}

//当 answer 创建成功后，会回调该函数 
function createdAnswer(description) {

  //远端保存 answer
  remotePeerConnection.setLocalDescription(description)
    .then(() => {
      setLocalDescriptionSuccess(remotePeerConnection);
    })

  //本端pc保存 answer
  localPeerConnection.setRemoteDescription(description)
    .then(() => {
      setRemoteDescriptionSuccess(localPeerConnection);
    })
}


localPeerConnection.onicecandidate = handleConnection(event);




function handleConnection(event) {

  //获取到触发 icecandidate 事件的 RTCPeerConnection 对象
  //获取到具体的Candidate
  const peerConnection = event.target;
  const iceCandidate = event.candidate;

  if (iceCandidate) {
    //创建 RTCIceCandidate 对象
    const newIceCandidate = new RTCIceCandidate(iceCandidate);
    //得到对端的RTCPeerConnection
    const otherPeer = getOtherPeer(peerConnection);

    //将本地获到的 Candidate 添加到远端的 RTCPeerConnection对象中
    otherPeer.addIceCandidate(newIceCandidate)
      .then(() => {
        handleConnectionSuccess(peerConnection);
      }).catch((error) => {
        handleConnectionFailure(peerConnection, error);
      });


  }

}





localPeerConnection.onaddstream = handleRemoteStreamAdded;

function handleRemoteStreamAdded(event) {
  console.log('Remote stream added.');
  remoteStream = event.stream;
  remoteVideo.srcObject = remoteStream;
}
