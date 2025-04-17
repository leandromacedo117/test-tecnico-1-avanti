# **Teste Técnico Avanti Innovation** 

**Desafio Front-End:** Implementação de uma interface dinâmica com busca em tempo real e carrossel interativo.  

🔗 **Preview:** [https://test-tecnico-1-avanti.vercel.app/]  
📅 **Data de Entrega:** [25/05]  

---

## **📌 Visão Geral**  
Este projeto foi desenvolvido como parte do processo seletivo da **Avanti Innovation**, com o objetivo de demonstrar habilidades em:  
✅ **HTML5 Semântico** – Estruturação limpa e acessível  
✅ **CSS3 Moderno** – Flexbox, Grid, responsividade e animações  
✅ **JavaScript Puro** – Lógica de busca dinâmica e slider interativo  
✅ **Metodologia BEM** – Padronização de classes CSS  
✅ **Mobile-First** – Design responsivo para todos os dispositivos  

---

## **✨ Funcionalidades**  

### **1. 🔍 Busca Dinâmica**  
  
- Exibição dos resultados de forma fluida  
- Feedback visual para buscas sem correspondência  

### **2. 🎠 Carrossel Interativo**  
- Navegação por setas ou dots  
- Transição suave entre slides  
- Auto-play   

### **3. 📱 Responsividade**  
- Adaptação para mobile, tablet e desktop  
- Menu responsivo (se aplicável)  
- Otimização de toques para mobile  

---

## **🛠 Tecnologias Utilizadas**  

| **Tecnologia**  | **Aplicação** |
|----------------|---------------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Estrutura semântica |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) |  Estilização e animações |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Lógica e interatividade |
| **BEM (CSS)** | Nomenclatura de classes |

---

## **🎨 Padrão BEM (CSS)**  

```css
/* Bloco */
.search { ... }

/* Elemento dentro do bloco */
.search__input { 
  padding: 0.5rem;
  border: 1px solid #ccc;
}

/* Modificador de estado */
.search__input--active {
  border-color: #2E8B57;
}

/* Bloco do carrossel */
.slider { ... }

/* Elemento do slider */
.slider__slide { ... }

/* Modificador para slide ativo */
.slider__slide--active {
  opacity: 1;
  z-index: 1;
}
```

---

## **📂 Estrutura do Projeto**  

```
test-tecnica-1-avanti/
├── index.html          # Página principal
├── styles/
│   ├── global.css       # Estilos globais
│   ├── styles.css   # Estilos 
│   
├── js/
│   ├── scripts.js      # Lógica da busca dinâmica
│   └── slide.js      # Controle do carrossel
└── assets/
    ├── header/        
    └── footer/         
```

---

## **🚀 Como Executar**  

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/leandromacedo117/test-tecnico-1-avanti.git
   ```

2. **Abra no navegador**  
   - Execute `index.html` em um servidor local (Live Server do VSCode recomendado).  

3. **Teste as funcionalidades**  
   - Digite na barra de busca e veja os resultados em tempo real.  
   - Navegue pelo carrossel usando as setas ou dots.  

---

## **🔍 Destaques do Código**  

### **Busca Dinâmica (JavaScript)**  
```javascript

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
```

### **Carrossel (JavaScript)**  
```javascript
var shelf = new Swiper(".product-shelf", {
  spaceBetween: 17,
  slidesPerView: 5,
  slidesPerGroup: 3,
  loop: true,
  loopAdditionalSlides: 2, // Adiciona slides extras para melhor transição
  loopedSlides: 5, // Igual ao número de slides visíveis
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    200: {
      spaceBetween: 10,
      slidesPerView: 2,
      loopedSlides: 2,
      loop: true, 
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
      loopedSlides: 2,
      loop: true, 
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 10,
      loopedSlides: 3,
      loop: true, 
    },
    720: {
      slidesPerView: 4,
      spaceBetween: 10,
      loopedSlides: 4,
      loop: true, 
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 17,
      loop: false, 
      loopedSlides: 0
    }
  }
});

```



**Desenvolvido por [Leandro Macedo]**  
