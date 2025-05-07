// função para mudar o menu para p reduzido(menu2)
window.onscroll = function () {
    shrinkMenu();
};

function shrinkMenu() {
    const menu = document.getElementById("menu1");
    const menu2 = document.getElementById("menu2");

    if (window.pageYOffset > 50) {
        menu.style.transform = "translateY(-100%)";
        menu2.style.transform = "translateY(0)";
    } else {
        menu.style.transform = "translateY(0)";
        menu2.style.transform = "translateY(-100%)";
    }
}

//carousel dos jogos

function showDetails(id) {
    const details = document.getElementById(id);
    details.style.display = 'block';
}

function hideDetails(id) {
    const details = document.getElementById(id);
    details.style.display = 'none';
}
