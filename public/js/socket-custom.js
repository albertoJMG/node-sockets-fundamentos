var socket = io();
//Escuchar sucesos
socket.on("connect", function () {
    console.log("Cliente - Conectado al servidor");
});

socket.on("disconnect", function () {
    console.log("Perdimos conexión con el servidor");
});

//Enviar informacion
socket.emit(
    "enviarMensaje",
    {
        usuario: "Alberto",
        mensaje: "Hola mundo",
    },
    function (resp) {
        console.log("Respuesta server: ", resp);
    }
);

//Escuchar informacion
socket.on("enviarMensaje", function (mensaje) {
    console.log("Servidor: ", mensaje);
});