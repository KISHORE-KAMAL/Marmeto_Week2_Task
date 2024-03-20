document.addEventListener('DOMContentLoaded', async function() {
    const content = document.querySelector(".content");
    const container = document.querySelector(".container");
  
    const response = await fetch("./data.json");
    const productsData = await response.json();
    const data = productsData.data;
  
    const splide = new Splide('.splide', { 
        rewind: false,
        pagination: false,
        perPage: 1,
        perMove: 1,
        gap: 10,
    });
  
    splide.on('move', function(newIndex) {
        const product = data.find(item => item.id === newIndex);
  
        if (product) {
            content.innerHTML = `
                <h2>${product.heading_text}<br>
                    <span class="subHeading">${product.sub_heading_text}</span>
                </h2>
                <p>${product.description}</p>
                <h1>${product.price}</h1>
            `;
            container.style.background = product.background;
        }
    });
  
    splide.mount();
  
    // Add event listener for keyboard arrow keys
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            splide.go('-1');
        } else if (event.key === 'ArrowRight') {
            splide.go('+1');
        }
    });
  });
  