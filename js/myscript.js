
/*$.ajax({
    type: "GET",
    async: true,
    url: "https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json",
})
.done(function (data) {
    const obj = formatObject(data, 'json_nav_one')
    console.log(obj)
})
.fail(function(e) {
    console.log('errorrrrrrrrrrrrrrrr: ', e);

});*/

const object1 = {
	"Amazonas": ["Leticia","El encanto","La Chorrera","La Pedrera","Miritiparaná","Puerto Alegría","Puerto Arica","Puerto Nariño","Puerto Santader"],
	"Atlántico": ["Baranoa","Baranoa","Barranquilla","Campo de la Cruz","Candelaría","Galapa","San Juan de Acosta","Luruaco","Malambo","Manatí","Palmar de Varela","Piojo","Polo Nuevo","Ponedera","Puerto Colombia","Repelón","Sabanagrande","Sabanalarga","Santa Lucía","Santo Tomás","Soledad","Suan","Tubara","Usiacurí"],
	"Caquetá": ["Albania","Belén de los Andaquíes","Cartagena del Chaira","Curillo","El Doncello","El Paujil","Florencia","La Montañita","Milan","Morelia","Puerto Rico","San José de Fragua","San Vicente del Caguán","Solano","Solita","Valparaíso"],
	"Cesar": ["Aguachica","Agustín Codazzi","Astrea","Becerril","Bosconia","Chimichagua","Chiriguaná","Curumaní","El Copey","El Paso","Gamarra","González","La Gloria","La Jagua","Ibirico","Manaure","Pailitas","Pelaya","Pueblo Bello","Río de Oro","Robles la Paz","San Alberto","San Diego","San Martín","Tamalameque","Valledupar"],
	"Chocó": ["Acandi","Alto Baudo","Atrato","Bagado","Bahía Solano","Belén de bajirá","Bajo Baudo","Bojayá","Cantón de San Pablo","Carmen del Darién","Certeguí","Condoto","El Carmen","Istmina","Jurado","Litoral del San Juan","Lloró","Medio Atrato","Medio Baudo","Medio San Juan","Novita","Nuquí","Quibdó","Río Iro","Río Quito","Riosucio","San José del Palmar","Sipí","Tado","Unguía","Unión Panamericana"],
	"Córdoba": ["Ayapel","Buenavista","Canalete","Cerete","Chima","Chinu","Ciénaga de Oro","Cotorra","La Apartada","Lorica","Los Córdobas","Momil","Moñitos","Montelibano","Montería","Planeta Rica","Pueblo Nuevo","Puerto Escondido","Puerto Libertador","Purísima","Sahagun","San Andrés","Sotavento","San Antero","San Bernardo Viento","San Carlos","San Pelayo","Tierralta","Tuchin","Valencia"],
	"Guainía": ["Inírida","Barranco Minas","Cacahual","La Guadalupe","Mapiripana","Morichal","Pana Pana","Puerto Colombia","San Felipe"],
	"Guaviare": ["Calamar","El Retorno","Miraflores","San José del Guaviare"],
	"Huila": ["Acevedo","Agrado","Aipe","Algeciras","Altamira","Baraya","Campoalegre","Colombia","Elias","Garzón","Gigante","Guadalupe","Hobo","Íquira","Isnos","La Argentina","La Plata","Nataga","Neiva","Oporapa","Paicol","Palermo","Palestina","Pital","Pitalito","Rivera","Saladoblanco","San Agustín","Santa María","Suaza","Tarqui","Tello","Teruel","Tesalia","Timana","Villavieja","Yaguará"],
	"La Guajira": ["Riohacha","Albania","Barranca","Dibulla","Distracción","El Molino","Fonseca","La Jagua del Pilar","Maicao","Manaure","San Juan del Cesar","Urumita","Villa Nueva"],
	"Putumayo": ["Colón","Mocoa","Orito","Puerto Asís","Puerto Caicedo","Puerto Guzman","Leguizamo","San Francisco","San Miguel","Santiago","Sibundoy","Valle del Guamuez","Villagarzón"],
	"Quindío": ["Armenia","Buenavista","Calarca","Circasia","Córdoba","Filandia","Genova","La Tebaida","Montenegro","Pijao","Quimbaya","Salento"],
	"San Andrés y Providencia": ["Providencia","San Andrés y Providencia"],
	"Sucre": ["Buenavista","Caimito","Chalán","Colosó","Coveñas","Corozal","El Roble","Galeras","Guaranda","La Unión","Los Palmitos","Majagual","Morroa","Ovejas","Palmito","Sampués","San Benito Abad","San Juan de Betulia","San Marcos","San Onofre","San Pedro","Sincé","Sincelejo","Sucre","Tolú","Toluviejo"],
	"Tolima": ["Alpujarra","Alvarado","Ambalema","Anzoátegui","Ataco","Cajamarca","Carmen de Apicalá","Casabianca","Chaparral","Coello","Coyaima","Cunday","Dolores","Espinal","Falán","Flandes","Fresno","Guamo","Guayabal","Herveo","Honda","Ibagué","Icononzo","Lérida","Líbano","Mariquita","Melgar","Murillo","Natagaima","Ortega","Palocabildo","Piedras","Planadas","Prado","Purificación","Rioblanco","Roncesvalles","Rovira","Saldaña","San Antonio","San Luis","Santa Isabel","Suárez","Valle de San Juan","Venadillo","Villahermosa","Villarrica"],
	"Vaupés": ["Cacarú","Mitú","Papunaua","Pacoa","Taraira","Yavaraté"],
	"Vichada": ["Cumaribó","La Primavera","Puerto Carreño","Santa Rosalia"]
}




//console.log(Object.values(object1))
console.log("---------------------------------------------")
const dep =document.getElementById('departamentos')


//console.log(Object.keys(object1))

let optionsDepts = ''
let optionsCiu = ''

Object.keys(object1).map(item => {
	console.log(item)
	optionsDepts = optionsDepts.concat('<option name="',item,'">',item,'</option>')

})
var selectedValue2 = document.getElementById('departamentos').value;
console.log(selectedValue2)

Object.values(object1.Amazonas).map(item => {
	console.log(item)
	optionsCiu = optionsCiu.concat('<option name="',item,'">',item,'</option>')
} )

document.getElementById('departamentos').innerHTML = optionsDepts
document.getElementById('ciudades').innerHTML = optionsCiu
/*Object.keys(object1).map(item => {
	console.log(item)
	optionsCiu = optionsciu.concat('<option name="',item,'">',item,'</option>')
})*/


//document.getElementById('ciudades').innerHTML = optionsDepts

/*Object.keys(object1).forEach(function(key) {
    var value = object1[key];
    console.log(value)
});*/

//console.log(object1)

//console.log(object1.Putumayo[2])
console.log("---------------------------------------------")


var selectedValue2 = document.getElementById('departamentos').value;
console.log(selectedValue2)