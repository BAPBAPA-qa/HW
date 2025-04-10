/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	    var img = document.getElementById("myImage");
        if (img.style.display === "none") {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
        
})