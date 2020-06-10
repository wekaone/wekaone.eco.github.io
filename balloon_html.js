ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/logo.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/ball.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
    myMap.geoObjects
        .add(new ymaps.Placemark([55.684758, 37.738521], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "https://ecocomplect.shop/">Фахверковый дом Bergen Opti 127 м²</a><br>' +
        '<span class="description">Сверхтеплые, недорогие, экологичные дома заводского производства</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3933-3864-4034-b437-306662316531/T4ptMCiEAxw.jpg" height="200" width="300"> <br/> ' +
            '<b>Проект Bergen Opti 127 м²</b></a><br/>' +
            '<b><a href = "https://ecocomplect.shop/">Подробнее о проекте</a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'ООО "ЭКОКОМПЛЕКТ":<br/>Комплекс "Малоэтажная страна" Дзержинское ш., 7/7, Котельники, Московская обл.',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'г. Елец'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'Logo.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }))
        .add(new ymaps.Placemark([55.833436, 37.715175], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "https://ecocomplect.shop/">Фахверковый дом Bergen Opti 127 м²</a><br>' +
        '<span class="description">Сверхтеплые, недорогие, экологичные дома заводского производства</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3933-3864-4034-b437-306662316531/T4ptMCiEAxw.jpg" height="200" width="300"> <br/> ' +
            '<b>Проект Bergen Opti 127 м²</b></a><br/>' +
            '<b><a href = "https://ecocomplect.shop/">Подробнее о проекте</a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'ООО "ЭКОКОМПЛЕКТ":<br/>Комплекс "Малоэтажная страна" Дзержинское ш., 7/7, Котельники, Московская обл.',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'г. Елец'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'Logo.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }))
        .add(new ymaps.Placemark([55.687086, 37.529789], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "https://ecocomplect.shop/">Фахверковый дом Bergen Opti 127 м²</a><br>' +
        '<span class="description">Сверхтеплые, недорогие, экологичные дома заводского производства</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3933-3864-4034-b437-306662316531/T4ptMCiEAxw.jpg" height="200" width="300"> <br/> ' +
            '<b>Проект Bergen Opti 127 м²</b></a><br/>' +
            '<b><a href = "https://ecocomplect.shop/">Подробнее о проекте</a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'ООО "ЭКОКОМПЛЕКТ":<br/>Комплекс "Малоэтажная страна" Дзержинское ш., 7/7, Котельники, Московская обл.',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'г. Елец'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'Logo.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }))
        .add(new ymaps.Placemark([55.782392, 37.614924], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "https://ecocomplect.shop/">Фахверковый дом Bergen Opti 127 м²</a><br>' +
        '<span class="description">Сверхтеплые, недорогие, экологичные дома заводского производства</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3933-3864-4034-b437-306662316531/T4ptMCiEAxw.jpg" height="200" width="300"> <br/> ' +
            '<b>Проект Bergen Opti 127 м²</b></a><br/>' +
            '<b><a href = "https://ecocomplect.shop/">Подробнее о проекте</a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'ООО "ЭКОКОМПЛЕКТ":<br/>Комплекс "Малоэтажная страна" Дзержинское ш., 7/7, Котельники, Московская обл.',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'г. Елец'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'Logo.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }))
        .add(new ymaps.Placemark([55.642063, 37.656123], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "https://ecocomplect.shop/">Фахверковый дом Bergen Opti 127 м²</a><br>' +
        '<span class="description">Сверхтеплые, недорогие, экологичные дома заводского производства</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3933-3864-4034-b437-306662316531/T4ptMCiEAxw.jpg" height="200" width="300"> <br/> ' +
            '<b>Проект Bergen Opti 127 м²</b></a><br/>' +
            '<b><a href = "https://ecocomplect.shop/">Подробнее о проекте</a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'ООО "ЭКОКОМПЛЕКТ":<br/>Комплекс "Малоэтажная страна" Дзержинское ш., 7/7, Котельники, Московская обл.',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'г. Елец'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'Logo.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }))
        .add(new ymaps.Placemark([55.826479, 37.487208], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "https://ecocomplect.shop/">Фахверковый дом Bergen Opti 127 м²</a><br>' +
        '<span class="description">Сверхтеплые, недорогие, экологичные дома заводского производства</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3933-3864-4034-b437-306662316531/T4ptMCiEAxw.jpg" height="200" width="300"> <br/> ' +
            '<b>Проект Bergen Opti 127 м²</b></a><br/>' +
            '<b><a href = "https://ecocomplect.shop/">Подробнее о проекте</a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'ООО "ЭКОКОМПЛЕКТ":<br/>Комплекс "Малоэтажная страна" Дзержинское ш., 7/7, Котельники, Московская обл.',
        // Зададим содержимое всплывающей подсказки.
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'Logo.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }))
        .add(new ymaps.Placemark([55.694843, 37.435023], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "https://ecocomplect.shop/">Фахверковый дом Bergen Opti 127 м²</a><br>' +
        '<span class="description">Сверхтеплые, недорогие, экологичные дома заводского производства</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3933-3864-4034-b437-306662316531/T4ptMCiEAxw.jpg" height="200" width="300"> <br/> ' +
            '<b>Проект Bergen Opti 127 м²</b></a><br/>' +
            '<b><a href = "https://ecocomplect.shop/">Подробнее о проекте</a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'ООО "ЭКОКОМПЛЕКТ":<br/>Комплекс "Малоэтажная страна" Дзержинское ш., 7/7, Котельники, Московская обл.',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'г. Елец'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'Logo.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }))
        .add(new ymaps.Placemark([55.790139, 37.814052], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "https://ecocomplect.shop/">Фахверковый дом Bergen Opti 127 м²</a><br>' +
        '<span class="description">Сверхтеплые, недорогие, экологичные дома заводского производства</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3933-3864-4034-b437-306662316531/T4ptMCiEAxw.jpg" height="200" width="300"> <br/> ' +
            '<b>Проект Bergen Opti 127 м²</b></a><br/>' +
            '<b><a href = "https://ecocomplect.shop/">Подробнее о проекте</a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'ООО "ЭКОКОМПЛЕКТ":<br/>Комплекс "Малоэтажная страна" Дзержинское ш., 7/7, Котельники, Московская обл.',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'г. Елец'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'Logo.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }))
        .add(new ymaps.Placemark([55.790139, 37.814052], {
        // Зададим содержимое заголовка балуна.
        balloonContentHeader: '<a href = "https://ecocomplect.shop/">Фахверковый дом Bergen Opti 127 м²</a><br>' +
        '<span class="description">Сверхтеплые, недорогие, экологичные дома заводского производства</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="https://static.tildacdn.com/tild3933-3864-4034-b437-306662316531/T4ptMCiEAxw.jpg" height="200" width="300"> <br/> ' +
            '<b>Проект Bergen Opti 127 м²</b></a><br/>' +
            '<b><a href = "https://ecocomplect.shop/">Подробнее о проекте</a></b>',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'ООО "ЭКОКОМПЛЕКТ":<br/>Комплекс "Малоэтажная страна" Дзержинское ш., 7/7, Котельники, Московская обл.',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'г. Елец'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'Logo.png',
            // Размеры метки.
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        }));
}
