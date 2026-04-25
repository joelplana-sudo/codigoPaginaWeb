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
//codigo del profesor//
/*document.addEventListener('DOMContentLoaded',(e)=>{
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
                precio:producto.querySelector('.precio-producto').textContent
            }
             //  Retornamos el objeto para usarlo en el clic
        return infoproducto;
        }
    })
})*/
document.addEventListener('DOMContentLoaded', (e) => {
    const contenedorCarrito = document.querySelector('.carrito_compra')
    const carrito_contador = document.querySelector('#contador');
    const carrito = document.querySelector('.carrito_compra');

    let totalCarrito = [];
    const botones = document.querySelectorAll('.boton');
    console.log(botones);

    botones.forEach(boton => {
        boton.addEventListener('click', (e) => { //previene el boton por defecto
            e.preventDefault();
            console.log("diste click al boton");
            const datosProducto = e.target.closest('.producto');//esta variable es para almacenar los datos del producto de la tarjeta//
            console.log(datosProducto)

            

            // 1. Usamos una función para obtener el objeto con la info del producto especifico
            const infoProducto = leerdatos(datosProducto);

            // 2. Guardamos ese objeto en un arreglo
            totalCarrito.push(infoProducto);

            // 3. Hacemos que el contador de arriba suba
            carrito_contador.textContent = totalCarrito.length;

            // 4. Sumamos los precios para el total a pagar
            let sumaTotal = 0;
            for (let i = 0; i < totalCarrito.length; i++) {
                // Usamos Number para que reconozca el precio como número
                sumaTotal = sumaTotal + Number(totalCarrito[i].precio);
            }

            // 5. Mostramos el total en el HTML (id="total")
            document.querySelector('#total').textContent = sumaTotal + " $";
        })

        function leerdatos(producto) {
            //aqui creo el objeto
            const infoproducto = {
                img: producto.querySelector('img').src,
                titulo: producto.querySelector('h3').textContent,
                id: producto.querySelector('.boton').getAttribute('data-id'),
                precio: producto.querySelector('.precio-producto').textContent
            }
            //  Retornamos el objeto para usarlo en el clic
            return infoproducto;
        }
    })
});








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





/*document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos las partes de la tabla y el contador
    const lista_carrito = document.querySelector('#lista_carrito tbody');
    const carrito_contador = document.querySelector('#contador');
    const total = document.querySelector('#total');
    
    const botones = document.querySelectorAll('.boton');
    let totalCarrito = [];

    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Buscamos el producto donde se hizo clic
            const datos = e.target.closest('.producto');
            
            // Creamos el objeto con la info básica
            const infoproducto = {
                img: datos.querySelector('img').src,
                titulo: datos.querySelector('h3').textContent,
                precio: datos.querySelector('.precio-producto').textContent
            };

            // Lo metemos al arreglo
            totalCarrito.push(infoproducto);

            // --- ACTUALIZAR LA PÁGINA ---
            
            // Borramos lo que hay en la tabla para no repetir
            lista_carrito.innerHTML = "";
            let cuentaTotal = 0;

            // Usamos un for simple para recorrer el carrito
            for (let i = 0; i < totalCarrito.length; i++) {
                const elemento = totalCarrito[i];
                
                // Creamos la fila
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td><img src="${elemento.img}" width="50"></td>
                    <td>${elemento.titulo}</td>
                    <td>${elemento.precio}</td>
                    <td>1</td>
                    <td>${elemento.precio}</td>
                `;
                lista_carrito.appendChild(fila);

                // Sumamos el total (usando parseInt porque el precio es texto)
                cuentaTotal = cuentaTotal + parseInt(elemento.precio);
            }

            // Ponemos los resultados en el HTML
            carrito_contador.textContent = totalCarrito.length;
            total.textContent = cuentaTotal + " $";
        });
    });
});*/