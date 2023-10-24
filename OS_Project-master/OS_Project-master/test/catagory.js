document.getElementById("myButton1").addEventListener("click", function () {
    // Set the selected movie and its price in the localStorage
    //localStorage.setItem('selectedCinema', 1);
    localStorage.setItem('selectedMovie', 'Titanic');
    localStorage.setItem('selectedMoviePrice', 100);
    window.location.href = "Booking.html?movie=Titanic";
});
document.getElementById("myButton2").addEventListener("click", function () {
    // Set the selected movie and its price in the localStorage
    //localStorage.setItem('selectedCinema', 1);
    localStorage.setItem('selectedMovie', 'Cat Box');
    localStorage.setItem('selectedMoviePrice', 120);
    window.location.href = "Booking.html?movie=Cat Box";
});
document.getElementById("myButton3").addEventListener("click", function () {
    // Set the selected movie and its price in the localStorage
    //localStorage.setItem('selectedCinema', 1);
    localStorage.setItem('selectedMovie', 'Iron Cat');
    localStorage.setItem('selectedMoviePrice', 110);
    window.location.href = "Booking.html?movie=Iron Cat";
});
document.getElementById("myButton4").addEventListener("click", function () {
    // Set the selected movie and its price in the localStorage
    //localStorage.setItem('selectedCinema', 1);
    // localStorage.setItem('selectedMovie', 'Avenger');
    // localStorage.setItem('selectedMoviePrice', 10);
    window.location.href = "catagoryGuest.html";
});

document.getElementById('id').textContent = sessionStorage.getItem(email);
// document.getElementById("myButton5").addEventListener("click", function () {
//     // Set the selected movie and its price in the localStorage
//     //localStorage.setItem('selectedCinema', 1);
//     // localStorage.setItem('selectedMovie', 'Avenger');
//     // localStorage.setItem('selectedMoviePrice', 10);
//     window.location.href = "catagoryMem.html";
// });


