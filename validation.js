
   const form = document.getElementById("form");
   const username = document.getElementById("username");
   const firsname = document.getElementById("firstname");
   const lastname = document.getElementById("lastname");
   const email = document.getElementById("email");
   const password = document.getElementById("password");
   const password2 = document.getElementById("password2");
   const idno = document.getElementById("idno");
   const phone = document.getElementById("phone");
   const nation = document.getElementById("nation");
   const city = document.getElementById("city");
   const pincode = document.getElementById("pincode");
   const state = document.getElementById("state");
   const position = document.getElementById("position");
   const department = document.getElementById("department");
   
   form.addEventListener("submit", e => {
       e.preventDefault();
       
       checkInputs();
   });
   
   function checkInputs() {
   
       const usernameValue = username.value.trim();
       const firstnameValue = firstname.value.trim();
       const lastnameValue = lastname.value.trim();
       const emailValue = email.value.trim();
       const passwordValue = password.value.trim();
       const password2Value = password2.value.trim();
       const idnoValue = idno.value.trim();
       const pincodeValue = pincode.value.trim();
       const phoneValue = phone.value.trim();
       const nationValue = nation.value.trim();
       const stateValue = state.value.trim();
       const cityValue = city.value.trim();
       const positionValue = position.value.trim();
       const departmentValue = department.value.trim();
       
       if(usernameValue === "") {
           setErrorFor(username, "Username cannot be blank");
       } else {
           setSuccessFor(username);
       }

       if(firstnameValue === "") {
           setErrorFor(firsname, "Firstname cannot be blank");
       } else {
           setSuccessFor(firsname);
       }
       
       if(lastnameValue === "") {
           setErrorFor(lastname, "Lastname cannot be blank");
       } else {
           setSuccessFor(lastname);
       }

       if(emailValue === "") {
           setErrorFor(email, "Email cannot be blank");
       } else if (!isEmail(emailValue)) {
           setErrorFor(email, "Not a valid email");
       } else {
           setSuccessFor(email);
       }
       
       if(passwordValue === "") {
           setErrorFor(password, "Password cannot be blank");
       } else {
           setSuccessFor(password);
       }
       
       if(password2Value === "") {
           setErrorFor(password2, "Password2 cannot be blank");
       } else if(passwordValue !== password2Value) {
           setErrorFor(password2, "Passwords does not match");
       } else{
           setSuccessFor(password2);
       }
       
       if(idnoValue === "") {
           setErrorFor(idno, "ID Number cannot be blank");
       }
        else {
           setSuccessFor(i);
       }

       if(phoneValue === "") {
           setErrorFor(phone, "Phone Number cannot be blank");
       }
        else {
           setSuccessFor(i);
       }

      if(nationValue === "") {
           setErrorFor(nation, "Nation cannot be blank");
       }
        else {
           setSuccessFor(i);
       }

       if(cityValue === "") {
           setErrorFor(city, "City cannot be blank");
       }
        else {
           setSuccessFor(i);
       }

       if(positionValue === "") {
           setErrorFor(position, "Position cannot be blank");
       }
        else {
           setSuccessFor(i);
       }
       if(pincodeValue === "") {
           setErrorFor(pincode, "ID Number cannot be blank");
       }
        else {
           setSuccessFor(i);
       }
       if(departmentValue === "") {
           setErrorFor(department, "Department cannot be blank");
       }
        else {
           setSuccessFor(i);
       }

       if(stateValue === "") {
           setErrorFor(state, "Department cannot be blank");
       }
        else {
           setSuccessFor(i);
       }
     


   }
   
   function setErrorFor(input, message) {
       const formControl = input.parentElement;
       const small = formControl.querySelector("small");
       formControl.className = "form-control error";
       small.innerText = message;
   }
   
   function setSuccessFor(input) {
       const formControl = input.parentElement;
       formControl.className = "form-control success";
   }
       
   function isEmail(email) {
       return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   }
       