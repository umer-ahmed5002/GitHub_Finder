
let cards = document.querySelector("#cards")

fetch("https://api.github.com/users")
.then((data) =>{
    return data.json()
}).then((user) =>{
    let newHtml = ''
    user.forEach((list) => {
        console.log(list);
        newHtml += 
        `
        <span class="card" onclick="redirectToProfile('${list.login}')">
        <img class="images" src="${list.avatar_url}" alt="">
        <span class="names"> ${list.login}</span>
        </span>
        
        `
        cards.innerHTML = newHtml;
    });
})


function redirectToProfile(username) {
    // Redirect to the profile page for the clicked user
    window.location.href = `profile.html?user=${username}`;
}