const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
e.preventDefault();
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const fecha = document.getElementById('fecha');
const arr = [nombre, email, fecha];
const messageArr = ["Nombre", "Email", "Fecha"];
for(i = 0; i < arr.length; i++){
    if(arr[i].value == ""){
        swal({
            title: `El campo ${messageArr[i]} no puede estar vacío`,
            icon: "error",
             })
             return false;
    }
}
if(!emailValido(email)){
    swal({
        title: `El campo ${messageArr[1]} no tiene el formato correcto`,
        icon: "error",
         })
         return false;
}
swal({
    title: `Datos enviados satisfactoriamente`,
    icon: "success",
     })
     nombre.value = "";
     email.value = "";
     fecha.value = "";
     return true;
}

const emailValido = (email) => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}

async function getData() {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const desserts = await result.json();
    console.log(desserts);
    desserts.meals.forEach(element => {
        const flexbox = document.createRange().createContextualFragment(`
            
            <div class="flexbox">
                <img src="${element.strMealThumb}" alt="">
                <h3>${element.strMeal}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et eleifend non eget placerat parturient purus. Auctor nam vulputate consequat molestie vel. Mauris massa facilisis proin imperdiet justo.</p>
            </div>
            
            `)
            const menu_row = document.querySelector('.menu-row');
            menu_row.append(flexbox)
    });
}
getData()

async function getTestimonials(){
    const result = await fetch('https://randomuser.me/api?results=6');
    const users = await result.json();
    console.log(users)
    users.results.forEach(element => {
        const flexbox = document.createRange().createContextualFragment(`
            
            <div class="flexbox">
                <img src="${element.picture.large}" alt="">
                <h3>Premium Main Dish</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et eleifend non eget placerat parturient purus. Auctor nam vulputate consequat molestie vel. Mauris massa facilisis proin imperdiet justo.</p>
            </div>
            
            `)
            const testimonials_row = document.querySelector('.testimonials-row');
            testimonials_row.append(flexbox)
    })
}
getTestimonials()