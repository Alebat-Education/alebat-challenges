# Prueba Técnica para Desarrollador Frontend (Vue.js)

## Descripción

Se te ha asignado una tarea para desarrollar una aplicación web sencilla utilizando Vue.js, según tu preferencia. El objetivo es crear una aplicación que lea datos desde un archivo local mediante una llamada HTTP y los muestre en una lista. Al hacer clic en un elemento de la lista, se debe navegar a una página de detalle que muestre información más detallada del elemento seleccionado.

### Requisitos

1. **Framework**: Utilizar Vue.js.
2. **Build Tool**: La aplicación debe estar configurada y ejecutada con Vite (nada de Nuxt.js).
3. **Datos**: Los datos se deben obtener desde un archivo local en la carpeta `data` mediante una llamada HTTP.
4. **Componentes**: La aplicación debe estar dividida en componentes de manera lógica.
5. **Enrutamiento**: Implementar navegación para mostrar la página de detalle de cada elemento.
6. **Estilo**: Aplicar estilos básicos para que la aplicación sea visualmente agradable (puedes utilizar CSS, SASS, Tailwind CSS, etc.).

## Especificaciones

### Datos

1. Crea un archivo `data/items.json` que contenga un array de objetos. Cada objeto debe tener las siguientes propiedades:
    ```json
    [
        {
            "id": 1,
            "name": "Item 1",
            "description": "Description for Item 1"
        },
        {
            "id": 2,
            "name": "Item 2",
            "description": "Description for Item 2"
        }
        // ...más items
    ]
    ```

### Funcionalidades

1. **Página Principal**:
    - Leer los datos desde el archivo `items.json` mediante una llamada HTTP
    - Mostrar los datos en una lista.
    - Cada ítem de la lista debe ser un enlace que redirige a la página de detalle del ítem.

2. **Página de Detalle**:
    - Mostrar la información completa del ítem seleccionado (al menos `name` y `description`).

### Consideraciones

- **Tiempo Estimado**: La prueba no debería tomar más de 1 hora y media.
- **Version Control**: Usa Git para el control de versiones.

## Evaluación

Se evaluará en base a los siguientes criterios:

1. **Funcionalidad**: La aplicación funciona según los requisitos.
2. **Código Limpio**: El código está bien organizado y es fácil de leer.
3. **Buenas Prácticas**: Uso de buenas prácticas en desarrollo con Vue.js.
4. **Estilo**: Interfaz visualmente agradable y coherente.