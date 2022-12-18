// ----- Show Dates and Venue -----

let listOfShows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
    },
];

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
    showVenue.innerHTML = listOfShows.venue;
  
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

function renderShowCards() {
    const showSectionEl = document.querySelector(".shows__container");

    for (let i = 0; i < listOfShows.length; i++) {
        showSectionEl.appendChild(showsOption(listOfShows[i]));
       
        let lineBreak = document.createElement("hr");
        lineBreak.classList.add("shows__linebreak")
        showSectionEl.appendChild(lineBreak);
    }
}
renderShowCards();

// ---- button - selected states
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

let showsHeaders = document.querySelector(".shows__title");

showsHeaders.addEventListener("click", function() {
    showsHeaders.classList.toggle(".shows__titles--selected");
});