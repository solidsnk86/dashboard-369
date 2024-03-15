## Curso de Next.js: Creando una Aplicación de Gestión de Facturas con Base de Datos SQL en Vercel

En este curso avanzado de Next.js, aprenderás a desarrollar una aplicación web completa para la gestión de facturas, incluyendo características como seguimiento de facturas enviadas, pagadas y pendientes, así como visualización de datos mediante gráficos. Todo el frontend estará desarrollado con TypeScript y se implementa un script `seed.js` en `Javascipt con SQL para crear las tablas y sembrar los datos de nuestra aplicación` para una mayor seguridad y productividad.

### Temas cubiertos en este curso:

1. **Introducción a Next.js y TypeScript:**

   - Fundamentos de Next.js y TypeScript.
   - Configuración del entorno de desarrollo.

2. **Implementación del Sistema de Autenticación:**

   - Integración de un sistema de inicio de sesión utilizando Next.js y autenticación basada en token.
   - Creación de páginas de inicio de sesión, registro y recuperación de contraseña.

3. **Desarrollo del Panel de Control:**

   - Diseño y estructura del panel de control para la gestión de facturas.
   - Creación de interfaces para la visualización y gestión de clientes, facturas enviadas, pagadas y pendientes.

4. **Integración de Base de Datos SQL:**

   - Configuración de una base de datos SQL para almacenar información de clientes y facturas.
   - Conexión y consulta de la base de datos desde Next.js.

5. **Visualización de Datos con Gráficos:**

   - Implementación de gráficos interactivos para visualizar datos de facturación.
   - Uso de bibliotecas populares como Chart.js o D3.js para crear gráficos dinámicos.

6. **Despliegue en Vercel:**
   - Configuración del despliegue automático en Vercel para la aplicación completa.
   - Optimización de la aplicación para producción y pruebas de rendimiento.

### Requisitos previos:

- Conocimientos básicos de JavaScript, Typescript, React y SQL.
- Familiaridad con el desarrollo de aplicaciones web.

Con este curso, estarás equipado para construir tu propia aplicación de gestión de facturas con Next.js, integrando una base de datos SQL y visualizando datos mediante gráficos interactivos.

### System requirements

Before you start this course, make sure your system meets the following requirements:

1. Node.js 18.17.0 or later installed. Download here.
2. Operating systems: macOS, Windows (including WSL), or Linux.
3. In addition, you'll also need a GitHub Account and a Vercel Account.

### Creación de un nuevo proyecto

Para crear una aplicación Next.js, abre tu terminal, navega hacia la carpeta donde deseas guardar tu proyecto y ejecuta el siguiente comando:

Terminal

```bash
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

Este comando utiliza `create-next-app`, una herramienta de línea de comandos (CLI) que configura una aplicación Next.js para ti. En el comando anterior, también estás utilizando la bandera `--example` con el ejemplo inicial para este curso.

### After installation, open the project in your code editor and navigate to nextjs-dashboard.

Terminal

```bash
cd nextjs-dashboard
```

Let's spend some time exploring the project and study how it works.
