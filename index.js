
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const address = document.getElementById('address')
const small = document.getElementById('small') 






function showError(input, massage){

    const formControl = input.parentElement;
    formControl.className= "text-danger" 
    const errorClass = document.getElementById('small-' + input.id);
    console.log(input.id);
    errorClass.innerText = massage
}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className= "text-success ";
    const errorClass = document.getElementById('small-' + input.id);
    errorClass.innerText = ""
}
    
function checkRequared(inputArr){
    inputArr.forEach(function(input){
       if (input.value.trim()=== '') {
     showError(input, `${getFieldname(input)} is requared`);
       } else {
        showSuccess(input);
       }
    });}



    function checkLength(input, min, max){
        if(input.value.length < min) {
            showError(input, `${getFieldname(input)} must be at least ${min} charaters`);
        } else if (input.value.length > max) {
            showError(input, `${getFieldname(input)} must be less than  ${max} charaters`);
        } else {
            showSuccess(input);
        }
    }
    

    form.addEventListener('submit', function(e)  {
        e.preventDefault();
    
       checkRequared([firstname, lastname, address ]);
       checkLength(address,3, 35);
      

    });

    function getFieldname(input){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    ;}


  
