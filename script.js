// getting all required elements
const inputBox = document.querySelector('.inputClass input');
const addBtn = document.querySelector('.inputClass button');


// onkeyup EVENTS
addBtn.disabled = true;
inputBox.onkeyup = () => {
   let userData = inputBox.value;               // fetching user input
   if(userData != 0) {                          // if there is value in input filed
      addBtn.classList.add('active');           // then make the btn active
   }
   else {
      addBtn.classList.remove('active');
   }
}