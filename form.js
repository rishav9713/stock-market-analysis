




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAqLbJmvkLalQ36VDxODroPqGA-14lF19Y",
    authDomain: "form-edp.firebaseapp.com",
    projectId: "form-edp",
    storageBucket: "form-edp.appspot.com",
    messagingSenderId: "883318024959",
    appId: "1:883318024959:web:19ebfbbc33767984b7faca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
//sign up
  //   function signUp(){
  //
	// 	var email = document.getElementById("email");
	// 	var password = document.getElementById("password");
  //
	// 	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
	// 	promise.catch(e => alert(e.message));
  //
	// 	alert("Signed Up");
	// }








  function signIn(){

  		var email = document.getElementById("email");
  		var password = document.getElementById("password");

  		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  		promise.catch(e => alert(e.message));




  	}


  	function signOut(){

  		auth.signOut();
  		alert("Signed Out");

  	}



  	auth.onAuthStateChanged(function(user){

  		if(user){

  			var email = user.email;
  			alert("Active User " + email);


  			//Take user to a different or home page
        window.location.replace("graph.html");
  			//is signed in

  		}else{

  			alert("No Active User");
  			//no user is signed in
  		}



  	});
