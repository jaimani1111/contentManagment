var posts = [];

function createPost() {
  var titleInput = document.getElementById('post-title');
  var contentInput = document.getElementById('post-content');

  var post = {
    title: titleInput.value,
    content: contentInput.value
  };

  posts.push(post);
  displayPosts();

  titleInput.value = '';
  contentInput.value = '';
}

function displayPosts() {
  var postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';

  posts.forEach(function(post) {
    var postElement = document.createElement('div');
    postElement.classList.add('post');

    var titleElement = document.createElement('h2');
    titleElement.classList.add('post-title');
    titleElement.textContent = post.title;

    var contentElement = document.createElement('p');
    contentElement.classList.add('post-content');
    contentElement.textContent = post.content;

    var footerElement = document.createElement('p');
    footerElement.classList.add('post-footer');
    footerElement.textContent = 'Posted on ' + new Date().toLocaleString();

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(footerElement);

    postsContainer.appendChild(postElement);
  });
}
