const alertUser = () =>{
    alert('Click this button')
}

const seriousStudent = () =>{
   const serious = confirm('Are you spending 6-8 hours every single day to learn web developer?')
   console.log(serious);
   if (serious === true) {
        alert('well done! carry on bro!!')
   }
   else{
    alert("you are not a good student")
   }
  
}

const getName = () =>{
   const name =  prompt('what is your name?')
   console.log(name);
}