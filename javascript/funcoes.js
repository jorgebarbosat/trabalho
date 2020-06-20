function mudafoto (foto) {
    document.getElementById("icone").src = foto
}
function Enviar() {
 
    var nome = document.getElementById("nomeid");
 
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
 
}
document.getElementById('menu_Form').addEventListener('submit', function () {
    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    var email = this.querySelector('input[name=email]'), email = email.value;
    var texto = 'Olá destinatário, \nMeu nome é '+ nome +' e meu email é '+ email;
    this.querySelector('input[name=Body]').setAttribute('value', texto);
});
