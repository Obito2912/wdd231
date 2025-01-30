
const currentUrl = window.location.href;

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
<p>Your Email: ${show('email').replace('%40', '@')}</p>`;