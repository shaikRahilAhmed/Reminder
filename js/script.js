function setReminder() {
    let minutes = document.getElementById("minutes").value;
    
    if (!minutes || minutes <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    let seconds = minutes * 60 * 1000; 

    document.getElementById("status").innerText = `Reminder set for ${minutes} minute(s)...`;

    setTimeout(() => {
        document.getElementById("status").innerText = "Time's up!";
        playBeep(); 
        alert("Reminder: Time's up!");
    }, seconds);
}

function playBeep() {
    let context = new (window.AudioContext || window.webkitAudioContext)();
    let oscillator = context.createOscillator();
    let gainNode = context.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.frequency.value = 1000; 
    oscillator.type = "sine"; 

    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, 1000); 
}
