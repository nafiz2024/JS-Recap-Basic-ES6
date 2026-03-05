const loadPosts = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then(res => res.json())
        .then(data => displayPosts(data))

}


const displayPosts = posts => {
    const postsContainer = document.getElementById('posts_container');

    posts.forEach((post) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h1>${post.id}</h1>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(li);
    });
} 