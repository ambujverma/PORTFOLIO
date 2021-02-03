window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}





// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFVNIkEK4d4f3M0pKEtWfYw9r25hqxYFc",
    authDomain: "portfolio-9b30e.firebaseapp.com",
    databaseURL: "https://portfolio-9b30e-default-rtdb.firebaseio.com",
    projectId: "portfolio-9b30e",
    storageBucket: "portfolio-9b30e.appspot.com",
    messagingSenderId: "334272288383",
    appId: "1:334272288383:web:a7d5ec20555767d097514a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// reference contactInfo collections
let contactInfo = firebase.database().ref("Infos");

// Listen for a submit
// document.querySelector(".formBx").addEventListener("submit", submitform);

function submitform(){

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name , email, message);

    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        Sendername: name,
        email: email,
        message:message,
    });
    document.querySelector(".contact-form").reset();
}
