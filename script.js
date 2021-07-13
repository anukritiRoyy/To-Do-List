// getting all required elements
const inputBox = document.querySelector('.inputClass input');
const addbtn = document.querySelector('.inputClass button');

inputBox.onkeyup() => {
   let userData = inputBox.value;               // fetching user input
   if(userData.trim() != 0) {                   // if input isn't only spaces
      addBtn.classList.add('active');           // then make the btn active
   }
   else {
      addBtn.classList.remove('active');
   }
}