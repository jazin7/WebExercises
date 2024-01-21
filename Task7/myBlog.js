var newComment = {
    data: function(){
        return {
            comment:{
                userName:"",
                content:""
            }
        }
    },
    template:"<div>" +
        "<table><tr><td>Name</td><td><input v-model='comment.userName'></td></tr>" +
        "<tr><td>Text</td><td><textarea v-model='comment.content'></textarea></td></tr></table>" +
        "<button v-on:click='$emit(`commit-new-comment`, comment)'>Kommentieren</button>" +
        "</div>"
}

var commentSection = {
    props: ["comment"],
    template: "<div style='border-style: dashed; margin: 5px'> " +
        "<tr><td><h4>{{comment.id}}.) {{comment.userName}} kommentierte:</h4></td></tr>" +
        "<tr><td><p>{{comment.content}}</p></td></tr>" +
        "</div>"
}

var myBlogMainBody = {
    props:["blog"],
    data: function(){
        return{
            comments: [],
            commentCounter: 0
        };
    },
    methods:{
        addNewComment: function(comment){
            this.commentCounter++;
            let newCommentEntry = {
                userName: comment.userName,
                content: comment.content,
                id: this.commentCounter
            };
            this.comments.push(newCommentEntry);
        }
    },
    components: {
        "comment-section": commentSection,
        "new-comment": newComment
    },

    template:"<div style='border-style: solid; margin: 10px'>" +
        "<tr><td><h3>{{blog.title}}</h3></td></tr>" +
        "<tr><td><p>{{blog.content}}</p></td></tr>" +
        "<comment-section v-for='(comment, index) in comments' :key='index' :comment='comment'></comment-section>" +
        "<new-comment @commit-new-comment='addNewComment'></new-comment>" +
        "</div>"
}

var newBlogEntry = {
    data: function(){
        return{
            blogEntry:{
                title:"",
                content:""
            }
        }
    },
    template:"<div>" +
        "<table><tr><td>Titel</td><td><input v-model='blogEntry.title'></td></tr>" +
        "<tr><td>Inhalt</td><td><textarea v-model='blogEntry.content'></textarea></td></tr></table>" +
        "<button v-on:click='$emit(`commit-new-blog`, blogEntry)'>Erstellen</button>" +
        "</div>"
}

var vm = new Vue({
    el: "#app",
    data:{
        blogEntries: [{
            title: "Beispieleintrag",
            content: "Beispielcontent"
        }]
    },
    methods:{
        addNewBlog: function(blog){
            let newBlog = {
                title: blog.title,
                content: blog.content
            }
            this.blogEntries.push(newBlog);
        }
    },
    components: {
        "my-blog": myBlogMainBody,
        "create-blog": newBlogEntry,
        "comment-section": commentSection,
        "new-comment": newComment
    }
})