
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')




function showError(input, massage){

    const formControl = input.parentElement;
    formControl.className= "text-danger" 
    const small = formControl.querySelector('small');
    small.innerText = massage
}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className= "text-success";
}
    
function checkRequared(inputArr){
    inputArr.forEach(function(input){
       if (input.value.trim()=== '') {
     showError(input, `${input.value} is requared`);
       } else {
        showSuccess(input);
       }
    });}

    form.addEventListener('submit', function(e)  {
        e.preventDefault();
    
       checkRequared([firstname, lastname ]);
      

    });