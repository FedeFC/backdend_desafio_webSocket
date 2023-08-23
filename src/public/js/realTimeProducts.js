const socket = io();

const form = document.querySelector('#formProduct');
const productsContainer = document.querySelector('#products-container');

socket.emit('load');

form.addEventListener('submit', event => {
	event.preventDefault();
	const dataForm = new FormData(event.target);
	const product = Object.fromEntries(dataForm);
	Swal.fire({
		title: 'Producto creado',
	});

	socket.emit('newProduct', product);
});

socket.on('products', products => {
	productsContainer.innerHTML = '';
	products.forEach(prod => {
		productsContainer.innerHTML += `
    <div class="product-container">
      <p> <span class="item">Id:</span> ${prod.id}</p>
      <p> <span class="item">Producto:</span> ${prod.title}</p>
      <p> <span class="item">Descripcion:</span> ${prod.description}</p>
      <p> <span class="item">Precio:</span> ${prod.price}</p>
      <p> <span class="item">Status:</span> ${prod.status}</p>
      <p> <span class="item">Codigo:</span> ${prod.code}</p>
      <p> <span class="item">Stock:</span> ${prod.stock}</p>

    </div>
  
    `;
	});
});