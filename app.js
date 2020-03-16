const DB_USER = [
    
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputKonfirmasiPassword = document.querySelector("#konfirmasipassword");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {

    e.preventDefault();
    const valueInputUsername = inputUsername.value;
    const valueInputPassword = inputPassword.value;
    const valueInputKonfirmasiPassword = inputKonfirmasiPassword.value;

    
    let flag = 0;
    if(valueInputPassword === valueInputKonfirmasiPassword){

        flag = 1;
        DB_USER.push({
            username : valueInputUsername,
            password : valueInputPassword
        });
        
        console.log(DB_USER);
    }

    const warningMsg = document.querySelector(".warning");
    
    if(flag === 0){
        warningMsg.className = "text-danger";
    }else if(flag === 1){
        alert("Registrasi Sukses!");
    }
})