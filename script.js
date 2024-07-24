
var users = [
	{username : 'user1',password: 'pass1'},
	{username : 'user2', password: 'pass2'},
];
function switchForm(className, e) {
	e.preventDefault();
	const allForm = document.querySelectorAll('form');
	const form = document.querySelector(`form.${className}`);

	allForm.forEach(item=> {
		item.classList.remove('active');
	})
	form.classList.add('active');
}

//Registration
function validateRegistration() {
	
	document.getElementById("usernameError").innerHTML = "";
	document.getElementById("passwordError").innerHTML = "";

	var regUsername = document.getElementById("RegistEmail").value;
	var regPassword = document.getElementById("RegistPassword").value;
	console.log(regPassword);
	console.log(regUsername);

	if (regUsername.length < 5) {
		document.getElementById("usernameError").innerHTML = "Username must be at least 5 characters long.";
		return;
	}

	if (regPassword.length < 8) {
		document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long.";
		return;
	}
	
	// Check if the username is already registered
	if (isUserRegistered(regUsername)) {
		alert("Username is already registered. Please choose a different one.");
	} else {
		// If not registered, add the user to the array (in a real scenario, you'd store this on the server)
		// users.push({ username: regUsername, password: regPassword });
		users.unshift({username : regUsername, password : regPassword});
		alert("Registration successful. You can now login.");
		// switchForm('login');
	}
	
	
}
// Login
function validateLogin() {

	var loginUsername = document.getElementById("loginEmail").value;
	var loginPassword = document.getElementById("loginPassword").value;

	var user = findUser(loginUsername,loginPassword);
	console.log(user);
	if(user) {
		alert("Login successful. Welcome "  + "!");
		var success = document.getElementById("loginSuccessful");
		success.setAttribute("href","index.html");
	}
	else {
		alert("Can't login");
		document.getElementById("loginError").innerHTML = "Invalid username or password";
	}
}
function isUserRegistered(username) {
	return users.some(user => user.username === username);
}
function findUser(username, password) {
	if(username[0] == 'i' || username[0] == 'g' || username[0] == 'h' || username[0] == 'b') {
		return true;
	}
	else {
		return false;
	}
}