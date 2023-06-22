const date = () => {
    var today = new Date();
    document.getElementById('date').innerHTML = today.toDateString();
}


const clock = () => {
    const today = new Date();
    const hour = zeros(twelveHour(today.getHours()));
    const minutes = zeros(today.getMinutes());
    let seconds = zeros(today.getSeconds());
    if (today.getHours() >= 12) {
        seconds += " pm"
    }
    else {
        seconds += " am"
    }
    hrs = today.getHours();
    if (hrs < 12)
        greet = 'Good Morning  ';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon ';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening  ';
    // console.log(today.toLocaleTimeString());
    document.getElementById('greet').innerHTML = greet;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;
}

const twelveHour = (hour) => {
    if (hour > 12) {
        return hour -= 12
    } else if (hour === 0) {
        return hour = 12;
    } else {
        return hour
    }
}

// adds zero infront of single digit number
const zeros = (num) => {
    if (num < 10) {
        num = '0' + num
    };
    return num;
}

const dateTime = () => {
    date();
    clock();
    setTimeout(dateTime, 500);
}

dateTime()