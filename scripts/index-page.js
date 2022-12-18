// ----- Form Comment Display -----

// array of users and comments

let listOfComments = [
    { 
        name: "Connor Walton", 
        date: "02/17/2021", 
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    { 
        name: "Emilie Beach", 
        date: "01/09/2021", 
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    { 
        name: "Miles Acosta", 
        date: "12/20/2020", 
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
];

// funtion for elements based on list of users array

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
    userDate.innerHTML = listOfComments.date;

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

// function for rendering users to the html
function renderUsersComments() {
    const commentSectionEl = document.querySelector(".comments__container");

    for (let i = 0; i < listOfComments.length; i++) {
        commentSectionEl.appendChild(commentCards(listOfComments[i]));
       
        let lineBreak = document.createElement("hr");
        lineBreak.classList.add("comments__linebreak")
        commentSectionEl.appendChild(lineBreak);
    }
}
renderUsersComments();

// form submit data
const formEl = document.querySelector(".comments__form");
const formName = document.querySelector("#name");
const formDate = document.querySelector(".comments__date");
const formComment = document.querySelector("#comment");


function displayComments(event) {
    let name = event.target.name.value;
    let comment = event.target.comment.value;
    let validation = isNaN(name) && name.length > 2 && comment.length > 2;
    console.log(validation);

    if (validation) {

        const DateTime = luxon.DateTime;

        const newComment = {
            name: name,
            date: DateTime.now().toRelative(),
            comment: comment,
        };
        
        listOfComments.unshift(newComment);
        document.querySelector(".comments__container").innerHTML = "",
        renderUsersComments();

    } else {
        alert("Name and/or Comment are required");
    }

    event.preventDefault();
    event.target.reset();
}

formEl.addEventListener("submit", displayComments);
