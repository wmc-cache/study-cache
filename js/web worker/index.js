onmessage = function (ev) {
  console.log(ev.data)
  postMessage("ho")
}