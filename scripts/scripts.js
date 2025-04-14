const menuMobile = document.querySelector('.menu-mobile__icon')
const footerInfo = document.querySelectorAll(".service__text")
const serviceTela = document.querySelectorAll(".service-tela")
const navMobile = document.querySelector(".nav-mobile")
const closeMenuMobile = document.querySelector(".nav-mobile-close")
const searchBtn = document.querySelectorAll(".search__btn")


console.log('navMobile: ', navMobile)
console.log('menuMobile: ', menuMobile)

console.log(serviceTela)
console.log(footerInfo)

function toggleFooter(){

    console.log("clickou")
    console.log(footerInfo)
}

menuMobile.addEventListener("click", () => {
    console.log('navMobile: ', navMobile)
    navMobile.classList.add("active")
    navMobile.classList.remove("close")
  })

closeMenuMobile.addEventListener("click", () => {
    navMobile.classList.remove("active")
    navMobile.classList.add("close")
  })



serviceTela.forEach(item => {
    item.addEventListener('click', () => {
        const footerText = item.closest('.service-info').querySelector('.service__text');
        footerText.classList.toggle("show");
    });
  });


  //search 

function showSearchMessage(searchTerm) {

  document.querySelectorAll('.search-message').forEach(e => e.remove());
  

  const messageDiv = document.createElement('div');
  messageDiv.className = 'search-message';
  messageDiv.textContent = `Você buscou por: ${searchTerm}`;
  
  // Estilos da mensagem
  Object.assign(messageDiv.style, {
      position: 'fixed',
      top: '20px',
      left: '50%',
      
      transform: 'translateX(-50%)',
      backgroundColor: '#000',
      color: '#fff',
      width:'80vw',
      margin: '0 auto',
      padding: '20px 35px',
      borderRadius: '40px',
      zIndex: '1000',
      boxShadow: '0 2px 10px #00000033',
      fontSize: '14px',
      'word-break': 'break-work'
  });

  document.body.appendChild(messageDiv);


  setTimeout(() => messageDiv.remove(), 7000);
}

document.querySelectorAll('.search__btn').forEach(button => {
  button.addEventListener('click', function(e) {
      e.preventDefault();
      const container = this.closest('.menu__search, .menu__search-mobile');
      const input = container.querySelector('.input-search');
      const searchTerm = input.value.trim();
      
      if(searchTerm) showSearchMessage(searchTerm);
  });
});


document.querySelectorAll('.input-search').forEach(input => {
  input.addEventListener('keypress', function(e) {
      if(e.key === 'Enter') {
          e.preventDefault();
          const searchTerm = this.value.trim();
          if(searchTerm) showSearchMessage(searchTerm);
      }
  });
});