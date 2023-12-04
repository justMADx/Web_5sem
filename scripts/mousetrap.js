document.addEventListener("DOMContentLoaded", function() {
    Mousetrap.bind('1', function() { //Бинд для перехода на главную страницу
        window.location.href = 'index.html';
    });

    Mousetrap.bind('2', function() { //Бинд для перехода в раздел "Популярное"
        window.location.href = 'popular-items-page.html';
    });

    Mousetrap.bind('3', function() {//Бинд для перехода в раздел "Список желаемого"
        window.location.href = 'wish-list-page.html';
    });

    Mousetrap.bind('4', function() {//Бинд для перехода в раздел "Предзаказ"
        window.location.href = 'pre-order-page.html';
    });

    Mousetrap.bind('5', function() {//Бинд для перехода в раздел "Корзина"
        window.location.href = 'shop-cart-page.html';
    });
});
