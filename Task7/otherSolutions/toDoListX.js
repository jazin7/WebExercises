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
        '<button v-on:click="$emit(`commit-todo`, newToDoItem)">Hinzufügen</button></div>'
}

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
        deleteToDoItem: function(item){
            for (let toDoItemIndex in this.toDoItems){
                if (this.toDoItems[toDoItemIndex].id == item.id){
                    this.toDoItems.splice(toDoItemIndex, 1);
                }
            }
        }
    },
    components: {
        'main-to-do-list': mainToDoList,
        'to-do-list-controller': toDoListController
    }
});
