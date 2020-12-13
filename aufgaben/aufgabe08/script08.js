//drumpad sounds:
var sounds = [];
sounds[0] = new Audio("task_material/assets/A.mp3");
sounds[1] = new Audio("task_material/assets/C.mp3");
sounds[2] = new Audio("task_material/assets/F.mp3");
sounds[3] = new Audio("task_material/assets/G.mp3");
sounds[4] = new Audio("task_material/assets/hihat.mp3");
sounds[5] = new Audio("task_material/assets/kick.mp3");
sounds[6] = new Audio("task_material/assets/laugh-1.mp3");
sounds[7] = new Audio("task_material/assets/laugh-2.mp3");
sounds[8] = new Audio("task_material/assets/snare.mp3");
//HTML-Elemente:
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var deleteButton = document.getElementById("delete");
var recordButtonBlack = document.getElementById("record-black");
var recordButtonRed = document.getElementById("record-red");
var questionMark = document.getElementById("question-mark");
var closeButton = document.getElementById("close");
var i = 0;
//boolean-switches:
var boolRecord = false;
var boolPlayStop = false;
//drumpad-buttons:
document.querySelector("#drum1").addEventListener("click", function () {
    playSample(0);
    recordABeat(0);
});
document.querySelector("#drum2").addEventListener("click", function () {
    playSample(1);
    recordABeat(1);
});
document.querySelector("#drum3").addEventListener("click", function () {
    playSample(2);
    recordABeat(2);
});
document.querySelector("#drum4").addEventListener("click", function () {
    playSample(3);
    recordABeat(3);
});
document.querySelector("#drum5").addEventListener("click", function () {
    playSample(4);
    recordABeat(4);
});
document.querySelector("#drum6").addEventListener("click", function () {
    playSample(5);
    recordABeat(5);
});
document.querySelector("#drum7").addEventListener("click", function () {
    playSample(6);
    recordABeat(6);
});
document.querySelector("#drum8").addEventListener("click", function () {
    playSample(7);
    recordABeat(7);
});
document.querySelector("#drum9").addEventListener("click", function () {
    playSample(8);
    recordABeat(8);
});
//play/stop-button:
playButton.addEventListener("click", function () {
    toggleClasses(this, stopButton);
    boolPlayStop = true;
    checkBeat();
});
stopButton.addEventListener("click", function () {
    toggleClasses(this, playButton);
    boolPlayStop = false;
    checkBeat();
});
//delete-button:
deleteButton.addEventListener("click", function () {
    beatArray.length = 0;
});
//record-button:
recordButtonBlack.addEventListener("click", function () {
    toggleClasses(this, recordButtonRed);
    boolRecord = true;
});
recordButtonRed.addEventListener("click", function () {
    toggleClasses(this, recordButtonBlack);
    boolRecord = false;
});
//manipulierbares Array (Default-Beat):
var beatArray = [];
beatArray[0] = 5;
beatArray[1] = 4;
beatArray[2] = 8;
//function
//Play-Function:
function playSample(x) {
    sounds[x].play();
}
//beat Start/Stop:
var beatInterval;
function checkBeat() {
    if (boolPlayStop == true) {
        beatInterval = setInterval(function () {
            if (i < beatArray.length) {
                playSample(beatArray[i]);
                i++;
            }
            else {
                i = 0;
            }
        }, 200);
    }
    else {
        clearInterval(beatInterval);
    }
}
//beat aufnehmen:
function recordABeat(x) {
    if (boolRecord == true) {
        beatArray.unshift(x);
    }
}
//Toggle Classes:
function toggleClasses(firstHtmlElement, secondHtmlElement) {
    firstHtmlElement.classList.add("isHidden");
    secondHtmlElement.classList.remove("isHidden");
}
//# sourceMappingURL=script08.js.map