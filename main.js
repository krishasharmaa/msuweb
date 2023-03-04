// const observer = new window.IntersectionObserver(([entry]) => {
//     if (entry.isIntersecting) {
//       // Send a message to the server that the user has viewed the message.
//       // Eg. socket.emit('read-message', message.id)
//       return
//     }
//   }, {
//     root: null,
//     threshold: 0.1,
//   })
//   observer.observe(document.getElementById(message.id));

function seen1(){
    document.getElementById('seen1').style.background="#a1ff7f";
    document.getElementById('seen1').textContent = "SEEN";

}
function seen1un(){
    document.getElementById('seen1').style.background="#ff7f7f";
    document.getElementById('seen1').textContent = "UNSEEN";

}

function seen2(){
    document.getElementById('seen2').style.background="#a1ff7f";
    document.getElementById('seen2').textContent = "SEEN";

}
function seen2un(){
    document.getElementById('seen2').style.background="#ff7f7f";
    document.getElementById('seen2').textContent = "UNSEEN";

}

function seen3(){
    document.getElementById('seen3').style.background="#a1ff7f";
    document.getElementById('seen3').textContent = "SEEN";

}
function seen3un(){
    document.getElementById('seen3').style.background="#ff7f7f";
    document.getElementById('seen3').textContent = "UNSEEN";

}
function seen4(){
    document.getElementById('seen4').style.background="#a1ff7f";
    document.getElementById('seen4').textContent = "SEEN";

}
function seen4un(){
    document.getElementById('seen4').style.background="#ff7f7f";
    document.getElementById('seen4').textContent = "UNSEEN";

}

function markAllSeen(){
    document.getElementById('seen1').style.background="#a1ff7f";
    document.getElementById('seen1').textContent = "SEEN";

    document.getElementById('seen2').style.background="#a1ff7f";
    document.getElementById('seen2').textContent = "SEEN";

    document.getElementById('seen3').style.background="#a1ff7f";
    document.getElementById('seen3').textContent = "SEEN";

    document.getElementById('seen4').style.background="#a1ff7f";
    document.getElementById('seen4').textContent = "SEEN";
}

function markAllUnseen(){

    seen1un();
    seen2un();
    seen3un();
    seen4un();

}
