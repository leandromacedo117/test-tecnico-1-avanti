const menuMobile = document.querySelector('.menu-mobile__icon')
const footerInfo = document.querySelectorAll(".service__text")
const serviceTela = document.querySelectorAll(".service-tela")
const navMobile = document.querySelector(".nav-mobile")
const closeMenuMobile = document.querySelector(".nav-mobile-close")
const searchBtn = document.querySelectorAll(".search__btn")
const input = document.

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

  const inputSearch = document.querySelector(".input-search");
  const searchResults = document.getElementById("searchResults");
  
  searchBtn.addEventListener("click", () => {
    const searchTerm = inputSearch.value.trim();
    
    if (searchTerm) {
      // Cria o conteúdo dos resultados
      searchResults.innerHTML = `
        <div class="result-item">
          Você pesquisou por: <strong>${searchTerm}</strong>
        </div>
      `;
      
      // Exibe a div de resultados
      searchResults.classList.add("show");
      
      // Limpa o input
      inputSearch.value = "";
    }
  });

