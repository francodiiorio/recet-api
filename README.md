# **Lunes_BE_TP2C**

## Recet-API

## Integrantes:

-Franco Di Iorio
-Aratano Matias

## Proyecto:

Backend de la aplicación Recet utilizando patrón MVC.

## Herramientas utilizadas:

Node js, Express js, Sequelize, MySql

## Requisitos Previos

Debe tener instalados los siguientes elementos antes de ejecutar el servidor:
Node.js
MySQL instalado y configurado

## Configuración

### 1-Clonar el Repositorio:

git clone https://github.com/francodiiorio/recet-api.git

cd tuproyecto

### 2-Instalar Dependencias:

npm install,

npm i express cors mysql2 sequelize

### 3-Configurar la Base de Datos:

Crea una base de datos en MySQL.
Crea un nuevo archivo llamado .env y configura las variables de entorno, incluyendo las credenciales de la base de datos.

## Ejecutar el Servidor

npm start

### El servidor estará disponible en http://localhost:8080 (o el puerto que hayas configurado).

## Uso del API RESTful

A continuación se presentan algunos ejemplos de cómo utilizar el API:

### Endpoint 1: Obtener todos los elementos

GET http://localhost:8080/api/tuendpoint

### Endpoint 2: Obtener un elemento por ID

GET http://localhost:3000/api/tuendpoint/:id

### Endpoint 3: Crear un nuevo elemento

POST http://localhost:3000/api/tuendpoint

Cuerpo de la solicitud:

{
"campo1": "valor1",
"campo2": "valor2"
}

### Endpoint 4: Actualizar un elemento existente

PUT http://localhost:3000/api/tuendpoint/:id

{
"campo1": "nuevo-valor1",
"campo2": "nuevo-valor2"
}

### Endpoint 5: Eliminar un elemento

DELETE http://localhost:3000/api/tuendpoint/:id
