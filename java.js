const reveal = document.querySelectorAll('.card,.project,.stat');

window.addEventListener('scroll', () => {

    reveal.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add('active');

        }

    });

});