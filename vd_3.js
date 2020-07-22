ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.653985,37.850234],
        zoom: 13,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    var placemark = new ymaps.Placemark(myMap.getCenter(), {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "" target="_blank">Выстовочный дом Alpha<br/> в Москве</a><br>' +
        '<span class="description">Общая площадь: 82 м²</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3139-6334-4638-b331-343665353964/d3.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Выстовочный дом Alpha 82 м² в Москве"> <br/> ' +           
        '<b><a href = "" target="_blank" style="font-size: 14px">➥ <u>Записаться на выезд</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Alpha 82 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3536-3861-4330-a239-373965653465/Logo.png',
            // Размеры метки.
            iconImageSize: [20, 20],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
    });
    // Добавим метку на карту.
    myMap.geoObjects.add(placemark);
    // Откроем балун на метке.
    placemark.balloon.open();
}
