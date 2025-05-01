function changeBackground() {
  //colors
  const colors = ["#fef6e4", "#d8e2dc", "#e2ece9", "#f0efeb", "#fde2e4", "#e4c1f9"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// function to fetch and display posts
function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5') // get first 5 posts
      .then(response => response.json())
      .then(data => {
          const container = document.getElementById('posts-container');
          container.innerHTML = ''; // Clear previous content
          data.forEach(post => {
              const postDiv = document.createElement('div');
              postDiv.classList.add('post');
              postDiv.innerHTML = `
                  <h3>${post.title}</h3>
                  <p>${post.body}</p>
                  <hr/>
              `;
              container.appendChild(postDiv);
          });
      })
      .catch(error => console.error('Error fetching posts:', error));
}

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback');

  if (!name || !email || !message) {
      feedback.textContent = "Please fill out all fields.";
      return;
  }

  // Simple email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      return;
  }

  feedback.style.color = "green";
  feedback.textContent = "Form submitted successfully!";
  this.reset(); // Clear form
});