let users = JSON.parse(localStorage.getItem(`users`));
let userNum = JSON.parse(localStorage.getItem(`user`));
let user = users[userNum];
let divUser = document.getElementsByClassName(`user`)[0];
let postsBtn = document.getElementsByClassName(`postsBtn`)[0];
let postsDiv = document.getElementsByClassName(`posts`)[0];

divUser.innerHTML =
    `<div class="divBlock">
    <h1>USER INFO</h1>
    <ul>
        <li>id: ${user.id}</li>
        <li>name: ${user.name}</li>
        <li>username: ${user.username}</li>
        <li>phone: ${user.phone}</li>
        <li>email: ${user.email}</li>
        <li>website: ${user.website}</li>
        <li>city: ${user.address.city}</li>
        <li>street: ${user.address.street}</li>
        <li>suit: ${user.address.suite}</li>
        <li>lat: ${user.address.geo.lat}</li>
        <li>lng: ${user.address.geo.lng}</li>
        <li>zip code: ${user.address.zipcode}</li>
        <li>company name: ${user.company.name}</li>
        <li>bs: ${user.company.bs}</li>
        <li>catch phrase: ${user.company.catchPhrase}</li>  
    </ul></div>`

postsBtn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                let postDiv = document.createElement('div');
                let postButton = document.createElement('button');


                postDiv.innerHTML = `
                <div>${post.title}</div>`
                postButton.innerText = `go to post`
                postButton.onclick = () => {
                    location.href = `post-details.html?Post_Id=${post.id}`;
                    console.log(`button id ${post.id}`);
                }
                postsDiv.append(postDiv, postButton);
            }
        })
}