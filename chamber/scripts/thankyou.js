const currentURL = window.location.href;
const splitURL = currentURL.split('?');
let formData = splitURL[1].split('&');

function show(cup) {
    let result;
    formData.forEach(element => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace('%40', '@').replaceAll('%', ':');
        }
    });
    return result;
}

const showInfo = document.querySelector('.thankyou-main');
showInfo.innerHTML = `
<div>
<h1>Thank you for joining us!</p> 
<h2>Please confirm your information is correct or send a new form otherwise:</h2>
<p><strong>First Name: </strong>${show('first')}</p>
<p><strong>Last Name: </strong>${show('last')}</p>
<p><strong>Email: </strong>${show('email')}</p>
<p><strong>Mobile Number: </strong>${show('phone')}</p>
<p><strong>Business Name: </strong>${show('organization')}</p>
<p><strong>Time of Submission: </strong>${show('timestamp')}</p>
</div>
`;