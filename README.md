# 43-Curso-B-sico-de-Tailwind-2-y-3
Platzi Travel

Platzi Travel es una aplicación de demostración desarrollada para presentar los lugares recomendados, estadías destacadas y preguntas frecuentes sobre viajes con una interfaz atractiva y moderna. Este proyecto está desarrollado usando HTML, Tailwind CSS, y JavaScript, para ofrecer una experiencia de usuario fluida, tanto en modo claro como oscuro.

Características

Diseño Resposivo: La aplicación está optimizada para diferentes dispositivos, incluyendo escritorio y móviles.

Modo Oscuro: Implementación del modo claro y oscuro para mejorar la experiencia del usuario, que se puede cambiar con el botón de "Dark Mode".

Secciones Principales: Contiene secciones como "Our Recommendations" para los lugares recomendados y "Trending Stays" para mostrar estadías populares.

Interfaz Visual Atractiva: Navegación fácil y estructura visual amigable.

Tecnologías Utilizadas

HTML: Para la estructura principal del sitio web.

Tailwind CSS: Para la estilización y la creación de un diseño moderno y responsivo.

JavaScript: Para la interactividad, como el modo oscuro.

Google Fonts: Se usa la fuente Montserrat para darle un estilo moderno a los textos.

Requisitos de Instalación

Para correr este proyecto en tu máquina local, sigue los siguientes pasos:

Clonar el Repositorio:

git clone <URL_DEL_REPOSITORIO>
cd platzi-travel

Instalar Dependencias:

npm install

Esto instalará las dependencias necesarias, incluyendo Tailwind CSS.

Compilar CSS de Tailwind:
Puedes usar el siguiente comando para ver los cambios en tiempo real:

npm run watch

Ejecutar el Proyecto:
Si deseas visualizar el proyecto en un servidor local, puedes agregar vite:

npm run dev

Luego, abre http://localhost:5173 en tu navegador.

Scripts Disponibles

En el archivo package.json se encuentran definidos los siguientes scripts:

watch: Observa y compila el archivo Tailwind CSS cada vez que se realiza un cambio.

npm run watch

dev: Arranca un servidor local utilizando vite para desarrollo.

npm run dev

Estructura del Proyecto

public/: Carpeta que contiene los archivos estáticos, como las imágenes y los CSS generados.

src/css/: Carpeta donde se encuentra el archivo fuente de estilos (tailwind.css).

index.html: Archivo principal del proyecto ubicado en la raíz, que sirve de punto de entrada.

Modo Oscuro

La función de modo oscuro se activa mediante un botón en la barra de navegación, el cual usa JavaScript para alternar la clase dark en el elemento HTML. Esta función se encuentra en el siguiente script:

const toggleDarkMode = () => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
};

Recursos y Fuentes

Tailwind CSS: https://tailwindcss.com/

Google Fonts: Se utiliza Montserrat para mejorar la tipografía del sitio.

Autor

Este proyecto fue desarrollado como parte de un ejercicio de aprendizaje utilizando Platzi y está destinado a demostrar habilidades en el desarrollo web moderno, aplicando diseño responsivo y buenas prácticas.

Licencia

Este proyecto está licenciado bajo la licencia ISC.   ![image](https://github.com/user-attachments/assets/59b9341a-e73a-41c5-b0c9-4ad49ddfffb3)

