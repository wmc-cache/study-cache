function popup(object) {
  var id = object.id || 'popup',
    width = object.width || 500,
    height = object.height || 400,
    background = object.background || '#fff',
    borderRadius = object.borderRadius || 'round',
    borderRadiusPx = object.borderRadiusPx || 4,
    maskId = object.maskId || 'popup-mask',
    maskOpacity = object.maskOpacity || 0.5

  var obj = document.getElementById(id),
    maskObj = document.getElementById(maskId)

  obj.style.width = width + 'px'
  obj.style.height = height + 'px'
  obj.style.background = background

  if (borderRadius === 'round') {
    obj.style.borderRadius = borderRadiusPx + 'px'
  } else if (borderRadius === 'rect') {
    obj.style.borderRadius = 0
  }

  if (window.navigator.userAgent.toLowerCase().indexOf('ie') !== -1) {
    // ie 浏览器
    maskObj.style.filter = 'alpha(opacity:' + maskOpacity * 100 + ')'
  } else {
    maskObj.style.opacity = maskOpacity
  }
}
