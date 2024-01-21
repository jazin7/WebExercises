// wir beginnen hier mit. dabei gibt es ein beispiel element
var vm = new Vue({
    el: "#app",
    data: {
        toDoItems: [{
            id: 0,
            title: "First Item",
            content: "Erstelle to-Do-List",
            deadline: "06.07.2020"
        }],
        idCounter: 0
    },
    methods: {
        //hier adden wir ein item. wir packen das in ein seperates objekt(newtodoitem)
        // dann pushen wir es in toDoItems von oben
        addToDoItem: function(item){
            this.idCounter++;
            item.id = this.idCounter;
            let newToDoItem = {
                id: item.id,
                title: item.title,
                content: item.content,
                deadline: item.deadline
            };
            this.toDoItems.push(newToDoItem);
        },
        // wir übergeben ein item und lassen es anschließend löschen durch die funktion
        deleteToDoItem: function(item){
            for (let toDoItemIndex in this.toDoItems){
                if (this.toDoItems[toDoItemIndex].id == item.id){
                    this.toDoItems.splice(toDoItemIndex, 1);
                }
            }
        }
    },
    // hier die beiden vue components
    components: {
        'main-to-do-list': mainToDoList,
        'to-do-list-controller': toDoListController
    }
});

var mainToDoList = {
    data: function(){
        return {isDone: false}
    },
    methods: {
        deleteToDoItem: function(){
            this.isDone = false;
            this.$emit("delete-todo", this.item);
        }
    },
    props: ['item'],
    template: '<div class="main-todo"><table class="todo-list" :class="{finished: isDone}">' +
        '<tr><th class="todo-list">{{item.title}}</th></tr>' +
        '<tr><td class="todo-list">{{item.content}}</td></tr>' +
        '<tr><td class="todo-list">{{item.deadline}}<br>' +
        '<input type="checkbox" id="checkbox" v-model="isDone"><label>Fertig</label></td></tr>' +
        '</table><button v-on:click="deleteToDoItem">Entfernen</button></div>'
}
// hier erzeugen wir die textfelder und übermitteln den input der textfelder in ein arrayobjekt
var toDoListController = {
    data: function(){
        return {
            newToDoItem: {
                key: 0,
                title: "",
                content: "",
                deadline: ""
            }
        }
    },
    template: '<div class="list-controller">' +
        '<table><tr><td>Titel</td><td><input v-model="newToDoItem.title"></td></tr>' +
        '<tr><td>Beschreibung</td><td><textarea v-model="newToDoItem.content"></textarea></td></tr>' +
        '<tr><td>Deadline</td><td><input v-model="newToDoItem.deadline"></td></tr></table>' +
        //schickt mittels commit-todo das objektarray newToDoItem an die HTML wo es dann mit addToDoItem ins objektarray der main gespeichert wird.
        '<button v-on:click="$emit(`commit-todo`, newToDoItem)">Hinzufügen</button></div>'
}