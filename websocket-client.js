const WS = new WebSocket('ws://localhost:3232');

WS.onmessage = (payload) => {
    displayMessages(payload.data);
};

document.forms[0].onsubmit = () => {
    let input = document.getElementById('message');
    console.log(input.value);
    WS.send(input.value);
};

function displayMessages(message) {
    let h1 = document.createElement('h1');
    h1.innerText = message;

    document.querySelector('div.messages').appendChild(h1);
}