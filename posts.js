const loadPosts = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then(res => res.json())
        .then(data => displayPosts(data))

}


const displayPosts = posts => {
    const postsContainer = document.getElementById('posts_container');
    postsContainer.innerHTML = '';

    posts.forEach((post) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex gap-3 items-center">
          <div class="">
            <h1 class="text-6xl">${post.id}</h1>
          </div>
          <div class="">
            <h3 class="text-2xl">${post.title}</h3>
          <p class="text-lg">${post.body}</p>
          </div>
        </div>
        `;
        postsContainer.appendChild(div);
    });
} 

loadPosts();