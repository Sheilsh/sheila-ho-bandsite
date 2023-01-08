// ----- Show Dates and Venue -----

// ---- api show data -------

const apiURL = "https://project-1-api.herokuapp.com/register";
const apiKey = {
    "api_key":"296396b1-e4ba-4315-9b34-bc3ff9c12ea7"
};

const apiShowDates = "https://project-1-api.herokuapp.com/showdates/?api_key=%3C296396b1-e4ba-4315-9b34-bc3ff9c12ea7%3E";


axios 
    .get(apiShowDates)
    .then((listOfShows) => {
        console.log(listOfShows);
        renderShowCards(listOfShows);
    })
    .catch((error) => {
        console.error(error);
    });

// ---- shows hidden titles ----

let showWrapper = document.querySelector(".shows__wrapper");
let hiddenTitleContainer = document.querySelector(".shows__titles--hidden")

let hiddenTitle1 = document.createElement("p");
hiddenTitle1.innerText = "Date";

let hiddenTitle2 = document.createElement("p");
hiddenTitle2.innerText = "Venue";

let hiddenTitle3 = document.createElement("p");
hiddenTitle3.innerText = "Location";

hiddenTitleContainer.append(hiddenTitle1, hiddenTitle2, hiddenTitle3);
showWrapper.prepend(hiddenTitleContainer);


// ----- shows ------

function showsOption(listOfShows) {
    let showCard = document.createElement("div");
    showCard.classList.add("shows__card");

    let showDateBox = document.createElement("div");
    showDateBox.classList.add("shows__info")
    
    let showDateTitle = document.createElement("p");
    showDateTitle.classList.add("shows__title");
    showDateTitle.innerHTML = "Date";
    
    let showDate = document.createElement("p");
    showDate.classList.add("shows__date");
    showDate.innerHTML = listOfShows.date;

    let showVenueBox = document.createElement("div");
    showVenueBox.classList.add("shows__info");

    let showVenueTitle = document.createElement("p");
    showVenueTitle.classList.add("shows__title");
    showVenueTitle.innerHTML = "Venue";
   
    let showVenue = document.createElement("p");
    showVenue.classList.add("shows__venue");
    showVenue.innerHTML = listOfShows.place;
  
    let showLocationBox = document.createElement("div");
    showLocationBox.classList.add("shows__info");

    let showLocationTitle = document.createElement("p");
    showLocationTitle.classList.add("shows__title");
    showLocationTitle.innerHTML = "Location";

    let showLocation = document.createElement("p");
    showLocation.classList.add("shows__location");
    showLocation.innerHTML = listOfShows.location;

    let showButton = document.createElement("button");
    showButton.classList.add("shows__button");
    showButton.innerText = "Buy Tickets";

 
    showCard.append(showDateBox, showVenueBox, showLocationBox, showButton);

    showDateBox.append(showDateTitle, showDate);
    showVenueBox.append(showVenueTitle, showVenue);
    showLocationBox.append(showLocationTitle, showLocation);

    return showCard;
}

// ---- function for rendering shows list ----

function renderShowCards(apiShowDates) {
    console.log(apiShowDates.data);
    const showSectionEl = document.querySelector(".shows__container");

    for (let i = 0; i < apiShowDates.data.length; i++) {
        showSectionEl.appendChild(showsOption(apiShowDates.data[i]));
       
        let lineBreak = document.createElement("hr");
        lineBreak.classList.add("shows__linebreak")
        showSectionEl.appendChild(lineBreak);
    }
}
// renderShowCards();

// ---- shows - selected states ----
// needs to be fixed selected states not working 

let showsContain = document.querySelector(".shows__container");
let showsRow = showsContain.getElementsByClassName("shows__card");

for (let i = 0; i < showsRow.length; i++) {
  showsRow[i].addEventListener("click", function() {
    let selected = document.getElementsByClassName("active");

    if (selected.length > 0) {
      selected[0].className = selected[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

let showsHeaders = document.getElementsByClassName("shows__title");
// let showsHeaders = document.querySelector(".shows__title");
console.log(showsHeaders);

showsHeaders.addEventListener("click", function() {
    showsHeaders.classList.toggle(".shows__titles--selected");
});

