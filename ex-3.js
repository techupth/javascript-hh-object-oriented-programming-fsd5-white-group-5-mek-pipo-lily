//  Start coding here

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(posts) {
    this.post = [];
  }

  addPost(post) {
    this.post.push(post);
  }

  sharePost(postTitle) {
    console.log(`You've shared post ${postTitle} to your friend.`);
  }
}

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [];
  }

  addComment(comment) {
    this.comment.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }

  add() {
    this.like = this.like + 1;
  }
}

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }

  addGroup(group) {
    this.groupList.push(group);
  }

  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }

  send(commentCreatedBy, postTitle) {
    console.log(
      `Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`
    );
  }
}
