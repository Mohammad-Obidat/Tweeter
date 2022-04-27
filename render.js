const Renderer = () => {
  const renderPosts = (posts) => {
    $('#posts').empty();

    for (let post of posts) {
      const postDiv = `<div id = '${post.id}' class= 'post'>
                      <h3 class ='header'>${post.text}</h3>
                      </div>`;

      $('#posts').append(postDiv);

      for (let comment of post.comments) {
        // console.log(post.comments);
        const commentPara = ` <p id = '${comment.id}' class='comments'>
                              <span class='delete-comment' onclick = deleteComment('${
                                post.id
                              }'${','}'${
          comment.id
        }')><i class="fas fa-trash"></i></i></span>
                              ${comment.text} </p>`;

        $(`#${post.id}`).append(commentPara);
      }
      const writeComment = `<input type = 'text' class = 'commentInput' placeholder = 'Got something to say?' />
                            <button type = 'submit' class = 'commentBtn' 
                            onclick = addCommentToPost('${post.id}') > Comment </button>`;
      $(`#${post.id}`).append(writeComment);

      const deleteBtn = `<button class = 'delete' onclick = deletePost('${post.id}') >Delete Post</button>`;
      $(`#${post.id}`).append(deleteBtn);
    }
  };

  return { renderPosts };
};
