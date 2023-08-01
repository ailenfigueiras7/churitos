const loginForm = document.getElementById('login');
const contentContainer = document.getElementById('contentContainer');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera automática

    const usuario = 'ailen';
    const contrasenia = 'figueiras';

    const username = document.getElementById('nombreUsuario').value.toLowerCase();
    const password = document.getElementById('contraseniaUsuario').value.toLowerCase();

    // Validación de las credenciales
    if (username === usuario && password === contrasenia) {

        //Si las credenciales son válidas, creamos un objeto JSON con el nombre de usuario. 
        const user = {
            username: username
        };

        // Convertimos el objeto JSON a una cadena previamente a almacenarlo en sessionStorage.
        const userJson = JSON.stringify(user);

        // Almacenamos el objeto JSON en sessionStorage.
        sessionStorage.setItem("user", userJson);

        // Si las credenciales son válidas, mostramos el contenido de la página protegida
        loginForm.style.display = 'none';
        contentContainer.style.display = 'block';
    } else {

        // Si las credenciales no son válidas, mostramos un mensaje de error
        alert('El usuario y/o la contraseña no coinciden, ingrese de nuevo.');
    }
});

// Declaración de array 'productos'

let productos = [
    {
        idProducto: 1,
        nombre: 'Títeres de dedo',
        precio: 50,
        descripcion: 'Títeres de dedo hechos con tela de polar para el dedil y de goma eva.'
    },
    {
        idProducto: 2,
        nombre: 'Títeres de guante',
        precio: 100,
        descripcion: 'Títere de guante con personaje de cuentos.'
    },
    {
        idProducto: 3,
        nombre: 'Títeres bocones',
        precio: 80,
        descripcion: 'Títeres bocones de tela polar con ojitos móviles.'
    },
    {
        idProducto: 4,
        nombre: 'susurrador',
        precio: 500,
        descripcion: 'Susurrador para contar poesías al oído.'
    }
]

// Mostrar los productos al usuario

const productosContainer = document.getElementById('productosContainer');
let muestraProductosHTML = '';
for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    muestraProductosHTML += `
    <div>
        <p>Id: ${producto.idProducto}</p>
        <p>Nombre: ${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
        <p>Descripción: ${producto.descripcion}</p>
        <button class="agregarCarritoBtn" data-id="${producto.idProducto}">Agregar al carrito</button>
    </div>
    `;
}
productosContainer.innerHTML = muestraProductosHTML;

function mostrarCarrito() {
    const carritoContainer = document.getElementById('carritoContainer');
    let mostrarCarritoHTML = '';
    for (let i = 0; i < carritoDeCompras.length; i++) {
        let producto = carritoDeCompras[i];
        mostrarCarritoHTML += `
        <div>
        <p>Nombre: ${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
        </div>
        `;
    }
    mostrarCarritoHTML += `<p>Total de precio: $${precioTotal}</p>`;
    carritoContainer.innerHTML = mostrarCarritoHTML;
    carritoContainer.style.display = 'block';
}

// Variables

const carritoDeCompras = [];
let precioTotal = 0;

// Event listener para agregar productos al carrito
const agregarCarritoBtns = document.getElementsByClassName('agregarCarritoBtn');
for (let i = 0; i < agregarCarritoBtns.length; i++) {
    agregarCarritoBtns[i].addEventListener('click', function (event) {
        const idProductoSeleccionado = parseInt(event.target.getAttribute('data-id'));
        const productoSeleccionado = productos.find(function (producto) {
            return producto.idProducto === idProductoSeleccionado;
        });

        carritoDeCompras.push(productoSeleccionado);
        precioTotal += productoSeleccionado.precio;

        // Actualizar el contenido del carrito mostrado en la página
        mostrarCarrito();
    });
}

// Event listener para finalizar la compra
const finalizarCompraBtn = document.getElementById('finalizarCompraBtn');
finalizarCompraBtn.addEventListener('click', function () {

    // Mostrar ventana emergente con los detalles de los productos en el carrito
    const carritoProductosContainer = document.getElementById('carritoProductosContainer');
    let detallesCompraHTML = '';
    for (let i = 0; i < carritoDeCompras.length; i++) {
        let producto = carritoDeCompras[i];
        detallesCompraHTML += `
    <div>
        <p>Nombre: ${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
    </div>
    `;
    }
    detallesCompraHTML += `<p>Total de precio: $${precioTotal}</p>`;
    carritoProductosContainer.innerHTML = detallesCompraHTML;

    // Mostrar el carrito y el botón "Finalizar Compra" 
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.style.display = 'block';
    const productosContainer = document.getElementById('productosContainer');
    productosContainer.style.display = 'none';
    const carritoContainer = document.getElementById('carritoContainer');
    carritoContainer.style.display = 'block';
});