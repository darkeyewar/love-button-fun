

function clickYesButton() {
    alert('I love you too Pookie :)');
}


function hoverNoButton() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    document.getElementById('no-button').style.left = x + 'px';
    document.getElementById('no-button').style.top = y +'px';
    
}