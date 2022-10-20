
/*
!EXPRESIONES REGULARES
Banderas
i	- Ignora mayúsculas y minúsculas. Se suele denominar insensible a mayús/minús.
g	- Búsqueda global. Sigue buscando coincidencias en lugar de pararse al encontrar una.
m	- Multilínea. Permite a ^ y $ tratar los finales de línea \r o \n.
u	- Unicode. Interpreta el patrón como un código de una secuencia Unicode.
y	- Sticky. Busca sólo desde la posición indicada por lastIndex.

Coincidencias Basicas
.       - Cualquier Caracter, excepto nueva linea
\d      - Cualquier Digitos (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - No es un Espacio, Tab o nueva linea.

Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - El carácter anterior puede aparecer o no aparecer. (para indicar que sea opcional en la búsqueda)
{n}     - El carácter anterior aparece n veces.
{n,}	- El carácter anterior aparece n o más veces.
{n,m}   - El carácter anterior aparece de n a m veces. (Minimo, Maximo)

Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets. No es necesario escapar los símbolos (con el backslash \)
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro
*/

/*
SELECCIÓN DE CORREOS: "/[A-Z\d._%+-]+@[A-Z\d-]+.+.[A-Z]/igm"
SELECCIÓN DE CORREOS (TAMBIÉN FUNCA): "/[^@\s]+\@[^@\s]+\.[^@\s]+/"
URL PÁGINAS WEB (UNO DEBAJO DEL OTRO Y/O SEPARADOS POR COMAS Y/O ESPACIOS): 
"/https?\:\/\/(?:[-\w]+.)?([-\w]+)\.[\w.]+/gim"
*/

let informacion= 
`Vato Serduro
448-234-56.78
vato_145454.sffs@hotmail.com
https://www.vato.serduro.com.co 
http://apestosin.com.co`;

let nombre= document.querySelector(".nombre");
let correo= document.querySelector(".correo");
let pagina= document.querySelector(".pagina");

//!EN JS VAN SIN COMILLAS
let datoNombre= /^[\w\s]+$/m;
let datoCorreo= /[A-Z\d._%+-]+@[A-Z\d-]+.+.[A-Z]/igm;
let datoPagina= /https?\:\/\/(?:[-\w]+.)?([-\w]+)\.[\w.]+/gim;

nombre.textContent= informacion.match(datoNombre);
correo.textContent= informacion.match(datoCorreo);
pagina.textContent= informacion.match(datoPagina);
//Si yo quiero solamente la primera url: pagina.textContent= informacion.match(datoPagina)[0];