// All Audios
var audioA=document.getElementById('audio-a');
var audioS=document.getElementById('audio-s');
var audioD=document.getElementById('audio-d');
var audioF=document.getElementById('audio-f');
var audioG=document.getElementById('audio-g');
var audioH=document.getElementById('audio-h');
var audioJ=document.getElementById('audio-j');
var audioK=document.getElementById('audio-k');
var audioL=document.getElementById('audio-l');
// All Buttons

// #Audio-A
var effectOne=document.getElementById('effectOne');
effectOne.addEventListener('click',playAudioOne);
function playAudioOne(){
    audioA.play();
}
// #Audio-S
var effectTwo=document.getElementById('effectTwo');
effectTwo.addEventListener('click',playAudioTwo);
function playAudioTwo(){
    audioS.play();
}
// #Audio-D
var effectThree=document.getElementById('effectThree');
effectThree.addEventListener('click',playAudioThree);
function playAudioThree(){
    audioD.play();
}
// #Audio-F
var effectFour=document.getElementById('effectFour');
effectFour.addEventListener('click',playAudioOpen);
function playAudioOpen(){
    audioF.play();
}
// #Audio-G
var effectFive=document.getElementById('effectFive');
effectFive.addEventListener('click',playAudioBoom);
function playAudioBoom(){
    audioG.play();
}
// #Audio-H
var effectSix=document.getElementById('effectSix');
effectSix.addEventListener('click',playAudioRide);
function playAudioRide(){
    audioH.play();
}
// #Audio-J
var effectSeven=document.getElementById('effectSeven');
effectSeven.addEventListener('click',playAudioSnare);
function playAudioSnare(){
    audioJ.play();
}
// #Audio-K
var effectEight=document.getElementById('effectEight');
effectEight.addEventListener('click',playAudioTom);
function playAudioTom(){
    audioK.play();
}
// #Audio-L
var effectNine=document.getElementById('effectNine');
effectNine.addEventListener('click',playAudioTink);
function playAudioTink(){
    audioL.play();
}


// KEYBOARD EVENTS

document.body.addEventListener('keydown',function (e){
    var keyChoosed=e.keyCode;
    switch(keyChoosed){
        case 65:
            audioA.play();
            break;
        case 83:
            audioS.play();
            break;
        case 68:
            audioD.play();
            break;
        case 70:
            audioF.play();
            break;
        case 71:
            audioG.play();
            break;
        case 72:
            audioH.play();
            break;
        case 74:
            audioJ.play();
            break;
        case 75:
            audioK.play();
            break;
        case 76:
            audioL.play();
            break;
        default:{
        alert("choose the below mentioned keys");
    }
}
})