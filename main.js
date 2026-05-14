function cadastro() {
    let email=document.getElementById("username").value;
    let senha=document.getElementById("password").value;
    let confSenha=document.getElementById("confirm_password").value;
    if(email==" "|| senha==""|| confSenha==""){
        alert("preencha os campos para faser cadastr ");
    }
    if(senha!=confSenha){
        alert("as senhas não são iguais");
    }
    else{
        alert("cadastro realizado com sucesso");
    }
    let usuario={
        email:email,
        senha:senha
    };
    localStorage.setItem("usuario", JSON.stringify(usuario));
    document.getElementById("login_button").addEventListener("click", cadastro);
    window.location.href="index.html";

}