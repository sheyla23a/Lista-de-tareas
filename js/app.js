let totalTareas = 0;

function agregarTarea() {
  let tareaInput = document.getElementById("tareaInput");
  let tarea = tareaInput.value;

  if (!tarea) {
    alert("Por favor, ingrese una tarea.");
    return;
  }

  let listaTareas = document.getElementById("listaTareas");

  let listItem = document.createElement("li");
  listItem.className = "list-group-item";

  let tareaText = document.createTextNode(tarea);
  listItem.appendChild(tareaText);

  let eliminarBtn = document.createElement("button");
  eliminarBtn.className = "btn btn-danger btn-sm";
  eliminarBtn.appendChild(document.createTextNode("Eliminar"));
  eliminarBtn.onclick = function () {
    listaTareas.removeChild(listItem);
    actualizarTotalTareas();
  };
}
