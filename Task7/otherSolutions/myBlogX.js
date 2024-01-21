var newComment = {
    data: function(){
        return {
            comment: {
                user: "",
                content: ""
            }
        };
    },
    template: '<div class="addNewComment">' +
        ' <table><tr><td>User</td><td><input v-model="comment.user"></td></tr>' +
        ' <tr><td>Inhalt</td><td><textarea v-model="comment.content"></textarea></td></tr></table>' +
        ' <button v-on:click="$emit(`commit-new-comment`, comment)">Posten</button></div>'
};

var commentSection = {
    props: ['comment'],
    template: '<div class="comment" style="border-style: solid; margin:2px;"><table>' +
        ' <tr><td><h3>Eintrag {{comment.id}}</h3></td></tr>' +
        ' <tr><td><p>{{comment.user}} schrieb:</p></td></tr>' +
        ' <tr><td><p>{{comment.content}}</p></td></tr>' +
        '</table></div>'
};

var myBlogMainBody = {
    props: ['blog'],
    data: function(){
        return {
            comments: [],
            commentCount: 0
        };
    },
    methods: {
        addNewComment: function(comment){
            this.commentCount++;
            let newCommentEntry = {
                user: comment.user,
                content: comment.content,
                id: this.commentCount
            };
            this.comments.push(newCommentEntry);
        }
    },
    components: {
        'comment-section': commentSection,
        'new-comment': newComment
    },
    template: '<div class="blogEntry" style="border-style: solid; margin:5px;"><table>' +
        ' <tr><td><h3>{{blog.title}}</h3></td></tr>' +
        ' <tr><td><p>{{blog.content}}</p></td></tr></table>' +
        '<comment-section v-for="comment in comments" :key="comment.id" :comment="comment"></comment-section>' +
        '<new-comment @commit-new-comment="addNewComment"></new-comment></div>'
};

var newBlogEntry = {
    data: function(){
        return {
            blogEntry: {
                title: "",
                content: ""
            }
        };
    },
    template: '<div class="newBlog">' +
        ' <table><tr><td>Titel</td><td><input v-model="blogEntry.title"></td></tr>' +
        ' <tr><td>Inhalt</td><td><textarea v-model="blogEntry.content"></textarea></td></tr></table>' +
        ' <button v-on:click="$emit(`commit-new-blog`, blogEntry)">Erstellen</button></div>'
};

var vm = new Vue({
    el: "#app",
    data: {
        blogEntries: [{
            title: "Erster Eintrag",
            content: "Hier könnte dein Inhalt stehen"
        }, {
            title: "Zweiter Eintrag",
            content: "Hier könnte noch mehr Inhalt stehen"
        }]
    },
    methods: {
        addNewBlog: function(blog){
            let newBlog = {
                title: blog.title,
                content: blog.content
            };
            this.blogEntries.push(newBlog);
        }
    },
    components: {
        'my-blog': myBlogMainBody,
        'create-blog-entry': newBlogEntry
    }
});
