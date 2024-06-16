# Proyecto: Generador de Notificaciones Toast

Este proyecto tiene como objetivo crear un sistema de notificaciones tipo toast. El desarrollador debe implementar la funcionalidad especificada a continuación utilizando TypeScript. La estructura HTML y los estilos CSS están provistos, y el desarrollador solo necesita modificar y añadir lógica en el archivo `main.ts`.

## Instrucciones para el Desarrollador

A continuación se detallan las funcionalidades que debes implementar:

### 1. Crear Notificaciones

Cada botón en la página debe generar una notificación tipo toast con un mensaje y un ícono específicos al hacer clic. Las notificaciones deben tener los siguientes comportamientos:

- **Desvanecerse lentamente**: Las notificaciones deben aparecer con una animación de desvanecimiento y desaparecer de la misma manera.
- **Duración de 3 segundos**: Cada notificación debe permanecer visible durante 3 segundos antes de comenzar a desvanecerse.

### 2. Configurar Tipos de Notificación

El archivo `buttonsData` contiene los tipos de notificaciones. Cada tipo de notificación debe incluir un `id`, un `icon` (ícono SVG) y un `message` (mensaje). Asegúrate de que los íconos y mensajes se correspondan con el tipo de notificación.

```typescript
const buttonsData = [
  { id: "success", icon: CheckCircleSvg, message: "Success notification" },
  { id: "error", icon: ErrorSvg, message: "Error notification" },
  { id: "info", icon: InfoSvg, message: "Info notification" },
  { id: "warning", icon: WarningSvg, message: "Warning notification" },
];
```

### 3. Implementar la Clase `GenerateNotification`

La clase `GenerateNotification` debe manejar la lógica de creación y eliminación de las notificaciones. Debe contener los siguientes métodos:

- **Constructor**: Inicializa las propiedades de la clase y agrega un event listener al botón.
- **obtainObject**: Devuelve el objeto de notificación correspondiente al botón presionado.
- **searchIcon**: Devuelve el ícono correspondiente al botón presionado.
- **searchMessage**: Devuelve el mensaje correspondiente al botón presionado.
- **lifeCycleNotification**: Gestiona el ciclo de vida de la notificación en la pantalla, y se asegura de que se elimine después de 3 segundos.
- **createNotification**: Crea y muestra la notificación en la pantalla
- **animateNotification**: Se encarga de añadir animaciones a la notificación
- **removeNotification**: Es la encargada de remover la notificación cuando esta llegue a los 3 segundos de vida

### 4. Agregar Estilos a las Notificaciones

Cada notificación debe tener una clase CSS `notification` y un estilo de fondo basado en el tipo de notificación. Los colores de fondo deben estar definidos en el CSS usando variables CSS (ej. `var(--success)`).

### 5. Lógica de Animación

Las notificaciones deben animarse suavemente cuando aparecen y desaparecen. Utiliza la API de animaciones de CSS para lograr esto.

### 6. Integración de Iconos

Asegúrate de que los íconos se importen correctamente desde el módulo `../assets/index` y se muestren junto al mensaje de la notificación.

## Archivos Proporcionados

- **index.html**: Contiene la estructura HTML básica.
- **style.css**: Archivo CSS para los estilos.
- **main.ts**: Archivo TypeScript donde implementarás la lógica del proyecto.
- **assets/index**: Módulo que contiene los íconos SVG.