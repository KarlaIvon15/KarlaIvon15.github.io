console.log("Hola Mundo! desde la consola")
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<h2> Desarrolladora Frontend Jr.</h2>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('si lo puedes imaginar, lo puedes crear')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong> programar!</strong>')
    .pauseFor(2500)
    .start();