$("main > section").hide();
var cont = -1;
var elementosHtml = [
    '<div class="border rounded border-2 border-primary m-3 p-5" width="80vw" heigth="auto">\
        <h3 class="mb-4">What is <strong class="text-primary">jQuery?</strong></h3>\
        <p>jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.</p>\
    </div>',
    /* En mobil, la sección de código ocupa dos líneas pero se superpone el contenido */
    '<div class="border rounded border-2 border-primary m-3 p-5" width="80vw" heigth="auto">\
        <h3 class="mb-4">A Brief Look</h3>\
        <h5>DOM Traversal and Manipulation</h5>\
        <p>Get the <code class="bg-secondary p-1 text-white">\<\ button \></code> element with the class \'continue\' and change its HTML to \'Next Step...\'</p>\
        <p class="mt-4"><code class="border-start border-4 border-primary bg-secondary p-2 py-3 text-white">\
        1  $( <span class="text-warning">"button.continue"</span> ).html( <span class="text-warning">"Next Step..."</span> )\
        </code></p>\
    </div>',
    '<div class="border rounded border-4 border-primary m-3 p-5" width="80vw" heigth="auto">\
        <h3 class="mb-4">Event Handling</h3>\
        <h5>DOM Traversal and Manipulation</h5>\
        <p>Show the <code class="bg-secondary p-1 text-white">#banner-message</code> element that is hidden with <code class="bg-secondary p-1 text-white">display:none</code> in its CSS when any button in <code class="bg-secondary p-1 text-white">#button-container</code> is clicked.\
        \
        <div class="bg-secondary col-12 col-md-6 py-4 border-start border-4 border-primary">\
            <p class="my-0"><code class="p-2 py-1 text-white">\
            1  <strong>var</strong> hiddenBox = $( <span class="text-warning">"#banner-message"</span> );</code></p>\
            <p class="my-0"><code class="p-2 py-1 text-white">\
            2  $( <span class="text-warning">"#button-container button"</span> ).on( <span class="text-warning">"click"</span>, <strong>function</strong>( event ) {</code></p>\
            <p class="my-0"><code class="p-2 py-1 text-white">\
            3  &nbsp&nbsphiddenBox.show();</code></p>\
            <p class="my-0"><code class="p-2 py-1 text-white">\
            4  });</code></p>\
        </div>\
    </div>',
];
var coloresFondo = [
    "bg-primary",
    "bg-success",
    "bg-secondary",
    "bg-danger",
    "bg-warning",
    "bg-dark text-white",
    "bg-info",
    "bg-dark text-white",
    "bg-primary",
    "bg-success"
];

/* EJERCICIO 2 */
const loadSection = function (sectionId) {
    console.log("carga load section");
    $("main > section").hide();
    cont = -1;
    limpiar();
    $(`main>#${sectionId}`).show(); 
}

const limpiar = function () {
    $("body").removeClass("bg-primary");
    $('#contenedorNuevosElementos').empty();
    $("#visor").val("");
}

/* EJERCICIO 1 */
const changeBackgroundColor = function () {
    console.log("carga chenge bg-color");
    $("body").addClass("bg-primary");
}

/* EJERCICIO 3 */
const createNewElement = function () {
    console.log("carga new elements");
    cont++;
    limpiar();
    (cont < 3) ? $('#contenedorNuevosElementos').append(`${elementosHtml[cont]}`) : cont = -1;
}

/* COMBINADOS POR MI: ejercicio 4 y 3 */
// Comienzo ejercicio 4 //
const botonetes = function () {
    /* limpiar(); */
    var botones = [];
    //  #####  KNOWN ISSUE  #####  //
    /* entra acá aunque no presione opción, funciona bien pero no puedo reestablecer valores al ir a otra opción y volver, como sí pude con los otros 2 ejercicios */
    console.log("carga botonera");
    
    for(let i = 0; i < 10; i++){
        botones[i] = `<button class="botoncito ${coloresFondo[i]} w-25 h-50 clicked-false" value="${i}"/>${i}</button>`;
        $(`${botones[i]}`).addClass(`${coloresFondo[i]}`);
    }
    
    botones.forEach(ele => {
        $("#botonera").append(ele);
    });
}

$("#keypad").on("click", botonetes());

$(".botoncito").on("click", function(){
    let valor = parseInt(this.value);
    $("#visor").val(`${valor}`);
    if($(this).hasClass('clicked-false')){
        $(this).removeClass('clicked-false').addClass('clicked-true');       
        $(this).removeClass(`${coloresFondo[valor]}`).addClass(`${valor != 9 ? coloresFondo[valor+1] : coloresFondo[0]}`);
    }else{
        $(this).removeClass('clicked-true').addClass('clicked-false');
        $(this).removeClass(`${valor != 9 ? coloresFondo[valor+1] : coloresFondo[0]}`).addClass(`${coloresFondo[valor]}`);
        $("#visor").val(``);
    }
    /* value = function(){
    (value != 9) ? +1 : 0;}*/
});
// Final ejercicio 4 //