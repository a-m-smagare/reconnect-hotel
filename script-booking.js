var checkinDate = localStorage.getItem("checkin");
var checkoutDate = localStorage.getItem("checkout");
var guestAmount = localStorage.getItem("guests");
var roomAmount = localStorage.getItem("rooms");

var popup = document.getElementById("about-popup");
var link = document.getElementById("about-link");
var closeBtn = document.getElementById("closeBtn");

document.addEventListener('DOMContentLoaded', function () {

    var fromAvailabilityForm = localStorage.getItem("fromAvailabilityForm"); 

    if (fromAvailabilityForm === "true") {
        var checkinDate = localStorage.getItem("checkin");
        var checkoutDate = localStorage.getItem("checkout");
        var guestAmount = localStorage.getItem("guests");
        var roomAmount = localStorage.getItem("rooms");

        document.getElementById('guest-amount').value = guestAmount; 
        document.getElementById('room').value = roomAmount;  

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


