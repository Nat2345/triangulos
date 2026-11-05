var btnSave=document.getElementById("btnSave");
const productos=[];
btnSave.onclick=()=>{
    txtNombre=document.getElementById("nombre");
    txtPrecio=document.getElementById("precio");
    if(txtNombre.vakue==""|| txtPrecio.value==""){
        alert("ERROR: CAMPOS VACIOS")
        return;
    }
    const producto={
        nombre: txtNombre.value,
        precio:txtPrecio.value
    }
    productos.push(producto);
    console.log(productos)
    localStorage.setItem("producto",JSON.stringify(producto));
}