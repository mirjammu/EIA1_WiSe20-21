var zaehler = 0;
var userTask = document.getElementById("new-task"); //Welcher Data-Type?
var checkInputBool = false;
var preventEvent = false;
document.addEventListener("keydown", function (event) {
    if (event.keyCode == 13 && checkInputBool == true) {
        createTask();
        setTimeout(function () {
            clearInput();
        }, 100);
        preventEvent = false;
    }
});
//createTask blockieren
document.addEventListener("click", function () {
    if (preventEvent == false) {
        checkInputBool = false;
    }
});
//createTask freischalten
userTask.addEventListener("click", function () {
    checkInputBool = true;
    preventEvent = true;
});
function createTask() {
    //Elemente jeder Task, die hinzugefügt werden müssen:
    var container = document.createElement("div");
    var icon1 = document.createElement("i");
    icon1.className = "far fa-circle";
    var icon2 = document.createElement("i");
    icon2.className = "far fa-check-circle isHidden";
    var text = document.createElement("span");
    text.className = "task-text";
    text.innerHTML = userTask.value;
    var icon3 = document.createElement("i");
    icon3.className = "fas fa-trash-alt";
    //Neue HTML Elemente werden in den Body/Container eingefügt
    document.body.appendChild(container);
    container.appendChild(icon1);
    container.appendChild(icon2);
    container.appendChild(text);
    container.appendChild(icon3);
    //Task-Zähler wird erhöht und die counter Funktion aktualisiert
    zaehler++;
    counter();
    //Kreis-, Abhaken- und Lösch-Button Event Listener mit jeweiliger Funktion
    icon1.addEventListener("click", function () {
        icon1.classList.add("isHidden");
        icon2.classList.remove("isHidden");
    });
    icon2.addEventListener("click", function () {
        icon2.classList.add("isHidden");
        icon1.classList.remove("isHidden");
    });
    icon3.addEventListener("click", function () {
        document.body.removeChild(container);
        zaehler--;
        counter();
    });
}
function counter() {
    document.querySelector("#counter").innerHTML = zaehler + " tasks are";
}
function clearInput() {
    userTask.value = "";
}
//# sourceMappingURL=script09.js.map