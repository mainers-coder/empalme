//=== JSON EN JS ===

const productos =

  [
    {
      "id": 1,
      "nombre": "Revista Web",
      "categoria": "Grupal",
      "precio": 5000,
      "stock": true
    },
    {
      "id": 2,
      "nombre": "Pagina Simple",
      "categoria": "Emprendedor",
      "precio": 15000,
      "stock": false
    },
    {
      "id": 3,
      "nombre": "Pagina Comerce",
      "categoria": "Comercial",
      "precio": 26900,
      "stock": true
    },
    {
      "id": 4,
      "nombre": ".Com.ar Store Online",
      "categoria": "Oficios / Club",
      "precio": 34999,
      "stock": true
    },
    {
      "id": 5,
      "nombre": ".Com Store Online",
      "categoria": "Internacional",
      "precio": 49000,
      "stock": true
    }
  ];

// === JS PARA ARMAR LA TABLA ===
const tbody = document.querySelector('#tablaProductos tbody');

function formatearPrecio(num) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(num);
}

productos.forEach(p => {
  const fila = `
    <tr>
      <td>#${p.id}</td>
      <td>${p.nombre}</td>
      <td>${p.categoria}</td>
      <td class="precio">${formatearPrecio(p.precio)}</td>
      <td><span class="stock ${p.stock ? 'si' : 'no'}">${p.stock ? 'En stock' : 'Sin stock'}</span></td>
    </tr>
  `;
  tbody.innerHTML += fila;
});
