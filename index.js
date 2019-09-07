/*
900980728
2019-08-16
45D6B0AD-73DD-4D5B-B0AC-3F244396FFD0
https://cors-anywhere.herokuapp.com/https://wsmipres.sispro.gov.co/WSMIPRESNOPBS/api/prescripcion/900980728/2019-08-16/45D6B0AD-73DD-4D5B-B0AC-3F244396FFD0
*/

let mipress = {
    accion: 'prescripcion',
    nit: '900980728',
    fecha: '2019-08-16',
    token: '45D6B0AD-73DD-4D5B-B0AC-3F244396FFD0'
}

let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin','*');

var miInicializador = { method: 'GET',
                        headers: headers,
                        cache: 'default',
                        referrerPolicy: 'origin-when-cross-origin',
                        redirect: 'follow' };

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://wsmipres.sispro.gov.co/WSMIPRESNOPBS/api/'
             + mipress.accion + '/' 
             + mipress.nit + '/' 
             + mipress.fecha + '/' 
             + mipress.token;

fetch(proxyurl + url, miInicializador)
    .then(resp => resp.json())
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))