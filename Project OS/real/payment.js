const chageplaceButton =document.getElementById('changeplace');
const paymentButton =document.getElementById('paymentButton');
const proceedButton =document.getElementById('proceedButton');
const startingMinutes = 10;
const countdownEl = document.getElementById('countdown');
const movieSelect = document.getElementById('selectedMovie');
var form = document.querySelector("#checkoutForm");
// Get the modal
var modal = document.getElementById("paymentModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


window.addEventListener('load',()=>{

    const seat = localStorage.getItem('seat');
    const price = localStorage.getItem('price');

    console.log('count', seat);
    console.log('total', price);
    
    document.getElementById('count').innerHTML = seat;
    document.getElementById('total').innerHTML = price;
})

// Function to get URL parameters by name
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // Get the selected movie name from the URL
  const selectedMovie = getURLParameter("movie");
  
  // Update the selected movie element
  if (movieSelect) {
    movieSelect.textContent = selectedMovie || "Unknown Movie";
  }
  


let time = startingMinutes * 60;
setInterval(updatecountdown,1000);
//Function to countdown
function updatecountdown() {
  const minutes = Math.floor(time / 60);
  let secord = time % 60;
  secord = secord < 10 ? '0' + secord : secord;
  countdownEl.innerHTML = `${minutes}:${secord}`;
  time--;
}

chageplaceButton.addEventListener('click',() => {
    window.location.href = "Booking.html";
})

paymentButton.addEventListener('click',() => {
  window.location.href = "generateTicket.html";
})

proceedButton.addEventListener('click',() => {
  //window.location.href = "generateTicket.html";
  modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



