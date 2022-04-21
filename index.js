let mobileMenu = document.querySelector("#mobileMenu");
let mobileMenuList = document.querySelector(".mobileMenuList");
let isMenuOn = false;

mobileMenu.onclick = () => {
	if (isMenuOn == false) {
		mobileMenuList.style.display = "flex";
		mobileMenu.src = "images/icon-close.svg";
		isMenuOn = true;
	}

	else if (isMenuOn == true) {
		mobileMenuList.style.display = "none";
		mobileMenu.src = "images/icon-hamburger.svg";
		isMenuOn = false;
	}
}