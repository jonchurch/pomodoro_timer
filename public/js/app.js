$(document).ready(function() {
    var start = $('#start');
    var minutes = $('#minutes');
    var seconds = $('#seconds');
    start.on('click', startCountdown);

    function startCountdown() {
        setInterval(function() {
            var secondsVal = +seconds.text(); //the plus uses type coercion to make seconds.text a number if it can
            var minutesVal = +minutes.text();
            if (secondsVal === 0) {
                minutes.text(minutesVal - 1);
                seconds.text(59);
            } else {
                if (secondsVal <= 10) {
                    console.log(secondsVal);
                    seconds.text("0" + (secondsVal - 1));
                } else {
                    seconds.text(secondsVal - 1);
                }
            }

        }, 1000);
    }
});
