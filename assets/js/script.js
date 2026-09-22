function loadHeader() {
    const path = window.location.pathname;
    const isID = path.includes('/id/');
    const headerFile = isID ? 'header-id.html' : 'header-en.html';

    fetch(`../assets/includes/${headerFile}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
}

document.addEventListener('DOMContentLoaded', loadHeader);