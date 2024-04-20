# MBA Ecommerce 

## React + Vite


![LOGO REACT+VITE](https://miro.medium.com/v2/resize:fit:720/format:webp/1*ucL7YQ2v8aaOy426soLPZA.png)

## Descripción del Proyecto

MBA Ecommerce es una plataforma de comercio electrónico desarrollada utilizando React Js y Vite. Este proyecto ofrece una amplia variedad de productos que incluyen indumentaria, joyería y electrónica, proporcionando a los usuarios una experiencia de compra diversa y completa.

## Características Principales

- **Navegación Intuitiva**: La barra de navegación permite acceder fácilmente a las diferentes categorías de productos, y al hacer clic en el logo, los usuarios pueden volver rápidamente al inicio donde encuentran todos los productos disponibles.

- **Detalles del Producto**: Cada producto cuenta con un botón de "Ver detalle" que lleva a los usuarios a una página donde pueden conocer más características del producto, así como también utilizar un selector de cantidades y agregar el producto al carrito de compras.

- **Experiencia de Compra Continua**: Los usuarios pueden explorar diferentes productos y volver al inicio en cualquier momento para seleccionar otros productos de su interés.

- **Checkout Sencillo**: Los productos agregados al carrito se acumulan y al decidir finalizar la compra, se lleva al usuario a un formulario de checkout donde se confirma el pedido, brindando un ID de pedido para su seguimiento.

## Tecnologías Utilizadas

- React Js: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- Vite: Herramienta de construcción web rápida y liviana para proyectos de JavaScript.
- Chakra UI: Biblioteca de componentes para React que facilita la creación de interfaces de usuario estilizadas y accesibles.

## Dependencias
```react
"dependencies": {
  "@chakra-ui/icons": "^2.1.1",
  "@chakra-ui/react": "^2.8.2",
  "@emotion/react": "^11.11.4",
  "@emotion/styled": "^11.11.0",
  "bootstrap": "^5.3.3",
  "firebase": "^10.11.0",
  "framer-motion": "^11.0.8",
  "react": "^18.2.0",
  "react-bootstrap": "^2.10.2",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.22.3",
  "sweetalert2": "^11.10.8"
},
"devDependencies": {
  "@types/react": "^18.2.56",
  "@types/react-dom": "^18.2.19",
  "@vitejs/plugin-react": "^4.2.1",
  "eslint": "^8.56.0",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.5",
  "vite": "^5.1.4"
}
´´´

## Instalación

1. Clona este repositorio en tu máquina local.
   ```
   git clone https://github.com/belenagui/indumentariamba.git
   ```


```
2. Navega al directorio del proyecto.
cd indumentariamba
```

3. Instala las dependencias del proyecto.
```
npm install
```

4. Inicia el servidor de desarrollo.
```
npm run dev

```

5. Abre tu navegador y visita el enlace proporcionado para ver la aplicación en funcionamiento

## Estructura de Archivos

En la carpeta `components` se encuentran los siguientes archivos:
- `Cart.jsx`
- `CartWidget.jsx`
- `Checkout.jsx`
- `Item.jsx`
- `ItemDetail.jsx`
- `ItemDetailContainer.jsx`
- `ItemList.jsx`
- `ItemListContainer.jsx`
- `NavBar.jsx`

Además, se encuentra la carpeta `Context`, que contiene el archivo `CartContext.jsx`. Este contexto será utilizado por los siguientes componentes:
- `Cart.jsx`
- `CartWidget.jsx`
- `Checkout.jsx`
- `ItemDetail.jsx`
- `ItemDetailContainer.jsx`

Se utilizó el archivo `firebase.js` para la lógica relacionada con la obtención de productos y la creación de nuevas órdenes de compra.

Se incluyó un archivo `.env.local` para proteger las keys de Firebase.



