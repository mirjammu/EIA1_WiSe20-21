var aufgabe11;
(function (aufgabe11) {
    var todolist = [
        {
            todosText: "Lernen",
            todosChecked: true
        },
        {
            todosText: "Aufräumen",
            todosChecked: false
        },
        {
            todosText: "Harry Potter 3 anschauen",
            todosChecked: false
        }
    ];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var doneDOMElement;
    var openDOMElement;
    /**
     * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
     * initialisiert werden
     */
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        openDOMElement = document.querySelector("#open");
        doneDOMElement = document.querySelector("#done");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    function drawListToDOM() {
        // alle todos erst einmal aus dem DOM löschen
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            /**
             * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
             * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
             *
             * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
             * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
             * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
             * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
             * hier muss die Zeichenkette unterbrochen werden.
             */
            todo.innerHTML = "<span class='check " + todolist[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                + todolist[index].todosText +
                "<span class='trash fas fa-trash-alt'></span>";
            // Zuweisen der Event-Listener für den Check- und den Trash-Button
            todo.querySelector(".check").addEventListener("click", function () {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
                deleteTodo(index);
            });
            // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
            todosDOMElement.appendChild(todo);
        };
        // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
        for (var index = 0; index < todolist.length; index++) {
            _loop_1(index);
        }
        updateCounter();
    }
    function updateCounter() {
        var open = 0;
        var done = 0;
        for (var index = 0; index < todolist.length; index++) {
            if (todolist[index].todosChecked == true) {
                done++;
            }
            else
                (open++);
        }
        counterDOMElement.innerHTML = todolist.length + " in total";
        doneDOMElement.innerHTML = done + " done tasks";
        openDOMElement.innerHTML = open + " tasks still open";
    }
    /**
     * Ein neues ToDo wird folgendermaßen erstellt:
     */
    function addTodo() {
        /**
         * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
         * (ansonsten würde ein leerer ToDo-Text erstellt werden,
         * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
         */
        if (inputDOMElement.value != "") {
            /**
             * Der Eingabe-Wert aus dem Input-Feld (.value) wird
             * als neues Element in das ToDo-Array gepusht.
             * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
             * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
             * der Status "unchecked", hier false, gepusht.
             */
            //todosText.push(inputDOMElement.value);
            //todosChecked.push(false);
            todolist.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false
            });
            // Jetzt wird der Text aus dem Eingabefeld gelöscht
            inputDOMElement.value = "";
            /**
             * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
             * wird wieder getriggert
             */
            drawListToDOM();
        }
    }
    /**
     * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
     */
    function toggleCheckState(index) {
        todolist[index].todosChecked = !todolist[index].todosChecked;
        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
    function deleteTodo(index) {
        todolist.splice(index, 1);
        drawListToDOM();
    }
    window.addEventListener("load", function () {
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                console.log(wildcard);
                todolist.unshift({
                    todosText: wildcard,
                    todosChecked: false
                });
                drawListToDOM();
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
            }
        });
        function startRecording() {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            });
        }
        function stopRecording() {
            artyom.fatality();
        }
        document.getElementById("startRecording").addEventListener("click", function () {
            startRecording();
        });
        document.getElementById("stopRecording").addEventListener("click", function () {
            stopRecording();
            artyom.say("deine Spracheingabe ist jetzt zu Ende");
        });
    });
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=script11.js.map