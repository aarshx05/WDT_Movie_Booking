
function selectMovie(movie) {
    localStorage.setItem('selectedMovie', movie);
    window.location.href = 'select-time.html';
}

function proceedToSeats() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    if (!date || !time) {
        alert('Please select both date and time.');
        return;
    }
    
    if (!isValidDate(date)) {
        alert("You cannot select a past date. Please choose today or a future date.");
        return;
    }

    if (isToday(date) && !isValidTime(date, time)) {
        alert("The selected showtime must be at least 15 minutes after the current time. Please select a valid time.");
        return;
    }
    
    localStorage.setItem('selectedDate', date);
    localStorage.setItem('selectedTime', time);

    window.location.href = 'select-seats.html';
}


function isToday(selectedDate) {
    const today = new Date();
    const selected = new Date(selectedDate);
    
    return today.toDateString() === selected.toDateString();
}


function isValidDate(selectedDate) {
    const today = new Date();
    const selected = new Date(selectedDate);
    
    return selected >= today;
}

function isValidTime(selectedDate, selectedTime) {
    const today = new Date();
    const selectedDateObj = new Date(selectedDate);
    

    const showtime = convertTo24HourFormat(selectedDateObj, selectedTime);
    
    const minTime = new Date(today.getTime() + 15 * 60 * 1000); 
    
    console.log("Showtime:", showtime);
    console.log("Minimum Time:", minTime);

    return showtime >= minTime;
}


function convertTo24HourFormat(date, time) {
    const [hours, minutes] = time.split(':');
    const period = time.slice(-2).toUpperCase();
    
    let hour = parseInt(hours, 10);
    if (period === 'PM' && hour !== 12) {
        hour += 12;
    } else if (period === 'AM' && hour === 12) {
        hour = 0; 
    }

    date.setHours(hour);
    date.setMinutes(parseInt(minutes, 10));
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date;
}


window.onload = function() {
    if (document.getElementById('movieTitle')) {
        const movie = localStorage.getItem('selectedMovie');
        document.getElementById('movieTitle').innerText = movie;
    }


    if (document.getElementById('seatContainer')) {
        loadSeats();
    }
}


function loadSeats() {
    const movie = localStorage.getItem('selectedMovie');
    const date = localStorage.getItem('selectedDate');
    const time = localStorage.getItem('selectedTime');

    const seatContainer = document.getElementById('seatContainer');
    const bookedSeats = JSON.parse(localStorage.getItem(`${movie}-${date}-${time}`)) || [];


    for (let i = 1; i <= 25; i++) {
        const seatElement = document.createElement('div');
        seatElement.classList.add('seat');
        seatElement.innerText = i;

        if (bookedSeats.includes(i)) {
            seatElement.classList.add('booked'); // Mark already booked seats
        } else {
            seatElement.onclick = () => toggleSeatSelection(seatElement, i);
        }

        seatContainer.appendChild(seatElement);
    }
}

const selectedSeats = new Set(); 

function toggleSeatSelection(seatElement, seatNumber) {
    if (seatElement.classList.contains('selected')) {
        seatElement.classList.remove('selected');
        selectedSeats.delete(seatNumber);
    } else {
        seatElement.classList.add('selected');
        selectedSeats.add(seatNumber);
    }
}

function bookSeats() {
    const movie = localStorage.getItem('selectedMovie');
    const date = localStorage.getItem('selectedDate');
    const time = localStorage.getItem('selectedTime');
    
    const savedSeats = JSON.parse(localStorage.getItem(`${movie}-${date}-${time}`)) || [];
    const newBookedSeats = [...savedSeats, ...selectedSeats];

    localStorage.setItem(`${movie}-${date}-${time}`, JSON.stringify(newBookedSeats));
    alert('Seats booked successfully!');

    
    window.location.href="index.html";
}
