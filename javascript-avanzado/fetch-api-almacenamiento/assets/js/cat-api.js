let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () =>{
     //forma larga 
        /*
        resp => resp.json()
        function (resp){
            return resp.json()
        }
        */
       //ver Gatitos
    //promesa
    fetch('https://api.thecatapi.com/v1/images/search').then(
        //manera rapida
         resp => resp.json()).then(data =>{
        console.log(data);

        let imagenGatito = document.createElement('img');
        imagenGatito.src = data[0].url;
        document.body.appendChild(imagenGatito);
    })
    
    /*{
        console.log(resp);
    })*/

    fetch('https://dog.ceo/api/breeds/image/random').then(
        //manera rapida
         resp => resp.json()).then(data =>{
        console.log(data);

        let imagenPerrito = document.createElement('img');
        imagenPerrito.src = data.message;
        document.body.appendChild(imagenPerrito);
    })
    
});