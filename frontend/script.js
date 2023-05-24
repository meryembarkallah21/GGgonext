const API_URL = 'http://localhost:5000/graphql'; // Replace with your API endpoint URL

// DOM Elements
const app = document.getElementById('app');
const loginPage = document.getElementById('login-page');
const registerPage = document.getElementById('register-page');
const forumPage = document.getElementById('forum-page');
const postsPage = document.getElementById('posts-page');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const addForumForm = document.getElementById('add-forum-form');
const addPostForm = document.getElementById('add-post-form');
const forumList = document.getElementById('forum-list');
const postList = document.getElementById('post-list');
const forumTitle = document.getElementById('forum-title');

// Event listeners
let currentForumId = null;

loginForm.addEventListener('submit', handleLogin);
registerForm.addEventListener('submit', handleRegister);
addForumForm.addEventListener('submit', handleAddForum);
addPostForm.addEventListener('submit', handleAddPost);
document.getElementById('login-link').addEventListener('click', showLoginPage);
document.getElementById('register-link').addEventListener('click', showRegisterPage);

// Functions
function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation {
          login(username: "${username}", password: "${password}") {
            id
          }
        }
      `,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Check if the response has errors
      if (data.errors) {
        throw new Error(data.errors[0].message);
      }
      // Store the user ID in localStorage or sessionStorage for future API requests
      const { id } = data.data.login;
      localStorage.setItem('userId', id); // Store the user ID in localStorage
      // ...
      // Show forum page on successful login
      showForumPage();
    })
    .catch((error) => {
      console.error('Login error:', error);
    });
}

function handleRegister(e) {
  e.preventDefault();
  const username = document.getElementById('new-username').value;
  const email = document.getElementById('new-email').value;
  const password = document.getElementById('new-password').value;
  fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation {
          createUser(username: "${username}", email: "${email}", password: "${password}") {
            id
          }
        }
      `,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server
      // ...
      // Show login page after successful registration
      showLoginPage();
    })
    .catch((error) => {
      console.error('Registration error:', error);
    });
}

function handleAddForum(e) {
  e.preventDefault();
  const forumName = document.getElementById('forum-name').value;
  fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation {
          createForum(name: "${forumName}") {
            id
            name
          }
        }
      `,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server
      // ...
      // Refresh the forum list
      fetchForums();
    })
    .catch((error) => {
      console.error('Add forum error:', error);
    });
}

function handleAddPost(e) {
  e.preventDefault();
  const postContent = document.getElementById('post-content').value;
  const userId = localStorage.getItem('userId'); // Retrieve the user ID from local storage
  fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation {
          createPost(forumId: ${currentForumId}, content: ${postContent}, userId: ${userId}) {
            id
            content
            user {
              username
            }
          }
        }
      `,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server
      // ...
      // Refresh the post list
      fetchPosts(currentForumId);
    })
    .catch((error) => {
      console.error('Add post error:', error);
    });
}

function showLoginPage() {
  loginPage.style.display = 'block';
  registerPage.style.display = 'none';
  forumPage.style.display = 'none';
  postsPage.style.display = 'none';
}

function showRegisterPage() {
  loginPage.style.display = 'none';
  registerPage.style.display = 'block';
  forumPage.style.display = 'none';
  postsPage.style.display = 'none';
}

function showForumPage() {
  loginPage.style.display = 'none';
  registerPage.style.display = 'none';
  forumPage.style.display = 'block';
  postsPage.style.display = 'none';
  fetchForums();
}

function showPostsPage() {
  loginPage.style.display = 'none';
  registerPage.style.display = 'none';
  forumPage.style.display = 'none';
  postsPage.style.display = 'block';
  fetchPosts(currentForumId);

  const backButton = document.getElementById('back-button');
  if (backButton) {
    backButton.addEventListener('click', showForumPage);
  }
}

function fetchForums() {
  fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          getForums {
            id
            name
          }
        }
      `,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server
      const { getForums } = data.data;
      const forums = getForums;
      renderForumList(forums);
    })
    .catch((error) => {
      console.error('Fetch forums error:', error);
    });
}

function renderForumList(forums) {
  forumList.innerHTML = '';
  forums.forEach((forum) => {
    const forumItem = document.createElement('div');
    forumItem.classList.add('forum-item'); // Add a CSS class for styling
    const forumName = document.createElement('p');
    forumName.textContent = forum.name;
    forumItem.appendChild(forumName);

    forumItem.addEventListener('click', () => {
      showPostsPage();
      currentForumId = forum.id; // Set the current forum ID
      forumTitle.textContent = forum.name;
    });

    forumList.appendChild(forumItem);
  });
}

// ...

function fetchPosts(forumId) {
  const query = `
    query GetForumPosts($forumId: ID!) {
      getForum(id: $forumId) {
        id
        name
        posts {
          id
          content
          user {
            id
            username
          }
        }
      }
    }
  `;

  const variables = {
    forumId: forumId,
  };

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const forum = data.data.getForum;
      if (forum && forum.posts) {
        renderPosts(forum.posts);
      } else {
        console.error('No posts found.');
      }
    })
    .catch((error) => {
      console.error('Fetch posts error:', error);
    });
}

function renderPosts(posts) {
  postList.innerHTML = '';
  posts.forEach((post) => {
    const postItem = document.createElement('div');
    postItem.classList.add('post-item');

    const content = document.createElement('p');
    content.textContent = post.content;

    const user = document.createElement('p');
    user.textContent = `Posted by: ${post.user.username}`;

    postItem.appendChild(content);
    postItem.appendChild(user);
    postList.appendChild(postItem);
  });
}



// Initial setup
showLoginPage();
