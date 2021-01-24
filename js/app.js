const d = document;

function slider() {
    const $next = d.querySelector('.slider__controls__next'),
                $prev = d.querySelector('.slider__controls__previous'),
                $slides = d.querySelectorAll('.slider-slide');
            
    let i = 0;

    d.addEventListener('click', (e) => {
        if (e.target === $prev) {
            e.preventDefault();
            $slides[i].classList.remove('active');
            i--;

            if (i < 0) {
                i = $slides.length - 1;
            }

            $slides[i].classList.add('active');
        }
        
        if (e.target === $next) {
            e.preventDefault();
            $slides[i].classList.remove('active');
            i++;

            if (i > $slides.length - 1) {
                i = 0;
            }

            $slides[i].classList.add('active');
        }
    });
}

d.addEventListener('DOMContentLoaded', slider);