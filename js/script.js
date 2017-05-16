window.onload = function(){
		document.getElementById("boton").addEventListener("click", agregar);} 

function agregar(){
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";
	var cont = document.getElementById("contenedor");
	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute ("class", "check");
	elementoContenedor.appendChild(textoNuevaTarea);

	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");

	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);


	chck.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado");
	})
	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
	})
	cora.addEventListener("click", function(){
		cora.classList.toggle("red");	
	})
	if(tareas == null || tareas.length == 0){
		alert("¡Error! Debe asignar una tarea");
		return false;
	}
	
}







