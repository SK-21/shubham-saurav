
   // Your web app's Firebase configuration tp connect
   var firebaseConfig = {
    apiKey: "AIzaSyDhg8UhJZHAbR-4f6RyMVgARYvmwD5EVFw",
    authDomain: "contact--form.firebaseapp.com",
    databaseURL: "https://contact--form.firebaseio.com",
    projectId: "contact--form",
    storageBucket: "contact--form.appspot.com",
    messagingSenderId: "438656210556",
    appId: "1:438656210556:web:2252c265255561ce741bf9",
    measurementId: "G-0D6RBXS5HS"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

  //firebase.initializeApp(firebaseConfig);
 //firebase.analytics();

  var firestore =   firebase.firestore();
  
  //start grabbing our dom elements

  const submitBtn = document.querySelector('#submit');

  let userName = document.querySelector('#userFullName');
  let userEmail = document.querySelector('#userEmail');
  let userMessage = document.querySelector('#userMessage');

  const db = firestore.collection("contactData");

  document.getElementById("submit").addEventListener("click", function(){
    //submitBtn.addEventListener("click", function() { 
      let userNameInput = userName.value;
      let userEmailInput = userEmail.value;
      let userMessageInput = userMessage.value;
  
     //Access Database
     db.doc()
       .set({
      name: userNameInput,
      email: userEmailInput,
      messege: userMessageInput
     })
     .then(function() {
      console.log("Data Saved");
       })
     .catch(function(error) {
      console.log(error);
     });
    });

    // Submit form
function submitForm(e){
  e.preventDefault();



  // Show alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}