
let profileContainer = document.querySelector("#profileContainer")

function getProfile(){
    const urlParams = new URLSearchParams(window.location.search)
    let userName = urlParams.get("user")
    fetch(`https://api.github.com/users/${userName}`)
.then((data) =>{
    return data.json()
}).then((user) =>{
    console.log(user);
   let newHtml = ''

   newHtml =
       `
       <div class="ProfileCard">
       <img class="bigImage" src="${user.avatar_url}" alt="">
       <div class="logos">

       <div class="nameUser"
       <p class="nam">NAME</p>
       <p class="userName">${user.login}</p>
       </div>

       <div class="followersUser"
       <p>FOLLOWERS</p>
       <p class="followers"> ${user.followers}</p>
       </div>

       <div class="followingUser"
       <p>FOLLOWING</p>
       <p class="following">${user.following}</p>
       </div>

       <div class="responUser"
       <p>RESPONCE</p>
       <p class="public_repos">${user.public_repos}</p>
       </div>

       </div>
       </div>
       `
       profileContainer.innerHTML = newHtml;
    });
}




