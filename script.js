// Countdown for urgency
let countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 3); // 3 days offer

function updateCountdown() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0"+days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0"+hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0"+minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0"+seconds : seconds;

    if(distance < 0){
        clearInterval(timerInterval);
        document.getElementById("timer").innerText = "Offer Ended!";
    }
}

let timerInterval = setInterval(updateCountdown, 1000);

// Form submission redirect (optional)
document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thanks! We will contact you soon.");
});
