const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('selectedMovie');
const confirmButton = document.querySelector('.confirm-button');


populateUI();

let ticketPrice1 = +localStorage.getItem('selectedMoviePrice');
let ticketPrice2 = ticketPrice1+20;

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


// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const seatNo = [...selectedSeats].map((seat) => seat.getAttribute('name'));
  const selectedSeatsAB = [...selectedSeats].filter(seat => {
    const seatName = seat.getAttribute('name');
    return seatName && (seatName.startsWith('A') || seatName.startsWith('B'));
  });

  const selectedSeatsOther = [...selectedSeats].filter(seat => {
    const seatName = seat.getAttribute('name');
    return !seatName || (!seatName.startsWith('A') && !seatName.startsWith('B'));
  });

  const seatsIndexAB = selectedSeatsAB.map(seat => [...seats].indexOf(seat));
  const seatsIndexOther = selectedSeatsOther.map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify([...seatsIndexAB, ...seatsIndexOther]));

  const selectedSeatsCountAB = selectedSeatsAB.length;
  const selectedSeatsCountOther = selectedSeatsOther.length;

  count.innerText = seatNo;
  total.innerText = (selectedSeatsCountOther * ticketPrice1) + (selectedSeatsCountAB * ticketPrice2);
}

// Get data from local storage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
  const OccupiedSeats = JSON.parse(localStorage.getItem('occupied'));
  if (OccupiedSeats !== null && OccupiedSeats.length > 0) {
  seats.forEach((seat, index) => {
    if (OccupiedSeats.indexOf(index) > -1) {
      seat.classList.remove('selected');
      seat.classList.add('occupied');
    }
  });
}
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  const selectedMovieIndex = e.target.selectedIndex;
  const selectedMoviePrice = e.target.value;
  setMovieData(selectedMovieIndex, selectedMoviePrice);
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Confirm booking button click event
confirmButton.addEventListener('click', () => {
  console.log('Click comfirm')
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  selectedSeats.forEach((seat) => {
    seat.classList.remove('selected');
    seat.classList.add('occupied');
  });

  const seat = document.getElementById('count').innerText;
  const price = document.getElementById('total').innerText;
  localStorage.setItem('seat', seat);
  localStorage.setItem('price', price);

  //updateSelectedCount();
  window.location.href = "Payment.html";
});

const ticketPriceE1 = document.getElementById('ticketPrice1');
// Update the small element with the ticket price
if (ticketPriceE1) {
  ticketPriceE1.textContent = ticketPrice1;
}
const ticketPriceE2 = document.getElementById('ticketPrice2');
// Update the small element with the ticket price
if (ticketPriceE2) {
  ticketPriceE2.textContent = ticketPrice2;
}





