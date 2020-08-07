 const menuIzquierdo = document.querySelector('.menu-izquierdo');

 menuIzquierdo.addEventListener('click', (e) => {
          const claseMenu = e.target.classList;

          // Crear variables que seleccionen las flechas y la pagina

          const contenedor = document.querySelector('.pagina'),
               flechaIzq = document.querySelector('.fa-arrow-left'),     
               flechaDer = document.querySelector('.fa-arrow-right');

          if(claseMenu.contains('fa-arrow-left')) {
               //Cerrar el menu lateral
               flechaIzq.style.display = "none";
               flechaDer.style.display = "block";
               contenedor.classList.add("no-menu")
          }
          else if(claseMenu.contains('fa-arrow-right')){
               //Abrir el menu lateral
               flechaIzq.style.display = "block";
               flechaDer.style.display = "none";
               contenedor.classList.remove("no-menu")


          }
 });