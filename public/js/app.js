$(document).ready(function() {
    var start = $('#start');
    var minutes = $('#minutes');
    var seconds = $('#seconds');
    var breakBtn = $('#break')

    start.on('click', startCountdown);
    breakBtn.on('click', takeABreak);

    function startCountdown() {
        setInterval(function() {
            var secondsVal = +seconds.text(); //the plus uses type coercion to make seconds.text a number if it can
            var minutesVal = +minutes.text();

            if (minutesVal && secondsVal === 0) {

            }
            if (secondsVal === 0 && minutesVal === 0) {
                breakBtn.removeClass('disabled');
                breakBtn.removeAttr('disabled');
            }

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

    function takeABreak() {
        alert('Take a break!');
    }
});
