//drumpads sounds

var drumpads = [];

drumpads[0] = new Audio ('task_material/assets/A.mp3');
drumpads[1] = new Audio ('task_material/assets/C.mp3');
drumpads[2] = new Audio ('task_material/assets/F.mp3');
drumpads[3] = new Audio ('task_material/assets/G.mp3');
drumpads[4] = new Audio ('task_material/assets/hihat.mp3');
drumpads[5] = new Audio ('task_material/assets/kick.mp3');
drumpads[6] = new Audio ('task_material/assets/laugh-1.mp3');
drumpads[7] = new Audio ('task_material/assets/laugh-2.mp3');
drumpads[8] = new Audio ('task_material/assets/snare.mp3');

//function pads

function playSample(i) {
    drumpads[i].play();
};

//function aufrufe

document.querySelector(".pad1") .addEventListener("click", function() {
    playSample(0);
});

document.querySelector(".pad2") .addEventListener("click", function() {
    playSample(1);
});

document.querySelector(".pad3") .addEventListener("click", function() {
    playSample(2);
});

document.querySelector(".pad4") .addEventListener("click", function() {
    playSample(3);
});

document.querySelector(".pad5") .addEventListener("click", function() {
    playSample(4);
});

document.querySelector(".pad6") .addEventListener("click", function() {
    playSample(5);
});

document.querySelector(".pad7") .addEventListener("click", function() {
    playSample(6);
});

document.querySelector(".pad8") .addEventListener("click", function() {
    playSample(7);
});

document.querySelector(".pad9") .addEventListener("click", function() {
    playSample(8);
});



//drum machine

function Reihenfolge(snare:number, kick:number, hihat:number){
    setInterval(function() {
        playSample(snare);
        playSample(kick);
        playSample(hihat);
       }, 500);
    }
    
       document.querySelector(".play").addEventListener('click', function(){
           Reihenfolge(8,5,4);
       });
