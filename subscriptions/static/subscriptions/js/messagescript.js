// Message Status for contact form
let msgButton = document.getElementById('contact-btn');
msgButton.addEventListener('click', event => {
    messageStatus();
});

function messageStatus() {
    let contactName = document.getElementById('username');
    let emailContact = document.getElementById('emailaddress');
    let userMsg = document.getElementById('message');

    const msgSuccess = document.getElementById('success');
    const failedMsg = document.getElementById('failed');

    if (contactName.value === '' || emailContact.value === '' || userMsg.value === '') {
        console.log(failedMsg);
        failedMsg.style.display = 'block';
    } else { 

        msgSuccess.style.display = 'block';

            setTimeout(() => {
            contactName.value = '';
            emailContact.value = '';
            userMsg.value = '';
        },2000);
    }
   
    setTimeout(() => {
        failedMsg.style.display = 'none';
        msgSuccess.style.display = 'none';
    },4000);
};