


let cards = document.querySelector("#cards")


fetch("https://api.github.com/users")
.then((data) =>{
    return data.json()
}).then((user) =>{
    let newHtml = ''
    user.forEach((list) => {
        // console.log(list);
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


function findUser(){
// api to get user
    let userInput = document.querySelector("#inputUser")
    let userValue = userInput.value;
    

    fetch(`https://api.github.com/users/${userValue}`)
    .then((data) =>{
        return data.json()
    }).then((user) =>{
        console.log(user);
        if(user.login){
            let newHtml = ''
            let towHtml = ''
            cards.innerHTML = ''
             newHtml = 
             `
             <span class="card" onclick="redirectToProfile('${user.login}')">
             <img class="images" src="${user.avatar_url}" alt="">
             <span class="names"> ${user.login}</span>
             </span>
             
             `
             cards.innerHTML = newHtml;
         
        }else{

            towHtml = 
            `
            <p>This is not found</p>

            `

            cards.innerHTML = towHtml;

        }
      
        });
}
