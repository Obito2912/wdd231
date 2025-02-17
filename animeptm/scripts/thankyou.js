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
<h1>Thank you for your support!</p> 
<h2>We will be notified via email once the feature is available</h2>
<p><strong>First Name: </strong>${show('first')}</p>
<p><strong>Last Name: </strong>${show('last')}</p>
<p><strong>Email: </strong>${show('email')}</p>
<p><strong>Time of Submission: </strong>${show('timestamp')}</p>
</div>
`;