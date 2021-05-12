// KEY BOARD EVENT
var audio
window.addEventListener('keydown',function(e){
    var buttonKeys=document.querySelector(`.alpha[data-key='${e.keyCode}']`);
    var audio=document.querySelector(`.audio[data-key='${e.keyCode}']`);
    audio.play();
})
var btnClick=document.querySelectorAll('.alpha');
var audioLoop=document.querySelectorAll('.audio');
btnClick.forEach(btnClickItem=>{
    btnClickItem.addEventListener('click',function(e){
        var btnattr=btnClickItem.getAttribute('data-key');
        audioLoop.forEach(item=>{
            var audioattr=item.getAttribute('data-key');
            if(btnattr==audioattr){
                item.play();
            }
        })
    })
})



