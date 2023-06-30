window.addEventListener("load", () => {
	const btnMenu = document.getElementById("btn-menu");
	const btnCerrarMenu = document.getElementById("cerrar-menu");

	const menu = document.querySelector(".menu");
	const navBar = document.querySelector(".menu-bar");
	const header = document.querySelector(".header");

	btnMenu.addEventListener("click", abrirMenu() );

	btnCerrarMenu.addEventListener("click", cerrarMenu() );
  
function abrirMenu() {
	// Dar activo al nav
	menu.style.display = "block";
	menu.classList.add("menu--activo");
	// Display none al menu bar
	navBar.style.display = "none";
	// Agregar a la clase header un width del 100%
	header.style.height = "100%";
}

function cerrarMenu() {
	// Quitar la clase activa a nav
	menu.style.display = "none";
	// Colocar display none a nav
	menu.classList.remove("menu--activo");
	// Colocar display block a navbar
	navBar.style.display = "block";
	// Quitar el style a header
	header.style.height = "auto";
}

});