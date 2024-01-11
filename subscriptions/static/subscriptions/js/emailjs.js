function sendMail(contactForm) {
    emailjs.send("service_tqbcodg", "milestone-project4", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.messagesummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);

        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}