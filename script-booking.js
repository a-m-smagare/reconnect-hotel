// Dates from Home section into Booking Section
const checkinDate = localStorage.getItem("checkin");
const checkoutDate = localStorage.getItem("checkout");
const guestAmount = localStorage.getItem("guests");
const roomAmount = localStorage.getItem("rooms");

document.addEventListener("DOMContentLoaded", function () {

    const fromAvailabilityForm = localStorage.getItem("fromAvailabilityForm"); 

    if (fromAvailabilityForm === "true") {
        let checkinDate = localStorage.getItem("checkin");
        let checkoutDate = localStorage.getItem("checkout");
        let guestAmount = localStorage.getItem("guests");
        let roomAmount = localStorage.getItem("rooms");

        document.getElementById("guest-amount").value = guestAmount; 
        document.getElementById("room").value = roomAmount;  

        flatpickr("#dates", {
            mode: "range",
            dateFormat: "Y-m-d",
            minDate: "today",
            defaultDate: [checkinDate, checkoutDate],
        });

        localStorage.removeItem("fromAvailabilityForm");
    } 
    else {
        flatpickr("#dates", {
            mode: "range",
            dateFormat: "Y-m-d",
            minDate: "today",
        });
    }
});

// Make About Section appear/disappear
const popup = document.getElementById("about-popup");
const link = document.getElementById("about-link");
const closeBtn = document.getElementById("closeBtn");

link.addEventListener("click", function() {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});


