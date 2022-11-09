function pad(n, width, z) { z = z || '0'; n = n + ''; return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n; }

window.onload = () => {
    start_btn = document.getElementById('start');
    stop_btn = document.getElementById('stop');
    reset_btn = document.getElementById('reset');
    start_btn.onclick = () => {
        interval = setInterval(() => {
            minutes = document.getElementById('min');
            seconds = document.getElementById('seg');
            seconds_value = parseInt(seconds.innerHTML);
            minutes_value = parseInt(minutes.innerHTML);
            if (seconds_value < 59) {
                if (seconds_value < 9){
                    seconds.innerHTML = "0" + (++seconds_value);
                }
                else seconds.innerHTML++;
            } else {
                seconds.innerHTML = '00';
                if (minutes_value < 59) {
                    if (minutes_value < 9){
                        minutes.innerHTML = "0" + (++minutes_value);
                    }
                    else minutes.innerHTML++;
            }
        }
        }, 1000);
    }
    stop_btn.onclick = () => {
        window.clearInterval(interval);
        interval = null;
    }
    reset_btn.onclick = () => {
        minutes = document.getElementById('min');
        seconds = document.getElementById('seg');
        minutes.innerHTML = seconds.innerHTML = '00';
        if (interval){
            window.clearInterval(interval);
        }
        interval = null;
    }



}