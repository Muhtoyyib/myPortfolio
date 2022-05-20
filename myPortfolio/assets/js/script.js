function register(e){
	e.preventDefault();

	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var msg = document.getElementById('msg');
    var form = document.getElementById("msgForm");

	if(email === '' || email === '' || subject === '' || msg === ''){
		msg.className = "alert alert-danger";
		msg.innerHTML = "Please fill out all feilds!";
	} else {
		var atpos = email.indexOf("@");
		var dotpos = email.lastIndexOf(".");
		if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length){
			msg.className = "alert alert-danger";
			msg.innerHTML = "Please use a valid email";
		} else{
				msg.className = "alert alert-success";
				msg.innerHTML = "You have successfully completed the registration";
                form.submit();
			}
	}


        
    

}
document.getElementById('msgForm').addEventListener('submit', register, false);