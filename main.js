const tweeter = Tweeter();
const renderer = Renderer();

const post = () => {
  const post = $('#input').val();
  tweeter.addPost(post);
  renderer.renderPosts(tweeter.getPosts());
};

const deletePost = (postID) => {
  postId = $('.delete').closest('#posts').find(`#${postID}`).attr('id');

  tweeter.removePost(postId);
  renderer.renderPosts(tweeter.getPosts());
};

const addCommentToPost = (postID) => {
  postId = $('.commentBtn').closest('#posts').find(`#${postID}`).attr('id');
  const text = $('.commentInput')
    .closest('#posts')
    .find(`#${postID}`)
    .find('.commentInput')
    .val();

  tweeter.addComment(text, postId);
  renderer.renderPosts(tweeter.getPosts());
};

const deleteComment = (postID, commentID) => {
  tweeter.removeComment(postID, commentID);
  renderer.renderPosts(tweeter.getPosts());
};

renderer.renderPosts(tweeter.getPosts());
