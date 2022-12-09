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

for (let i = 0; i < listOfShows.length; i++) {
    let showSection = document.querySelector(".shows__wrapper");

    let showCards = document.createElement("div");
    showCards.classList.add("shows__showcards");
    showSection.appendChild(showCards);

    let showInfo = document.createElement("div");
    showInfo.classList.add("shows__showinfo");
    showCards.appendChild(showInfo);

    let showDateTitle = document.createElement("p");
    showDateTitle.classList.add("shows__titles");
    showDateTitle.innerHTML = "Date";
    showCards.appendChild(showDateTitle);

    let showDate = document.createElement("time");
    showDate.classList.add("shows__date");
    showDate.setAttribute("datetime", " ")
    showDate.innerHTML = listOfShows[i].date;
    showCards.appendChild(showDate);

    let showVenueTitle = document.createElement("p");
    showVenueTitle.classList.add("shows__titles");
    showVenueTitle.innerHTML = "Venue";
    showCards.appendChild(showVenueTitle);
  
    let showVenue = document.createElement("p");
    showVenue.classList.add("shows__venue");
    showVenue.innerHTML = listOfShows[i].venue;
    showCards.appendChild(showVenue);

    let showLocationTitle = document.createElement("p");
    showLocationTitle.classList.add("shows__titles");
    showLocationTitle.innerHTML = "Location";
    showCards.appendChild(showLocationTitle);

    let showLocation = document.createElement("p");
    showLocation.classList.add("shows__location");
    showLocation.innerHTML = listOfShows[i].location;
    showCards.appendChild(showLocation);

    let showButton = document.createElement("button");
    showButton.classList.add("shows__button");
    showButton.innerText = "Buy Tickets";
    showCards.appendChild(showButton);

    let lineBreak = document.createElement("hr");
    lineBreak.classList.add("shows__linebreak")
    showSection.appendChild(lineBreak);

}

