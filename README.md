# Buscador de Usuarios GitHub

Aplicación React para buscar usuarios en GitHub utilizando la API pública.  
Muestra hasta 3 resultados con detalles como avatar, nombre, empresa y repositorios.  
Incluye modo oscuro/claro automático y toggle manual.

---

## Características

- Búsqueda con debounce (espera para evitar múltiples peticiones)  
- Indicador de carga durante la búsqueda  
- Manejo de errores con mensajes claros  
- Modo oscuro y claro, ajustable manualmente o por sistema  
- Diseño responsivo y moderno

---

## Instalación

1. Clona el repositorio:

git clone https://github.com/tu-usuario/github-user-search.git

2. Entra en el directorio:

cd github-user-search

3. Instala dependencias:

npm install

## Uso

Inicia la aplicación con:

npm start

Abre tu navegador en [http://localhost:3000](http://localhost:3000) para usar la app.

---

## Estructura

- `/src/components`: Componentes React reutilizables (SearchInput, UserCard, ThemeToggle)  
- `/src/styles`: Archivo CSS con estilos globales y variables  
- `/src/utils`: Funciones auxiliares (debounce)  
- `/src/app.js`: Lógica principal de la aplicación

---

## Cómo funciona

- El usuario escribe un nombre para buscar.  
- La función debounce limita la frecuencia de llamadas a la API.  
- Se consulta la API de GitHub y se obtienen hasta 3 usuarios.  
- Por cada usuario, se obtiene información detallada.  
- Se muestran los usuarios en tarjetas estilizadas.  
- Se muestra un indicador “Buscando...” mientras carga.  
- Se pueden alternar temas oscuro y claro.
