/*Se obtienen referencias a los elementos del DOM que necesitarás manipular,
como el campo de entrada de texto, el botón de agregar tarea y la lista de tareas*/
const entradaTarea = document.getElementById('tarea');
const botonTarea = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');

/* Esta función toma el texto del campo de entrada, crear un nuevo
elemento de lista (<li>) y lo agrega a la lista de tareas. */
function agregarElemento(){
    const textoTarea = entradaTarea.value;
    if(textoTarea.trim()!=''){
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = textoTarea;
        nuevaTarea.className='tarea';
        
        //Se crea el botón para eliminar y se le da nombre de clase 
        const botonEliminar = document.createElement('button');
        botonEliminar.className='btnEliminar';
        
        //Se agrega el botón como hijo del (<li>)
        nuevaTarea.appendChild(botonEliminar);
        //Se agraga la nueva tarea (<li>) como hijo de la lista
        listaTareas.appendChild(nuevaTarea);
    }
    //Se vacía el espacio de entrada de texto
    entradaTarea.value='';
}

/*Se agrega un listener para el botón */
botonTarea.addEventListener('click',agregarElemento);

//Evento de click dentro de la lista de tareas
listaTareas.addEventListener('click',function(e){
    //Si hay click en un elemento li y es una tarea
    if(e.target.tagName === 'LI' && e.target.className === 'tarea'){
        e.target.className='realizada';
    }
    //Si hay click en un elemento li y es una tarea realizada 
    else if(e.target.tagName === 'LI' && e.target.className === 'realizada'){
        e.target.className='tarea';
    }
    //Si hay click en un elemento button 
    else if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
})