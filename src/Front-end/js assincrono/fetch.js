//fetch -> api de requisições http

async function getPosts() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

getPosts();