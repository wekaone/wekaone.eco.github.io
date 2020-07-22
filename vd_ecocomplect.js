ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.74091480180984,37.60016127383645],
            zoom: 10,
            controls: ['zoomControl', 'searchControl', 'routeButtonControl'],
        }, {
            searchControlProvider: 'yandex#search'
        });
    myMap.geoObjects
        .add(new ymaps.Placemark([55.653985,37.850234], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:viezd_yandex_map" target="_blank">Выставочный дом One 62<br/> в Москве</a><br>' +
        '<span class="description">Общая площадь: 62 м²<br/>Выставка домов "Малоэтажная страна"<br/>Котельники, Дзержинское шоссе, вл. 7/7<br/>(Желтая улица, дом №21)<br/>Время работы: 10:00-20:00</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3564-3530-4363-a531-643834633062/d1.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Выставочный дом One 62 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:viezd_yandex_map" target="_blank" style="font-size: 14px">➥ <u>Записаться на выезд</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'One 62 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild6462-3433-4236-a431-343564343736/1.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.653721,37.851303], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:viezd_yandex_map" target="_blank">Выставочный дом One 62<br/> в Москве</a><br>' +
        '<span class="description">Общая площадь: 62 м²<br/>Выставка домов "Малоэтажная страна"<br/>Котельники, Дзержинское шоссе, вл. 7/7<br/>(Синяя улица, дом №51)<br/>Время работы: 10:00-20:00</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3264-6135-4734-b266-306539306234/d2.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Выставочный дом Opti 127 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:viezd_yandex_map" target="_blank" style="font-size: 14px">➥ <u>Записаться на выезд</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Opti 127 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild6361-6632-4366-b732-363735633234/2.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -10],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }))
        .add(new ymaps.Placemark([55.805823983511296,37.38138462881041], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "#popup:viezd_yandex_map" target="_blank">Выставочный дом One 62<br/> в Москве</a><br>' +
        '<span class="description">Общая площадь: 62 м²<br/>Выставка домов "Синдика"<br/>МКАД, 65-й километр, 16/14<br/>(дом №16.31)<br/>Время работы: 11:00-20:00</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3139-6334-4638-b331-343665353964/d3.jpg" height="225" width="300" title="домогацкий отзывы экокомплект фахверк" alt="Выставочный дом Alpha 82 м² в Москве"> <br/> ' +           
        '<b><a href = "#popup:viezd_yandex_map" target="_blank" style="font-size: 14px">➥ <u>Записаться на выезд</u></a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: '',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Alpha 82 м²'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://static.tildacdn.com/tild3766-6331-4736-b937-656561373734/3.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            hideIconOnBalloonOpen: false,
            // Вкл./Откл кнопку закрытия балуна.
            balloonCloseButton: true,
            balloonOffset: [0, -0]
        }));
}
