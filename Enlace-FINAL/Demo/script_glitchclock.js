$(document).ready(function () {

  function second_passed() {
    $('.clock').removeClass('is-off');
  }
  setTimeout(second_passed, 2000)

  $('.switcher').on('click', function (e) {
    e.preventDefault();
    $('.screen').toggleClass('glitch');
  });

  var countDownDate = new Date("Mar 20, 2020 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();
    var date = new Date().getDate();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var lefthours = (20 - date) * 24;

    var realTime = (lefthours + hours) + ' : ' + minutes + ' : ' + seconds;

    $('.time').html(realTime);
    $('.time').attr('data-time', realTime);

  }, 1000);

});