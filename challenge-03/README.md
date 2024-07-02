### Prueba Técnica: Desarrollador Web

#### Objetivo

Implementar una galería de imágenes que se cargue de manera incremental conforme el usuario haga scroll en la página. La galería debe obtener las imágenes desde una API externa y mostrar un indicador de carga mientras se están cargando las imágenes.

#### Requisitos

1. **Galería de Imágenes**: 
   - Implementar una galería que muestre imágenes obtenidas desde una API externa.
   - Las imágenes deben mostrarse en un diseño de cuadrícula.
   - Cada imagen debe tener una leyenda que muestre el nombre del autor.

2. **Carga Incremental**: 
   - Implementar la carga incremental de imágenes. Al llegar al final de la página, deben cargarse más imágenes automáticamente.
   - Mostrar un indicador de carga mientras se están obteniendo las nuevas imágenes.

3. **Manejo de Estados**: 
   - Gestionar los estados de carga y error de manera adecuada.
   - Mostrar un mensaje de error en caso de que la API falle al obtener las imágenes.

#### Especificaciones Técnicas

- **Uso de API**:
  - La API a utilizar es `https://picsum.photos/v2/list`.
  - Los parámetros que se deben enviar son `page` y `limit` para controlar la paginación.

- **Componentización**:
  - Recuerda crear diversos componentes para dividir el contenido

#### Puntos a Evaluar

- Correcta implementación de la carga incremental.
- Manejo adecuado de los estados de carga y error.
- Uso eficiente de los componentes y composición.
- Buenas prácticas de código y uso de TypeScript.