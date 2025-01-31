/* const currentUrl = window.location.href;

const everything = currentUrl.split('?');

let formData = everything[1].split('&');
console.log(formData);

function show(cup) {
    let result;
    formData.forEach(element => {
        console.log(element)
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace('%40', '@');
        }
    });
    return result;
}

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p>Appointment for ${show('first')} ${show('last')}</p>
<p>Proxy ${show('ordinance')} on ${show('fecha')} in the ${show('location')}</p>
<p>Your Phone: ${show('phone')}</p>
<p>Your Email: ${show('email').replace('%40', '@')}</p>`; */

const currentURL = window.location.href;
const splitURL = currentURL.split('?');
let formData = splitURL[1].split('&');

function show(cup) {

}

const showInfo = document.querySelector('.thankyou-main');
showInfo.innerHTML = `
<h1>Thank you for joining us.</p> 
<h2>Please confirm your information is correct or send a new form otherwise.</h2>
<p><strong>First Name: </strong>${show('')}</p>
<p><strong>Last Name: </strong>${show('')}</p>
<p><strong>Email: </strong>${show('')}</p>
<p><strong>Mobile Number: </strong>${show('')}</p>
<p><strong>Business Name: </strong>${show('')}</p>
<p><strong>Time of Submission: </strong>${show('')}</p>
`;