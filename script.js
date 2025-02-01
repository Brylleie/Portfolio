

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseElement = document.getElementById('form-response');


    if (name === "" || email === "" || message === "") {
        responseElement.textContent = "Please fill out all fields.";
        responseElement.style.color = "red";
        return;
    }

   
    responseElement.textContent = `Thank you for your message, ${name}! We'll get back to you soon.`;
    responseElement.style.color = "green";

   
    document.getElementById('contact-form').reset();
});
