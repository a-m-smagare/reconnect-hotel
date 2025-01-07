function changeValue(delta) {
    const guestInput = document.getElementById('guests');
    let currentValue = parseInt(guestInput.value, 10) || 1; 
    const min = parseInt(guestInput.min, 10) || 1;
    const max = parseInt(guestInput.max, 10) || 10;

    currentValue += delta;

    guestInput.value = currentValue;
}

document.getElementById('guests').addEventListener('input', function (event) {
    const guestInput = event.target;
    const min = parseInt(guestInput.min, 10) || 1;
    const max = parseInt(guestInput.max, 10) || 10;
    let value = parseInt(guestInput.value, 10);

    if (value > max) {
        alert(`The maximum number of guests is ${max}.`);
        guestInput.value = max;
    }

    if (value < min) {
        guestInput.value = min;
    }
});

function validateForm(event) {
    event.preventDefault();

    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;
    var numberOfGuests = document.getElementById("guests").value;
    var numberOfRooms = document.getElementById("rooms").value;

    if (!checkin) {
        alert('Please select a check-in date.');
        return false;
    }

    if (!checkout) {
        alert('Please select a check-out date.');
        return false;
    }

    localStorage.setItem("checkin", checkin);
    localStorage.setItem("checkout", checkout);
    localStorage.setItem("guests", numberOfGuests);
    localStorage.setItem("rooms", numberOfRooms);

    localStorage.setItem("fromAvailabilityForm", true);

    window.location.href = './booking.html';
    return true;
}

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");

    // Add the 'visible' class to all images when the page loads
    images.forEach((image) => {
        image.classList.add("visible");
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    alert('Your message was sent successfully!');
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".navigation ul");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});



