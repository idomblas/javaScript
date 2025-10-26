# Ejercicio entregable 3

**Disclaimer** Si quieres ver bien el ejercicio, copia este texto y ponlo como un **README.md**

En este ejercicio vamos a entregar dos programas que tienen que estar en archivos separados y, si se quiere, dos archivos de test.

El nombre de los 6 archivos será:

- ejercicio*entregable_3_cronometro*<nombre>\_<apellido>.html
- ejercicio*entregable_3_cronometro*<nombre>\_<apellido>.js
- ejercicio*entregable_3_cronometro*<nombre>\_<apellido>.test.js
- ejercicio*entregable_3_fetch*<nombre>\_<apellido>.html
- ejercicio*entregable_3_fetch*<nombre>\_<apellido>.js
- package.json

## Cronómetro

Crea un cronómetro en una página web (muy simple, sólo minutos y
segundos).

- Formato del cronómetro -> **mm:ss** -> mm representa los minutos y ss los segundos
- El cronómetro comenzará a contar cuando el usuario clique con el ratón.
- El cronómetro se podrá parar y continuar con el clic del ratón.

**Nota** No hace falta controlar el momento en el que se para el
tiempo a la hora de volver a empezar, es decir, se presupone que al parar el
cronómetro empezaremos desde el segundo que esté contando un segundo
entero de nuevo.

**Recuerda** Los test valen 20 puntos sobre 100.

## Fetch

Este ejercicio se compone de tres partes y se debe montar sobre un navegador:

- Al pulsar el botón **Artículo 1**, Pide información con fetch a la url: *https://jsonplaceholder.typicode.com/posts/1* y muestra los datos por pantalla en el navegador. . Además, loguea el status de la petición.
- Al pulsar el botón **Artículo 2** y utilizar un selector web para poder meter un número, se debe mostrar el artículo del número puesto en el selector.
- Al pulsar el botón **Todos los artículos**, se debe mostrar por el navegador un listado/tabla con el título y el contenido de cada uno de los artículos existentes.

**Nota** En este ejercicio no es necesario hacer test.
