document.querySelectorAll('.coverflow-container').forEach((container) => {
    const cards = container.querySelectorAll('.card');
    const totalCards = cards.length;
    let currentIndex = Math.floor(totalCards / 2);
    function updateCarousel() {
        cards.forEach((card, index) => {
            let offset = index - currentIndex;
            if (offset > totalCards / 2) offset -= totalCards;
            if (offset < -totalCards / 2) offset += totalCards;
            const angle = offset * 25;
            const translateZ = Math.abs(offset) > 2 ? -100 : Math.abs(offset) * -30;
            const translateX = offset * 120;
            const scale = offset === 0 ? 1.1 : 0.9;
            const opacity = Math.abs(offset) > 2 ? 0 : 1;
            const zIndex = totalCards - Math.abs(offset);
            card.style.transform = `
        rotateY(${angle}deg) 
        translateZ(${translateZ}px) 
        translateX(${translateX}px) 
        scale(${scale})
      `;
            card.style.opacity = opacity;
            card.style.zIndex = zIndex;
        });
    }
    updateCarousel();
    container.querySelector('.arrow.right').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    });
    container.querySelector('.arrow.left').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    });
    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    }, 4000);
    container.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    container.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        }, 4000);
    });
    cards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            if (index !== currentIndex) {
                e.preventDefault();
                currentIndex = index;
                updateCarousel();
            }
        });
    });
});
