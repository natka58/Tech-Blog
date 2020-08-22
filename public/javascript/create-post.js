async function createpostFormHandler(event) {
  event.preventDefault();

  // const username = document.querySelector('#username-signup').value.trim();
  // const email = document.querySelector('#email-signup').value.trim();
  // const password = document.querySelector('#password-signup').value.trim();
  // console.log(`Signing up with username: ${username} and email: ${email}`);

  // if (username && email && password) {
  //   const response = await fetch('/api/users', {
  //     method: 'post',
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });

  const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-content"]').value;

  // const post_content = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];
 console.log("post");
 const response = await fetch(`/api/posts`, {
  method: 'POST',
  body: JSON.stringify({
      title,
      post_content
  }),
  headers: {
      'Content-Type': 'application/json'
  }
});

if (response.ok) {
  document.location.replace('/dashboard');
} else {
  alert(response.statusText);
}
}


// check response status
// if (response.ok) {
//   console.log('success');
//   document.location.replace('/dashboard');
// } else {
//   alert(response.statusText);
// }




document.querySelector('.new-post-form').addEventListener('submit', createpostFormHandler);