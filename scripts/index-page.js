// ----- Form Comment Display -----

let listOfUsers = [
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


for (let i = 0; i < listOfUsers.length; i++) {
    let comSection = document.querySelector(".comments__wrapper");

    let userCards = document.createElement("div");
    userCards.classList.add("comments__usercards");
    comSection.appendChild(userCards);

    let userImgBox = document.createElement("div");
    userImgBox.classList.add("comments__userimgbox");
    userCards.appendChild(userImgBox);
    
    let userImage = document.createElement("img");
    userImage.classList.add("comments__userimage");
    userImage.setAttribute("src", " ");
    // userImage.setAttribute("alt", "user image")
    userImgBox.appendChild(userImage);

    let userContent = document.createElement("div");
    userContent.classList.add("comments__userinfo");
    userCards.appendChild(userContent);

    let userInfo = document.createElement("div");
    userInfo.classList.add("comments__usercontent");
    userContent.appendChild(userInfo);

  
    let userName = document.createElement("p");
    userName.classList.add("comments__username");
    userName.innerHTML = listOfUsers[i].name;
    userInfo.appendChild(userName);

    let userDate = document.createElement("time");
    userDate.classList.add("comments__date");
    userDate.setAttribute("datetime", " ")
    userDate.innerHTML = listOfUsers[i].date;
    userInfo.appendChild(userDate);

    let userComment = document.createElement("p");
    userComment.classList.add("comments__msg");
    userComment.innerHTML = listOfUsers[i].comment;
    userContent.appendChild(userComment);

    let lineBreak = document.createElement("hr");
    lineBreak.classList.add("comments__linebreak")
    comSection.appendChild(lineBreak);
  
  }
