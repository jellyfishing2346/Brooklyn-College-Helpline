document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can add code here to send the form data to your server or API
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for contacting us, ' + name + '. We will get back to you soon.');
});
