const database = firebase.database();
const btnRegister = document.getElementById('btnRegister');
const user = document.getElementById('user');
const texts = document.getElementById('texts');

const Contenedor = document.getElementById('Contenedor');

const comentario = ()=>{
if(user.value === ' '|| texts.value === ' '){
    alert(' ponga el texto');
    return;
}
    let referencia = database.ref('estudiantes').push();
    let estudiante ={
        id:referencia.key,
name: user.value,
cod: texts.value,

    };
    referencia.set(estudiante);

    user.value=' ';
    texts.value = ' ';
  
}

btnRegister.addEventListener('click',comentario);

//lectura 


database.ref('estudiantes').on('value',function(data) {
Contenedor.innerHTML = ' ';

    data.forEach(estudiante => {
        let valor = estudiante.val();
        console.log(valor.name);
let fi = new Muro(valor);
Contenedor.appendChild(fi.render());
        
    });
});