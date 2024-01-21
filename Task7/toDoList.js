var mainToDoList = {
    data: function(){
        return {isDone: false}
    },
    props: ["items"],
    template: "<div style='border-style: solid; margin: 10px' :class='{finished: isDone}'>" +
        "ID: {{items.id}}<br>" +
        "{{items.title}}<br>" +
        "{{items.content}}<br>" +
        "{{items.deadline}}" +
        "<input type ='checkbox' v-model='isDone'> Fertig" +
        "<button @click='$emit(`delete-todo`, items)'>Entfernen</button>" +
        "</div>"
};

var toDoListController = {
    data:function() {
        return {
            newToDoItem: {
                title: "",
                content: "",
                deadline: "",
            }
        }
    },
    template: "<div>" +
        "Titel: <input v-model='newToDoItem.title'><br>" +
        "Content: <textarea v-model='newToDoItem.content'></textarea><br>" +
        "Deadline: <input v-model='newToDoItem.deadline'><br><br>" +
        "<button @click='$emit(`commit-todo`, newToDoItem)'>Hinzufügen</button>" +
        "</div>"
}


var vm = new Vue ({
    el: "#app",
    data: {
        toDoItems: [{
            id: 0,
            title: "Beispiel-Titel",
            content: "Beispiel-content",
            deadline: "Beispiel-deadline"
        },
        {
            id: 0,
            title: "Beispiel-Titel2",
            content: "Beispiel-content2",
            deadline: "Beispiel-deadline2"
        }],
        idCounter:0,
    },
    methods: {
        addToDoItem: function(item){
            this.idCounter++;
            let newItem = {
                id: this.idCounter,
                title: item.title,
                content: item.content,
                deadline: item.deadline
            }
            this.toDoItems.push(newItem);
        },
        deleteToDoItem: function(item){
            for (let toDoItemIndex in this.toDoItems){
                if (this.toDoItems[toDoItemIndex].id == item.id){
                    this.toDoItems.splice(toDoItemIndex, 1);
                }
            }
        }
    } ,
    components:  {
        "todo-list-controller": toDoListController,
        "main-todo-list": mainToDoList
    }

});

