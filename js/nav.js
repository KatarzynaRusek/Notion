const direction = "vertical"; //horizontal
if (direction === "vertical") {
    document.head.insertAdjacentHTML("beforeend", `<style>.navMenu a {display: block; text-align:left; margin:7px} i{width:15px; margin-right:5px} .navMenu{margin:3px}</style>`)
}

const navigate = (id) => {

    switch (id) {
        case 'home':
            window.open("https://example.com", '_parent').focus();
            break;
        case 'inbox':
            window.open("https://example.com", '_parent').focus();
            break;
        case 'week':
            window.open("https://example.com", '_parent').focus();
            break;
        case 'month':
            window.open("https://example.com", '_parent').focus();
            break;
        case 'projects':
            window.open("https://example.com", '_parent').focus();
            break;
        case 'tasks':
            window.open("https://example.com", '_parent').focus();
            break;
        case 'subscriptions':
            window.open("https://example.com", '_parent').focus();
            break;
    }
}