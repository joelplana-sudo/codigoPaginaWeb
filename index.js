/*let valor = 0;
const contador = document.getElementById("contador");

document.querySelectorAll(".boton").forEach(boton => {
    boton.addEventListener("click", () => {
        valor++;
        contador.textContent = valor;
    });
});



let carrito = [];
    document.querySelectorAll(".boton").forEach(boton => {
        boton.addEventListener("click", (e) => {
            const producto = {
                id: e.target.dataset.id,
                nombre: e.target.dataset.nombre,
                precio:Number(e.target.dataset.precio)
            };
        carrito.push(producto);

        const total = carrito.reduce((acc, item) => acc + item.precio, 0);

        console.log(carrito);
        console.log("Total:", total);
    });
});*/

document.addEventListener('DOMContentLoaded',(e)=>{
    const contenedorCarrito = document.querySelector('.carrito_compra')
    const carrito_contador=document.querySelector('#contador');
    const carrito=document.querySelector('.carrito_compra');
    let totalCarrito=[];
    const botones=document.querySelectorAll('.boton');
    console.log(botones);
    botones.forEach(boton=>{
        boton.addEventListener('click',(e)=>{  //previene el boton por defecto
            e.preventDefault();
            console.log("diste click al boton");
            const datos=e.target.closest('.producto');
            console.log(datos)
        })

        function leerdatos(producto){
            //aqui creo el objeto
            const infoproducto={
                img: producto.querySelector('img').src,
                titulo: producto.querySelector('h3').textContent,
                id: producto.querySelector('.boton').getAttribute('data-id'),
                precio:producto.querySelector('').textContent,
                cantidad= 1;
            }
             //  Retornamos el objeto para usarlo en el clic
        return infoproducto;
        }
    })

})
/*document.addEventListener('DOMContentLoaded', () => {
    // IMPORTANTE: El punto (.) indica que es una clase CSS
    const contenedorCarrito = document.querySelector('.carrito_compra');
    
    // Verificamos si existe antes de imprimir
    if (contenedorCarrito) {
        console.log("¡Elemento encontrado!", contenedorCarrito);
    } else {
        console.log("No se encontró el elemento. Revisa el nombre de la clase.");
    }
});*/





