'use strict'

// 获取 HTML 页面中的 video 标签  
var videoplay = document.querySelector('video#player');

// 播放视频流
function getMediaStream(stream) {
  videoplay.srcObject = stream;
}

function handleError(err) {
  console.log('getUserMedia error:', err);
}

// 对采集的数据做一些限制
var constraints = {
  video: {
    width: 1000,
    height: 800,
    frameRate: 15


  },
  audio: false
}

// 采集音视频数据流
navigator.mediaDevices.getDisplayMedia(constraints)
  .then(getMediaStream)
  .catch(handleError);

// 拍照
var takePicture = new Image();
document.querySelector("#TakePhoto").addEventListener("click", function () {
  var picture = document.querySelector('canvas#picture');
  var ctx = picture.getContext('2d')
  picture.width = 720;
  picture.height = 480;
  var selectedFitler = document.querySelector("#filter").value;
  ctx.filter = filterMap[selectedFitler];
  ctx.drawImage(videoplay, 0, 0, picture.width, picture.height);
  takePicture.src = picture.toDataURL("image/jpeg");
});

// 加滤镜
var filterMap = {
  blur: "blur(3px)",
  grayscale: "grayscale(1)",
  invert: "invert(1)",
  sepia: "sepia(1)",
  none: "none"

};
document.querySelector("#filter").addEventListener("change", function (e) {

  var selected = this.value;
  var filter = filterMap[selected];
  var canvas = document.querySelector('canvas#picture');
  var ctx = canvas.getContext("2d");
  ctx.filter = filter;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(takePicture, 0, 0, canvas.width, canvas.height);
})

// 保存下载
document.querySelector("#save").addEventListener("click", function () {
  var canvas = document.querySelector('canvas#picture');
  downLoad(canvas.toDataURL("image/jpeg"));
});


function downLoad(url) {
  var oA = document.createElement("a");
  oA.download = 'photo';// 设置下载的文件名，默认是'下载'
  oA.href = url;
  document.body.appendChild(oA);
  oA.click();
  oA.remove(); // 下载之后把创建的元素删除
}

