namespace aufgabe11 { 

    interface ToDos {
        todosText: string;
        todosChecked: boolean;
    }
    
    let todolist: ToDos[] = [
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
      
    
    
    let inputDOMElement: HTMLInputElement;
    let addButtonDOMElement: HTMLElement;
    let todosDOMElement: HTMLElement;
    let counterDOMElement: HTMLElement;
    let doneDOMElement: HTMLElement;
    let openDOMElement: HTMLElement;
    
    /**
     * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
     * initialisiert werden
     */
    window.addEventListener("load", function(): void {
    
        
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        openDOMElement = document.querySelector("#open");
        doneDOMElement = document.querySelector("#done");
    
       
        addButtonDOMElement.addEventListener("click", addTodo);
    
        
        drawListToDOM();
    });
    
    function drawListToDOM(): void {
        // alle todos erst einmal aus dem DOM löschen
        todosDOMElement.innerHTML = "";
    
        // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
        for (let index: number = 0; index < todolist.length; index++) {
    
           
            let todo: HTMLElement = document.createElement("div");
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
            todo.innerHTML =  "<span class='check " + todolist[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                                + todolist[index].todosText +
                                "<span class='trash fas fa-trash-alt'></span>";
    
            // Zuweisen der Event-Listener für den Check- und den Trash-Button
            todo.querySelector(".check").addEventListener("click", function(): void {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function(): void {
                // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
                // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
                deleteTodo(index);
            });
    
            // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
            todosDOMElement.appendChild(todo);
        }
    
        updateCounter();
    }
    
    function updateCounter(): void {
        let open: number = 0; 
        let done: number = 0;
    
        for (let index: number = 0; index < todolist.length; index++) {
            if ( todolist[index].todosChecked == true) {
                done ++;
            }
            else (
                open++
            );
        }
        
        counterDOMElement.innerHTML = todolist.length + " in total";
        doneDOMElement.innerHTML = done + " done tasks";
        openDOMElement.innerHTML = open + " tasks still open";
    
    
    }
    
    /**
     * Ein neues ToDo wird folgendermaßen erstellt:
     */
    function addTodo(): void {
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
    function toggleCheckState(index: number): void {
    
        
        todolist[index].todosChecked = !todolist[index].todosChecked;
    
        /**
         * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
         * wird wieder getriggert
         */
        drawListToDOM();
    }
    
    
    function deleteTodo(index: number): void {
        
        todolist.splice(index, 1);
       
        drawListToDOM();
    }
    
    
    declare var Artyom: any;
    
    window.addEventListener("load", function (): void {
    
        const artyom: any = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i: any, wildcard: string): void {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                console.log(wildcard);
                
                todolist.unshift( 
                    {
                    todosText: wildcard,
                    todosChecked: false
                    });
                drawListToDOM();
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
            
            }
        });
    
        function startRecording(): void {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            });
        }
    
        function stopRecording(): void {
            artyom.fatality();
        }
        document.getElementById("startRecording").addEventListener("click", function (): void {
            startRecording();
            
        });
        document.getElementById("stopRecording").addEventListener("click", function (): void {
            stopRecording();
            artyom.say("deine Spracheingabe ist jetzt zu Ende");
        });
    });
    
    }
    