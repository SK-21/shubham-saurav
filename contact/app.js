// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAEHulMUhLoN2uO31sW8jrO2WfJTfalFkE",
    authDomain: "contactforma-ad5eb.firebaseapp.com",
    databaseURL: "https://contactforma-ad5eb.firebaseio.com",
    projectId: "contactforma-ad5eb",
    storageBucket: "contactforma-ad5eb.appspot.com",
    messagingSenderId: "789089761980",
    appId: "1:789089761980:web:0363049ca7332144b82eb9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
  }
  