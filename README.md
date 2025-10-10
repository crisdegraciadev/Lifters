# Docs

## Backend

### API Rest

#### Definicion

##### Una Api REST por el concepto mas simple es un puente entre el cliente y el servidor que permite la comunicacion entre ambos mediante peticiones http para realizar funciones de base de datos como CRUD(crear,leer,actualizar y borrar).

##### La informacion de peticiones que recibimos puede venir en cualquier formato como JSON,HTML,XTYL,etc, tambien debemos comentar sobre los encabezados que podemos insertar informacion importante como identificadores,metadatos,autorizaciones,identificadores uniformes de recursos (URI), almacenamiento en cache,cookies y mucho mas.

#### Interfaz uniforme

##### Cuando creamos peticiones http tienen que ser muy parecidas entre cada una pero cambiando los verbos de cada peticion que seran los que le daran distinto funcionamiento a cada una.

#### Desacoplamiento cliente-servidor

##### Las aplicaciones por parte del servidor y el cliente deberan ser independientes y no modificarse entre ellas, la unica manera de interactuar sera mediante peticiones http.

#### Sin estado

##### Para hacer solicitudes http deberemos pasar toda la informacion necesaria dependiendo del verbo usado en la peticion, ya que no se usara ningun tipo de sesion.

#### Capacidad de almacenamiento en cache

##### Podremos aumentar la escalabilidad del servidor ya que se almacenara cache tanto en servidor como en cliente y esto nos dara una disminucion del tiempo de espera.

#### Arquitectura del sistema en capas

##### Para realizar la comunicacion entre cliente y servidor no es de manera directa sino que hay un bucle de comunicacion que usa diversas capaz para llevar toda la comunicacion a cabo, de esta manera ni el cliente ni el servidor sabe si se esta comunicando con la aplicacion final o con un intermediario.

#### Ventajas de su uso

- Flexibilidad: se pueden comunicar utilizando cualquier formato de informacion, esto se refiere a que pueden ser adaptadas a casi todas las aplicaciones sin importar su formato, lenguaje y arquitectura.
<br/>
- Escalabilidad: son muy escalables, pueden manejar almacenar desde poca informacion hasta mucha sin afectar a su eficiencia.
<br/>
- Seguridad: se suele usar el token de autenticacion, y estos tokens son muy complicados de descifrar ya que son unicos, y pueden añadirse mas metodos de autenticacion para hacerlo mucho mas seguro. De esta manera la informacion y privacidad son casi imposibles de hackear por ciberdelincuentes.
<br/>
- Facilidad de uso: son muy sencillas de utilizar aunque tu nivel de desarrollador web y programacion sea bajo, lo veras bastante intuitivo y facil de aprender y si sabes tecnologias como HTML,Python o JavaScript lo tendras mas sencillo.

#### Desventajas de su uso

- Incremento de dificultad: a pesar de ser sencillas de usar, API REST puede ser mas compleja que otras APIs, y si no estas familiarizado con el diseño web mas.

- Conexion web: todos los cambios que realices dentro de la API REST deben ser ejecutado en la web, no pueden haber cambios sin conexion a internet.

- Eficiencia y flexibilidad variable: dependiendo de tu conexion a internet y de los servidores puede ser mas lenta tu API REST y en algunos casos llegar a ser menos flexible que otras por los principios de arquitectura que debes seguir.

### ORM

#### Definicion

##### Es una herramienta que nos permite convertir los objetos de una aplicacion a un formato adecuado para ser almacenados en base de datos, esto se lleva a cabo mediante la creacion de una base de datos virtual donde los datos van a quedarse vinculados con la base de datos final.

##### Para realizar todo lo mencionado anteriormente seria necesario el uso de sentencias SQL para realizar todo pero el ORM tambien sirve de traductor y asi nos evitamos tener que usar todo lo mencionado anteriomente, en caso de querer modificar una columna de nuestra base de datos, el ORM hara la parte mas compleja mediante las indicaciones que le digamos nosotros y que el luego traducira a sentencias SQL, esto facilita mucho el manejo de base de datos.

#### Ejemplos de ORM

- Hibernate (Java)
- Entity framework (.NET)
- Doctrine (PHP)
- SQLAlchemy (Python)
- TypeORM (JavaScript)

### Repository Pattern

#### Definicion

##### El patron repositorio actua como un intermediario entre la capa de negocio de una aplicacion y la base de datos.

##### Usando este patron podremos acceder y manejar mejor la informacion de la base de datos y tendremos los conceptos mejor separados y limpios haciendo que el codigo sea mas facil de mantener, testear y adaptarlo a cambios en la base de datos.

#### Ejemplo

##### Si nosotros estamos en una biblioteca y queremos encontrar un libro, no vamos a buscarlo por toda la biblioteca ya que no sabemos donde podemos encontrarlo y en caso de hacerlo tardaremos mucho, entonces preguntaremos al bibliotecario a que nos ayude a encontrarlo, el bibliotecario sabe donde esta ese libro y nos lo puede dar sin que nosotros nos preocupemos de encontrar donde esta.

#### Ventajas de su uso

- Se hace mas sencillo el manejo de la informacion permitiendo al resto de la aplicacion interactuar con la informacion de una manera mas sencilla mediante una interfaz, esto facilita el mantenimiento y actualizacion del codigo.
<br/>
- Separando el acceso a la informacion de la capa de negocio, el testing se vuelve mucho mas sencillo, puedes imitar el repositorio de manera mas sencilla permitiendonos testear otras partes de la aplicacion de manera independiente.
<br/>
- Separando la logica del acceso a la informacion, el diseño del repositorio permite tener un codigo mas limpio y se vuelve mas sencillo el modificar y optimizar el acceso a la informacion sin tener mucho impacto sobre toda la aplicacion.

#### Desventajas de su uso

- En aplicaciones pequeña puede hacer las cosas mas complejas y hacer el codigo mas incomodo de realizar.
<br/>
- Implementar este patron requiere tiempo para implementar interfaces y reposotirios de clase, y esto puede retrasar el avance del proyecto.

#### Casos para usar el patron repositorio

- APlicaciones web: es muy usado para manejar operaciones con la base de datos, se facilita el cambio de diferentes sistemas de bases de datos entre si
<br/>
- APIs y servicios: organiza el acceso a la informacion y asegura las operaciones consistentes entre ellas.
<br/>
- Sistemas grandes: Para sistemas complejos este patron ayuda a mantener el acceso a la informacion de manera ordenada, haciendo que el codigo sea mas facil de mantener.
<br/>
- Lugar de testeo: Es util para la clonacion de repositorios en el testing, permitiendonos simular acceso a informacion sin tocar o poner en peligro la informacion asegurada.
<br/>
- Migracion de informacion: A la hora de mover informacion entre bases de datos, este patron nos permite hacerlo de manera mas fluida mientras deja la aplicacion intacta.