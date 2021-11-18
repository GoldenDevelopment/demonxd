function validar() {
    var nombre, correo;
    nombre  = document.getElementById("nombre").value;
    correo  = document.getElementById("correo").value;
    msg = document.getElementById("msg").value;

    if(nombre === "" || correo === "" || msg === "") {
        alert("Todos los campos son OBLIGATORIOS!");
        return false;
    }
}