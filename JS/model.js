const Tweeter = () => {
  let postIdCounter = mockPosts.length + 1;
  let commentIdCounter = 6;
  const _posts = mockPosts.slice();

  const getPosts = () => _posts; // returns the posts array

  const addPost = (text) => {
    // adds a post object to posts

    postIdCounter++;
    let post = {
      text: text,
      id: `p${postIdCounter}`,
      comments: [],
    };

    return _posts.push(post);
  };

  const removePost = (postID) => {
    // removes the relevant post from posts

    for (let post of _posts) {
      if (postID == post.id) {
        let deletePostById = _posts.indexOf(post);
        _posts.splice(deletePostById, 1);
      }
    }
    return _posts;
  };

  const addComment = (text, postID) => {
    // It should push an object to the relevant post’s comments array

    for (let post of _posts) {
      if (postID == post.id) {
        commentIdCounter++;
        let addCommentById = _posts.indexOf(post);
        let comment = {
          id: `c${commentIdCounter}`,
          text: text,
        };
        return _posts[addCommentById].comments.push(comment);
      }
    }
  };

  const removeComment = (postId, commentId) => {
    for (let post of _posts) {
      if (post.id === postId) {
        removeCommentFromPost(post, commentId);
      }
    }
  };

  const removeCommentFromPost = (post, commentId) => {
    for (let i = 0; i < post.comments.length; i++) {
      if (post.comments[i].id === commentId) {
        return post.comments.splice(i, 1);
      }
    }
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};

/* Check Outputs
const tweeter = Tweeter();

tweeter.addPost('This is my own post!');
console.log(tweeter.getPosts());
tweeter.removePost('p1');
console.log(tweeter.getPosts());
tweeter.addComment('Damn straight it is!', 'p3');
tweeter.addComment('Second the best!', 'p2');
console.log(tweeter.getPosts());
tweeter.removeComment('p2', 'c6');

console.log(tweeter.getPosts()); */
