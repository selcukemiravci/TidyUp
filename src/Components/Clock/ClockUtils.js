const getTimeString = () => {
    const date = new Date();
    let hour = date.getHours();
    hour = hour % 12 || 12; // Convert to 12-hour format
    return formatTime(hour) + ':' + formatTime(date.getMinutes());
}

function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}

// Call the function every minute (1000 milliseconds)
// displayTime();

// setInterval(displayTime, 60*1000);

export { getTimeString }