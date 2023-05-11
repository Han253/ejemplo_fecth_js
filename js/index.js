const url_api = "https://data.cityofnewyork.us/resource/ptev-4hud.json";

function procesar_respuesta(res){
    console.log(res);
}


function find_license(){

    //obtener el valor del input
    var license = document.getElementById("entrada").value;
    console.log(license);

    //Hacer la consulta
    var result_url = url_api+"?application_id="+license;
    console.log(result_url);
    fetch(result_url)
    .then(data=>{return data.json()})
    .then(res=>{procesar_respuesta(res)});
}








