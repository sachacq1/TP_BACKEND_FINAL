# API RESTful de Gestión de Eventos y Usuarios

## Descripción

Proyecto de una api de Eventos, backend,  que nos permite gestionar una base de datos de eventos y usuarios.  

## Características

- Registro y autenticación de usuarios con contraseñas encriptadas.
- Operaciones CRUD (crear, leer, actualizar, eliminar) en películas.
- Autenticación mediante tokens JWT para proteger endpoints sensibles.
- Validación de datos usando `Express-validation` y middleware personalizado.
- Seguridad mejorada mediante `Helmet`.

## Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB** (con Mongoose)
- **JWT** para autenticación
- **Helmet** para seguridad
- **Express-validation** para validación

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/sachacq1/TP_BACKEND_FINAL
   cd TP_BACKEND_FINAL
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` con las siguientes variables:

   ```env
   PORT=3000
   MONGO_URI=tu_conexion_mongo
   JWT_SECRET=tu_secreto_jwt
   ```

4. Inicia la aplicación:

   ```bash
   npm start
   ```

## Rutas de la API

### Usuarios

| Método | Endpoint          | Descripción                       |
|--------|-------------------|-----------------------------------|
| POST   | `/api/users/register` | Registra un nuevo usuario.       |
| POST   | `/api/users/login`    | Inicia sesión y devuelve un token.|

### Eventos

| Método | Endpoint          | Descripción                          |
|--------|-------------------|--------------------------------------|
| GET    | `/api/events`        | Obtiene todas las películas.         |
| GET    | `/api/events/:id`    | Obtiene un evento por su ID.      |
| POST   | `/api/events`        | Crea una nuevo evento (autenticado).|
| PATCH    | `/api/events/:id`    | Actualiza un evento (autenticado).|
| DELETE | `/api/events/:id`    | Elimina un evento (autenticado).  |


## Seguridad

La API implementa `Helmet` para mejorar la seguridad estableciendo cabeceras HTTP seguras.