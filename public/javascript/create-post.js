async function newFormHandler(event) {
  event.preventDefault();

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




document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);