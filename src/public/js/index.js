const socket = io();

const productsContainer = document.querySelector('#products-container');

socket.emit('load');

socket.on('products', products => {
	productsContainer.innerHTML = '';
	products.forEach(prod => {
		productsContainer.innerHTML += `
    <div class="product-container">
      <p>Id: ${prod.id}</p>
      <p>Producto: ${prod.title}</p>
      <p>Descripcion: ${prod.description}</p>
      <p>Precio: ${prod.price}</p>
      <p>Status: ${prod.status}</p>
      <p>Codigo: ${prod.code}</p>
      <p>Stock: ${prod.stock}</p>

    </div>
  
    `;
	});
});