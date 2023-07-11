# web-lifeproducts

                  Deploy Local

Realizamos primero la instalacion de Nodejs (https://nodejs.org/es/download)
Una vez instalado Abrimos una consola(cmd) y ejecutamos el siguiente comando

npm install -g @angular/cli

Esto instalara Angular de Forma global

                Clonar Repositorio de Git

Clonamos el Repositorio en la carpeta de que sea por ejemplo C://users/usuario/desktop/"nombre de la carpeta del proyecto"

git clone http://192.168.1.227/DefaultCollection/Pagina%20Web%20Innovador/_git/Pagina%20Web%20Innovador

Ingresamos nuestras credenciales para por crear el clone

entramos a la carpeta web-lifeproducts
una vez descargado nos aseguramos que estemos en la rama que vamos a trabajar (Solo en caso de tener varias ramas en el repositorio)

Instalar dependencias de Node js

npm i

Luego corremos el servidor de Angular con el codigo

ng serve -o

Si nos arroja el error de que tenemos una version diferente el @angular-devkit
ejecutamos el siguiente comando

npm install -g @angular-devkit/core

Y luego verificamos con el siguiente comando

npm install --save @angular-devkit/core

Listo podemos ver nuestra pagina desplegada en nuestro navegador web

                Deploy En Github Pages

corremos el comando
ng build --configuration-production

                    #Instalacion en Mac

Agregar permisos a la carpeta de .npm

damos un cd .. hasta la carpata inicial saliendo de la carpeta usuarios y ejecutamos el siguiente comando

sudo chown -R 502:20 "/Users/usuario/.npm"

Volvemos a la carpeta de nuestro proyecto y realizamos la instalacion normalmentes

Instalamos de nuevo las dependencias en nuestro proyecto

sudo npm i
ahora volvemos a instalar Angular

sudo npm i -g @angular/cli

Corremos nuestro proyecto

ng serve -o
