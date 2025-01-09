class Post {
    constructor (title, content) {
        this.title = title;
        this.content = content;
    }

    publish() {
        console.log(`Title: ${this.title}, Content: ${this.content}`);
    }
}

export default Post;