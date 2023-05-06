// Countdown to mint date
function countdown() {
    const mintDate = new Date('September 13, 2023').getTime();
    const now = new Date().getTime();
    const timeRemaining = mintDate - now;
  
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    document.getElementById('countdown').innerHTML = `Mint Date Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  
  countdown();
  setInterval(countdown, 1000);
  

  