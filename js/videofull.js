var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, iframe;
//https://stackoverflow.com/questions/13383886/making-a-short-alias-for-document-queryselectorall
var $ = document.querySelector.bind(document);

// init player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '200',
    width: '300',
    videoId: 'Nxyz4-sRGiA',
    events: {
      'onReady': onPlayerReady
    }
  });
}

// when ready, wait for clicks
function onPlayerReady(event) {
  var player = event.target;
  iframe = $('#player');
}

// function onPlayerReady(event){
//     event.target.playVideo();
// }




function playFullscreen (){
  player.playVideo();//won't work on mobile
  
  var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen || msRequestFullscreen;
  if (requestFullScreen) {
    requestFullScreen.bind(iframe)();
    var uno = requestFullScreen.bind(iframe)();
    console.log(uno);
  }
}



// Find the right method, call on correct element
function launchIntoFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
  
  // Launch fullscreen for browsers that support it!
  launchIntoFullscreen(document.documentElement); // the whole page
  launchIntoFullscreen(document.getElementById("videoElement")); // any individual element

  //https://davidwalsh.name/fullscreen