// ----- Form Comment Display -----

// -------------- api comments data --------------------

const apiURL = "https://project-1-api.herokuapp.com/register";
const apiKey = {
    "api_key":"971e0594-0b16-49ba-9789-f91558cdc707"
};

const apiShowDates = "https://project-1-api.herokuapp.com/comments/?api_key=%3C971e0594-0b16-49ba-9789-f91558cdc707%3E";


axios 
    .get(apiShowDates)
    .then((listOfComments) => {
        console.log(listOfComments);

        renderUsersComments(listOfComments);
    })
    .catch((error) => {
        console.error(error);
    });

// ---- funtion for elements based on list of comments array ----

function commentCards(listOfComments) { 

    // user card element
    let userCard = document.createElement("div");
    userCard.classList.add("comments__usercard");

    //user imgbox with img inside
    let userImgBox = document.createElement("div");
    userImgBox.classList.add("comments__userimgbox");
    
    let userImage = document.createElement("img");
    userImage.classList.add("comments__userimage");
    userImage.setAttribute("src", " ");
    // userImage.setAttribute("alt", "user image");

    //user info box 
    let userContent = document.createElement("div");
    userContent.classList.add("comments__usercontent");

    // user content box
    let userInfo = document.createElement("div");
    userInfo.classList.add("comments__userinfo");
  
    // user name
    let userName = document.createElement("p");
    userName.classList.add("comments__username");
    userName.innerHTML = listOfComments.name;

    // user time
    let userDate = document.createElement("p");
    userDate.classList.add("comments__date");
    userDate.innerHTML = listOfComments.timestamp;

    // user comment
    let userComment = document.createElement("p");
    userComment.classList.add("comments__msg");
    userComment.innerHTML = listOfComments.comment;

    // appends
    userCard.append(userImgBox, userContent);
    userImgBox.appendChild(userImage);
    userContent.append(userInfo,userComment);
    userInfo.append(userName,userDate);

    return userCard;
}

// ---- function for rendering users to the html ----
function renderUsersComments(apiComments) {
    console.log(apiComments.data);
    const commentSectionEl = document.querySelector(".comments__container");

    for (let i = 0; i < apiComments.data.length; i++) {
        commentSectionEl.appendChild(commentCards(apiComments.data[i]));
       
        let lineBreak = document.createElement("hr");
        lineBreak.classList.add("comments__linebreak")
        commentSectionEl.appendChild(lineBreak);
    }
}
// renderUsersComments();

// ---- form comment submit ----
const formEl = document.querySelector(".comments__form");
const formName = document.querySelector("#name");
const formDate = document.querySelector(".comments__date");
const formComment = document.querySelector("#comment");


function displayComment(event) {
    let name = event.target.name.value;
    let comment = event.target.comment.value;
    let validation = isNaN(name) && name.length > 2 && comment.length > 2;

    if (validation) {

        // const DateTime = luxon.DateTime;

        const newComment = {
            name: name,
            // date: DateTime.now().toRelative(),
            timestamp: DateTime.now().toRelative(),
            // date: timestamp,
            comment: comment,
        };
        
        listOfComments.unshift(newComment);
        document.querySelector(".comments__container").innerHTML = "",
        renderUsersComments();

    } else {
        alert("Name and/or comment are required");
    }

    event.preventDefault();
    event.target.reset();
}

formEl.addEventListener("submit", displayComment);

// ---- function for time stamp ----
// need to fix time unix-timestamp 

