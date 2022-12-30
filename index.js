const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
        {
        name: "Eugène Delacroix",
        username: "sergreen",
        location: "Saint-Maurice, France",
        avatar: "images/avatar-delacroix.jpg",
        post: "images/post-delacroix.jpg",
        comment: "my beloved painter!",
        likes: 351
    },
        {
        name: "Paul Cézanne",
        username: "vantvmail",
        location: "Aix-en-Provence, France",
        avatar: "images/avatar-cezanne.jpg",
        post: "images/post-cezanne.jpg",
        comment: "his paintings drive me crazy, really",
        likes: 127
    }
];

const painterAvatarContainer = document.getElementById("painter-avatar-container");
const painterTextH3Container = document.getElementById("painter-text-h3-container");
const painterTextPContainer = document.getElementById("painter-text-p-container");
const postContainer = document.getElementById("post-container");
const likesContainer = document.getElementById("likes-container");
const userEmailContainer = document.getElementById("user-email-container");
const userCommentContainer = document.getElementById("user-comment-container");

const postImg = document.getElementById("post-img");
const iconLike = document.getElementById("icon-like");
const iconComment = document.getElementById("icon-comment");
const likeCount = document.getElementById("like-count");

const nextBnt = document.getElementById("next-bnt");

let countPosts = 0;
let countLikes = posts[countPosts].likes;


nextBnt.addEventListener("click", function() {   
    
    if (countPosts !== posts.length - 1) {
        countPosts += 1;
    } else {countPosts = 0}
    
    countLikes = posts[countPosts].likes;
    
    painterAvatarContainer.innerHTML = `
    <img class="avatar-img"
    src="${posts[countPosts].avatar}">
    `;
    
    painterTextH3Container.innerHTML = `
    <h3>${posts[countPosts].name}</h3>
    `;
    
    painterTextPContainer.innerHTML = `
    <p>${posts[countPosts].location}</p>
    `;
    
    postContainer.innerHTML = `
    <img class="post-img" 
    id="post-img" 
    src="${posts[countPosts].post}">
    `;
    
    likesContainer.innerHTML = `
    <p>${posts[countPosts].likes} likes</p>
    `;
    
    userEmailContainer.innerHTML = `
    <span class="user-email">${posts[countPosts].username}</span>
    `;
    
    userCommentContainer.innerHTML = `
    <p>${posts[countPosts].comment}</p>
    `;
    
});

iconLike.addEventListener("click", function() {
    countLikes += 1;
    likesContainer.textContent = `${countLikes} likes`;    
});

/* postImg.addEventListener("dblclick", function() {
    countLikes += 1;
    likesContainer.textContent = `${countLikes} likes`;    
});*/
