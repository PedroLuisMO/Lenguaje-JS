#MongoDBCRUD

##Descripción  
Retomar los conocimientos previamente adquiridos y realizar las operaciones básicas de CRUD, teniendo como base de datos MYSQL

#Organización  
-controllers. Tiene la logica de las operaciones, desde mostrar el inicio y hacer las consultas respectivas    
-routes. Coontiene las rutas cuando se redirecciona, y se hace uso de las funciones de controllers, de acuerdo a cada ruta  
-util. Contiene el archivo para poder manejar y eliminar las imagenes cuando se actualiza por una nueva, o se elimine el registro de la base, eliminar tambien la imagen de la carpeta.
-views. Contiene los archivos que se desplegan, haciendo uso de EJS como motor de plantilla  
-images: Contiene las imagenes que se suben desde el formulario  
-models: Modelo para el uso de mongoDB.

##Si se requiere probar, se debe de modificar el archivo contenido en la carpeta util con los datos del usuairo, segun corresponda.

Paquetes  
    -body-parser: middleware utilizado para hacer uso de los datos en los formularios  
    - ejs: motor de plantilla para desplegar datos de forma dinamica  
    - mongoose: poder hacer la conexion con mongoDB  
    - nodemon: reinicia el servidor de forma automatica cada vez que se guarda un cambio  
    - express: Simplifica el proceso de crear servidores  
    - multer: Poder subir archivos, en este caso se usa para poder subir las imagenes de los pilotos
