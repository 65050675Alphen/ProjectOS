document.getElementById("myButton1").addEventListener("click", function () {
    // Set the selected movie and its price in the localStorage
    //localStorage.setItem('selectedCinema', 1);
    localStorage.setItem('selectedMovie', 'Avenger');
    localStorage.setItem('selectedMoviePrice', 100);
    window.location.href = "Booking.html?movie=Avenger";
});
document.getElementById("myButton2").addEventListener("click", function () {
    // Set the selected movie and its price in the localStorage
    //localStorage.setItem('selectedCinema', 2);
    localStorage.setItem('selectedMovie', 'Joker');
    localStorage.setItem('selectedMoviePrice', 120);
    window.location.href = "Booking.html?movie=Joker";
});
document.getElementById("myButton3").addEventListener("click", function () {
    // Set the selected movie and its price in the localStorage
    //localStorage.setItem('selectedCinema', 3);
    localStorage.setItem('selectedMovie', 'Toy');
    localStorage.setItem('selectedMoviePrice', 110);
    window.location.href = "Booking.html?movie=Toy";
});