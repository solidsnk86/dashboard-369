## Curso de Next.js:

Creando una Aplicación de Gestión de Facturas con Base de Datos SQL en Vercel

En este curso avanzado de Next.js, aprenderás a desarrollar una aplicación web completa para la gestión de facturas, incluyendo características como seguimiento de facturas enviadas, pagadas y pendientes, así como visualización de datos mediante gráficos (Se podría implementar). Todo el frontend estará desarrollado con TypeScript y se implementa un script `seed.js` en `Javascipt con SQL para crear las tablas y sembrar los datos de nuestra aplicación` para una mayor seguridad y productividad. En sí el curso no viene completo, se le ha agregado funciones extras como la página de clientes, para poder crear más clientes y enviar saldos.

#

## Credenciales para inicio de sesión

**Para probar el acceso en la aplicación:**

![Static Badge](https://img.shields.io/badge/Email:-atlas@atlas.com-red)

```bash
atlas@atlas.com
```

![Static Badge](https://img.shields.io/badge/Contraseña:-admin1234-red)

```bash
admin1234
```

## Temas cubiertos en este curso:

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
   - Validación de Tipos con Zod

Para garantizar que los datos de tu aplicación cumplan con ciertos criterios antes de ser utilizados, puedes utilizar Zod, una biblioteca de validación de tipos desarrollada específicamente para TypeScript.

Instalación
Para comenzar a utilizar Zod en tu proyecto, primero necesitas instalarlo. Puedes hacerlo a través de npm o yarn ejecutando el siguiente comando en tu terminal:

```bash
npm install zod
# O
yarn add zod
```

**Uso Básico**

1. **Importa Zod:**
   En los archivos donde deseas realizar la validación de tipos, importa Zod al principio del archivo:

```typescript
import { z } from 'zod';
```

**Define un Esquema:**

Define un esquema que coincida con la forma de tus `datos`. Por ejemplo, para un formulario con campos de nombre y edad:

```typescript
const userSchema = z.object({
  name: z.string(),
  age: z.number().positive(),
});
```

2. **Valida los Datos:**
   Utiliza el esquema definido para validar los datos antes de utilizarlos en tu aplicación:

```typescript
const userData = {
  name: 'John',
  age: 30,
};

try {
  const validatedData = userSchema.parse(userData);
  console.log('Datos válidos:', validatedData);
} catch (error) {
  console.error('Error de validación:', error);
}
```

3. **Ventajas de Zod**

- Tipado Seguro: Zod proporciona tipos seguros para tus datos, lo que significa que obtienes un objeto tipado después de la validación.
  Sintaxis Declarativa: La sintaxis de Zod es similar a TypeScript, lo que la hace fácil de entender y utilizar.
  Manejo de Errores: Zod maneja automáticamente los errores de validación, lo que simplifica el manejo de casos de error en tu aplicación.
  Con Zod, puedes asegurarte de que tus datos cumplan con las reglas definidas en tus esquemas de validación, lo que ayuda a evitar errores y garantiza la integridad de tus datos en tu aplicación.

2. **Visualización de Datos con Gráficos:**

- Implementación de gráficos interactivos para visualizar datos de facturación.
- Uso de bibliotecas populares como Chart.js o D3.js para crear gráficos dinámicos.

Ejemplo de implementación:

- Se puede implementar un gráfico dinámico de líneas utilizando [Chart.js](https://www.chartjs.org/), donde se muestren los ingresos mensuales a lo largo del tiempo. Los datos podrían provenir de una API interna que recopile los ingresos mensuales de la empresa.
- Otro ejemplo sería la creación de un gráfico de barras interactivo con [Visx](https://airbnb.io/visx/), mostrando las ventas por categoría de productos en un período de tiempo determinado.
- También se puede utilizar [Tremor](https://www.tremor.so/) para la visualización de datos en tiempo real, como el seguimiento de las interacciones de los usuarios en una aplicación web y su impacto en las ventas.

3. **Despliegue en Vercel:**
   - Configuración del despliegue automático en Vercel para la aplicación completa.
   - Optimización de la aplicación para producción y pruebas de rendimiento.

### Requisitos previos:

- Conocimientos básicos de JavaScript, Typescript, React y SQL.
- Familiaridad con el desarrollo de aplicaciones web.

Con este curso, estarás equipado para construir tu propia aplicación de gestión de facturas con Next.js, integrando una base de datos SQL y visualizando datos mediante gráficos interactivos.

### Requerimientos del sistema

Antes de comenzar este curso, asegúrate de que tu sistema cumpla con los siguientes requisitos.:

1. Node.js 18.17.0 o posterior instalado. Descárgalo aquí.
2. Sistemas operativos: macOS, Windows (incluyendo WSL) o Linux.
3. Además, también necesitarás una cuenta de GitHub y una cuenta de Vercel.

### Generación de una Clave Secreta para tu Aplicación

Para garantizar la seguridad de las sesiones de usuario y encriptar las cookies, es necesario generar una clave secreta para tu aplicación. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

```bash
openssl rand -base64 32
```

Este comando generará una clave secreta aleatoria con una longitud de 32 bytes, codificada en base64. Puedes copiar y pegar la clave generada en tu archivo de configuración de entorno (por ejemplo, .env) como el valor de la variable de entorno `AUTH_SECRET`.

Recuerda mantener esta clave secreta segura y no compartirla públicamente para garantizar la seguridad de tu aplicación.

> [!Note]
> Para tener en cuenta quienes usan sistemas operativos Windows es necesario instalar Perl para poder configurar `openssl`

### Creación de un nuevo proyecto

Para crear una aplicación Next.js, abre tu terminal, navega hacia la carpeta donde deseas guardar tu proyecto y ejecuta el siguiente comando:

Terminal

```bash
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

Este comando utiliza `create-next-app`, una herramienta de línea de comandos (CLI) que configura una aplicación Next.js para ti. En el comando anterior, también estás utilizando la bandera `--example` con el ejemplo inicial para este curso.

### Después de la instalación, abre el proyecto en tu editor de código y navega hasta nextjs-dashboard.

Terminal

```bash
cd nextjs-dashboard
```

#

Vamos a emplear algo de tiempo estudiando el código para poder ir interpretándolo.
