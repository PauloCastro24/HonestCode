const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const main = document.querySelector('main');

const icons = document.querySelectorAll('.bi');
const lista = document.querySelectorAll('.cucuruto');

const maps = document.getElementById('maps');
const html = document.documentElement;
const body = document.getElementById('corpo');
const logo = document.getElementById('logo');
const logodark = document.getElementById('logodark');
const copy = document.getElementById('copy');

function toggleIconsIndex() {
    if (moonIcon.style.display === "none") {
        // Modo claro
        
        lista.forEach(lista => lista.style.color = "black");
        icons.forEach(icon => icon.style.color = "black");
        
        copy.style.color = "black";

        moonIcon.style.display = "inline";
        sunIcon.style.display = "none";
        logodark.style.display = "none";
        logo.style.display = "inline";


        footer.style.backgroundColor = "white";
        footer.style.borderTop = "none"; // Removendo a borda superior no modo claro
        header.style.backgroundColor = "white";
        header.style.borderBottom = "1px solid black";
        main.style.backgroundColor = "#003ea8";
        html.style.backgroundColor = "#003ea8";
        maps.style.border = "solid black 2px";
    } else {
        // Modo escuro
        lista.forEach(lista => lista.style.color = "white");
        icons.forEach(icon => icon.style.color = "white");
        

        sunIcon.style.color = "yellow";
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline";
        logodark.style.display = "inline";
        html.style.backgroundColor = "#050a30";
        footer.style.backgroundColor = "black";
        footer.style.borderTop = "1px solid #12229d"; // Borda superior escura
        main.style.backgroundColor = "#050a30";
        header.style.backgroundColor = "black";
        header.style.borderBottom = "1px solid white";
        copy.style.color = "white";
        logo.style.display = "none";
        maps.style.border = "solid white 2px";
    }
}


function menu() {
    const menu = document.getElementById('menu');
    const xicon = document.getElementById('xicon');
    const hicon = document.getElementById('hamburger-icon');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hicon.style.display = 'block';
        xicon.style.display = 'none';
    }
        else {
            menu.style.display = 'block';
            hicon.style.display = 'none';
            xicon.style.display = 'block';
        }
    }

function changeImage() {
    const image = document.getElementById('myImage'); // Seleciona a imagem pelo ID
    
    // Verifica a largura da janela
    if (window.innerWidth <= 500) {
        image.src = './img/small-image.png'; // Altera para a imagem pequena
    } else {
        image.src = './img/large-image.png'; // Altera para a imagem maior
    }
}

// Chama a função quando a página carrega
window.onload = function() {
    changeImage(); // Muda a imagem ao carregar a página
};

// Chama a função sempre que a janela for redimensionada
window.onresize = function() {
    changeImage(); // Atualiza a imagem ao redimensionar a janela
};

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach( (element) => myObserver.observe(element))