var modal1 = document.getElementById('modal1')
function showModal() {
    modal1.classList.remove('hide')
}
function hideModal() {
    modal1.classList.add('hide')
}

function showError(){
    document.getElementById('error1').classList.add('show');
            setTimeout(function() {
                document.getElementById('error1').classList.remove('show')
            }, 3000);
}


function validateForm(){
    var txtName = document.getElementById('form-name').value;
    if(txtName == 0 ){
        showError();
    }
    console.log(txtName);
}


document.getElementById('open-modal-btn').addEventListener('click', showModal)
document.getElementById('close-moda-btn').addEventListener('click', hideModal)

document.getElementById('registrar-btn').addEventListener('click', validateForm);



