const opacityTimer = (element) => setTimeout(function(){
  element.style.opacity="1";
  element.style.transition="1s";
},1000);

export default opacityTimer;