#MysqlCRUD

##descripcion
Retomar los conocimientos previamente adquiridos y realizar las operaciones básicas de CRUD, teniendo como base de datos MYSQL

#Organización
-Controllers. Tiene la logica de las operaciones, desde mostrar el inicio y hacer las consultas respectivas
-Public. Se tendrian los estilos de CSS, pero para simplicidad, y dado que el enfoque era el CRUD, los estilos se pusieron en los archivos HTML, que en este caso se sustituyen por el motor de plantilla EJS
-Routes. Coontiene las rutas cuando se redirecciona, y se hace uso de las funciones de controllers, de acuerdo a cada ruta
Util. Contiene la informacion de la base de datos, desde configurar el pool, y la estructura de la tabla.
Views. Contiene los archivos que se desplegan, haciendo uso de EJS como motor de plantilla

Si se requiere probar, se debe de modificar el archivo contenido en la carpeta util con los datos del usuairo, segun corresponda.

Paquetes
    -body-parser: middleware utilizado para hacer uso de los datos en los formularios
    - ejs: motor de plantilla para desplegar datos de forma dinamica
    - mysql2: poder hacer la conexion con mysql
    - nodemon: reinicia el servidor de forma automatica cada vez que se guarda un cambio
    - express: Simplifica el proceso de crear servidores 