document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
  this.reset();
});


// Form Validation for Email Subscription
// This function checks if the email is valid and provides feedback
document.getElementById("subscriberEmail").addEventListener("input", function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailFeedback = document.getElementById("emailFeedback");

    if (emailPattern.test(this.value)) {
        emailFeedback.textContent = "✓ Valid email";
        emailFeedback.style.color = "green";
    } else {
        emailFeedback.textContent = "Invalid email format";
        emailFeedback.style.color = "red";
    }
});

// Image Gallery Click Event
document.querySelectorAll("#gallery-item").forEach(img => {
    img.addEventListener("click", function() {
        alert("You clicked on: " + this.src);
    });
});