function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}

window.onload = function() {
    currentYear();
}
 // Display the current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Return to top button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}