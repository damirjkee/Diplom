class BodyMassage {
    constructor(src, alt, title, description, price, time, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.description = description;
        this.price = price;
        this.time = time;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('body_massage_item');
        element.innerHTML = `
        <div class="body_massage_img">
            <img src=${this.src} alt=${this.alt}>
        </div>
        <div class="body_massage_descr">
            <div class="body_massage_descr_padding">
                <h5>${this.title}</h5>
                <p>${this.description}</p>
                <h4>${this.price}</h4>
            </div>
            <h6>ПРОДОЛЖИТЕЛЬНОСТЬ: ${this.time} МИНУТ</h6>
            <a data-modal>ЗАПИСАТЬСЯ</a>
        </div>
        `;
        this.parent.append(element);
    }
}

new BodyMassage(
    "./img/spa/body_massage1.jpg",
    "body massage",
    'ТАЙСКИЙ МАССАЖ',
    'ОКУНИТЕСЬ В НЕПОВТОРИМУЮ АТМОСФЕРУ ВОСТОЧНОЙ ФИЛОСОФИИ И НАПОЛНИТЕ СВОЙ ОРГАНИЗМ МОЩНЕЙШИМ ЗАРЯДОМ ПОЛОЖИТЕЛЬНОЙ ЭНЕРГИИ И ЖИЗНЕННОЙ СИЛЫ.',
    '25.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage2.jpg",
    "body massage",
    'ТАЙСКИЙ МАССАЖ',
    'ОКУНИТЕСЬ В НЕПОВТОРИМУЮ АТМОСФЕРУ ВОСТОЧНОЙ ФИЛОСОФИИ И НАПОЛНИТЕ СВОЙ ОРГАНИЗМ МОЩНЕЙШИМ ЗАРЯДОМ ПОЛОЖИТЕЛЬНОЙ ЭНЕРГИИ И ЖИЗНЕННОЙ СИЛЫ.',
    '35.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage3.jpg",
    "body massage",
    'ТАЙСКИЙ МАССАЖ',
    'ОКУНИТЕСЬ В НЕПОВТОРИМУЮ АТМОСФЕРУ ВОСТОЧНОЙ ФИЛОСОФИИ И НАПОЛНИТЕ СВОЙ ОРГАНИЗМ МОЩНЕЙШИМ ЗАРЯДОМ ПОЛОЖИТЕЛЬНОЙ ЭНЕРГИИ И ЖИЗНЕННОЙ СИЛЫ.',
    '50.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage4.jpg",
    "body massage",
    'OIL МАССАЖ',
    'МАСЛО БЕЗ АРОМАТА. РАССЛАБЛЯЮЩИЙ МАССАЖ ВСЕГО ТЕЛА',
    '30.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage5.jpg",
    "body massage",
    'OIL МАССАЖ',
    'МАСЛО БЕЗ АРОМАТА. РАССЛАБЛЯЮЩИЙ МАССАЖ ВСЕГО ТЕЛА',
    '40.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage6.jpg",
    "body massage",
    'OIL МАССАЖ',
    'МАСЛО БЕЗ АРОМАТА. РАССЛАБЛЯЮЩИЙ МАССАЖ ВСЕГО ТЕЛА',
    '60.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage7.jpg",
    "body massage",
    'АРОМА OIL МАССАЖ',
    'МАСЛА: МАНГО, ВИНОГРАДНОЕ, ШОКОЛАДНОЕ, СЛАДКИЙ КОКОС, ПАПАЙЯ, КАРАМБАЛА, ЛЕМОНГРАС И ДР.',
    '35.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage8.jpg",
    "body massage",
    'АРОМА OIL МАССАЖ',
    'МАСЛА: МАНГО, ВИНОГРАДНОЕ, ШОКОЛАДНОЕ, СЛАДКИЙ КОКОС, ПАПАЙЯ, КАРАМБАЛА, ЛЕМОНГРАС И ДР.',
    '50.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage9.jpg",
    "body massage",
    'АРОМА OIL МАССАЖ',
    'МАСЛА: МАНГО, ВИНОГРАДНОЕ, ШОКОЛАДНОЕ, СЛАДКИЙ КОКОС, ПАПАЙЯ, КАРАМБАЛА, ЛЕМОНГРАС И ДР.',
    '70.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage10.jpg",
    "body massage",
    'АРОМА OIL МАССАЖ НА LA SULTANE DE SABA',
    'МАСЛА: ТРОПИЧЕСКИЕ ЦВЕТЫ, ЛОТОС ФРАНЖИПАНИ, АЮВЕРДА, АЛОЕ ВЕРА. СИНЕРГИЯ АРОМАТЕРАПИИ И МАССАЖА ДЛЯ ЗДОРОВЬЯ И КРАСОТЫ ВАШЕЙ КОЖИ.',
    '40.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage11.jpg",
    "body massage",
    'АРОМА OIL МАССАЖ НА LA SULTANE DE SABA',
    'МАСЛА: ТРОПИЧЕСКИЕ ЦВЕТЫ, ЛОТОС ФРАНЖИПАНИ, АЮВЕРДА, АЛОЕ ВЕРА. СИНЕРГИЯ АРОМАТЕРАПИИ И МАССАЖА ДЛЯ ЗДОРОВЬЯ И КРАСОТЫ ВАШЕЙ КОЖИ.',
    '55.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage12.jpg",
    "body massage",
    'АРОМА OIL МАССАЖ НА LA SULTANE DE SABA',
    'МАСЛА: ТРОПИЧЕСКИЕ ЦВЕТЫ, ЛОТОС ФРАНЖИПАНИ, АЮВЕРДА, АЛОЕ ВЕРА. СИНЕРГИЯ АРОМАТЕРАПИИ И МАССАЖА ДЛЯ ЗДОРОВЬЯ И КРАСОТЫ ВАШЕЙ КОЖИ.',
    '80.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage13.jpg",
    "body massage",
    'МАССАЖ ГОРЯЧИМ МАСЛОМ',
    'РАЗОГРЕТОЕ МАСЛО В ЧУТКИХ РУКАХ МАСТЕРА НАПОЛНИТ ВАШЕ ТЕЛО ЭНЕРГИЕЙ ТЕПЛА. ЭФФЕКТИВНО УВЛАЖНЯЕТ, ПИТАЕТ И ТОНИЗИРУЕТ КОЖУ. ИДЕАЛЬНО ДЛЯ ПЕРИОДА ОСЕННИХ И ЗИМНИХ ХОЛОДОВ.',
    '35.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage14.jpg",
    "body massage",
    'МАССАЖ ГОРЯЧИМ МАСЛОМ',
    'РАЗОГРЕТОЕ МАСЛО В ЧУТКИХ РУКАХ МАСТЕРА НАПОЛНИТ ВАШЕ ТЕЛО ЭНЕРГИЕЙ ТЕПЛА. ЭФФЕКТИВНО УВЛАЖНЯЕТ, ПИТАЕТ И ТОНИЗИРУЕТ КОЖУ. ИДЕАЛЬНО ДЛЯ ПЕРИОДА ОСЕННИХ И ЗИМНИХ ХОЛОДОВ.',
    '45.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage15.jpg",
    "body massage",
    'МЕДОВЫЙ МАССАЖ',
    'УМЕНЬШЕНИЕ ПЛОТНОСТИ ПОДКОЖНО-ЖИРОВОЙ КЛЕТЧАТКИ. СПОСОБСТВУЕТ УМЕНЬШЕНИЮ РАСТЯЖЕК.',
    '35.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage16.jpg",
    "body massage",
    'МЕДОВЫЙ МАССАЖ',
    'УМЕНЬШЕНИЕ ПЛОТНОСТИ ПОДКОЖНО-ЖИРОВОЙ КЛЕТЧАТКИ. СПОСОБСТВУЕТ УМЕНЬШЕНИЮ РАСТЯЖЕК.',
    '45.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage17.jpg",
    "body massage",
    'МАССАЖ ТРАВЯНЫМИ МЕШОЧКАМИ',
    'ДВОЙНОЙ УДАР ПО УСТАЛОСТИ И СТРЕССУ. УМЕНЬШАТСЯ МЫШЕЧНЫЕ БОЛИ И СПАЗМЫ. ВЫ ПОЧУВСТВУЕТЕ, КАК УСТАЛОСТЬ, НАПРЯЖЕНИЕ И СТРЕСС ПОКИДАЮТ ВАС.',
    '40.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage18.jpg",
    "body massage",
    'МАССАЖ ТРАВЯНЫМИ МЕШОЧКАМИ',
    'ДВОЙНОЙ УДАР ПО УСТАЛОСТИ И СТРЕССУ. УМЕНЬШАТСЯ МЫШЕЧНЫЕ БОЛИ И СПАЗМЫ. ВЫ ПОЧУВСТВУЕТЕ, КАК УСТАЛОСТЬ, НАПРЯЖЕНИЕ И СТРЕСС ПОКИДАЮТ ВАС.',
    '50.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage19.jpg",
    "body massage",
    'АНТИЦЕЛЛЮЛИТНЫЙ МАССАЖ',
    'АКТИВИЗАЦИЯ КРОВООБРАЩЕНИЯ. СНЯТИЕ ОТЧЕТНОСТИ, УМЕНЬШЕНИЕ ЖИРОВЫХ ОТЛОЖЕНИЙ.',
    '35.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage20.jpg",
    "body massage",
    'АНТИЦЕЛЛЮЛИТНЫЙ МАССАЖ',
    'АКТИВИЗАЦИЯ КРОВООБРАЩЕНИЯ. СНЯТИЕ ОТЧЕТНОСТИ, УМЕНЬШЕНИЕ ЖИРОВЫХ ОТЛОЖЕНИЙ.',
    '45.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage21.jpg",
    "body massage",
    'СЛИМ МАССАЖ',
    'ОСОБЕННЫЙ МЕТОД МАССАЖА УСТРАНЯЕТ С КОЖИ «АПЕЛЬСИНОВУЮ КОРКУ», ДЕЛАЕТ ЕЕ УПРУГОЙ. УМЕНЬШАЮТСЯ ЖИРОВЫЕ ОТЛОЖЕНИЯ, УЛУЧШАЕТСЯ КРОВООБРАЩЕНИЕ, НЕОБХОДИМОЕ ДЛЯ ПИТАНИЯ ТКАНЕЙ.',
    '35.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage22.jpg",
    "body massage",
    'СЛИМ МАССАЖ',
    'ОСОБЕННЫЙ МЕТОД МАССАЖА УСТРАНЯЕТ С КОЖИ «АПЕЛЬСИНОВУЮ КОРКУ», ДЕЛАЕТ ЕЕ УПРУГОЙ. УМЕНЬШАЮТСЯ ЖИРОВЫЕ ОТЛОЖЕНИЯ, УЛУЧШАЕТСЯ КРОВООБРАЩЕНИЕ, НЕОБХОДИМОЕ ДЛЯ ПИТАНИЯ ТКАНЕЙ.',
    '45.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage23.jpg",
    "body massage",
    'МОДЕЛИРУЮЩИЙ МАССАЖ',
    'ДАННЫЙ МАССАЖ ВОЗВРАЩАЕТ КОЖЕ УПРУГОСТЬ И ГЛАДКОСТЬ, ПОЗВОЛЯЕТ СКОРРЕКТИРОВАТЬ КОНТУРЫ ФИГУРЫ И ОВАЛ ЛИЦА.',
    '35.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage24.jpg",
    "body massage",
    'МОДЕЛИРУЮЩИЙ МАССАЖ',
    'ДАННЫЙ МАССАЖ ВОЗВРАЩАЕТ КОЖЕ УПРУГОСТЬ И ГЛАДКОСТЬ, ПОЗВОЛЯЕТ СКОРРЕКТИРОВАТЬ КОНТУРЫ ФИГУРЫ И ОВАЛ ЛИЦА.',
    '45.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage25.jpg",
    "body massage",
    'ФИТНЕС МАССАЖ',
    'СОВРЕМЕННАЯ, ЭФФЕКТИВНАЯ МЕТОДИКА КОРРЕКЦИИ ФИГУРЫ, ОБЪЕДИНЯЮЩАЯ В СЕБЕ КЛАССИЧЕСКИЕ ПРИЕМЫ ФИТНЕССА И МАССАЖА. ПОМОГАЕТ УМЕНЬШИТЬ ЖИРОВЫЕ ОТЛОЖЕНИЯ В ПРОБЛЕМНЫХ ЗОНАХ И ПРОЯВЛЕНИЯ ЦЕЛЛЮЛИТА.',
    '35.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage26.jpg",
    "body massage",
    'ФИТНЕС МАССАЖ',
    'СОВРЕМЕННАЯ, ЭФФЕКТИВНАЯ МЕТОДИКА КОРРЕКЦИИ ФИГУРЫ, ОБЪЕДИНЯЮЩАЯ В СЕБЕ КЛАССИЧЕСКИЕ ПРИЕМЫ ФИТНЕССА И МАССАЖА. ПОМОГАЕТ УМЕНЬШИТЬ ЖИРОВЫЕ ОТЛОЖЕНИЯ В ПРОБЛЕМНЫХ ЗОНАХ И ПРОЯВЛЕНИЯ ЦЕЛЛЮЛИТА.',
    '45.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();

new BodyMassage(
    "./img/spa/body_massage27.jpg",
    "body massage",
    'ЛИМФОДРЕНАЖНЫЙ',
    'ФИЗИОТЕРАПЕВТИЧЕСКАЯ ПРОЦЕДУРА, КОТОРАЯ ВЫВОДИТ ТОКСИЧЕСКИЕ ОБРАЗОВАНИЯ И ИЗЛИШНЮЮ ЖИДКОСТЬ ИЗ ОРГАНИЗМА. ОСНОВНОЕ ДЕЙСТВИЕ ЛИМФОДРЕНАЖА СОДЕРЖИТСЯ В УВЕЛИЧЕНИИ СКОРОСТИ ЛИМФОТОКА.',
    '40.000 ТГ',
    60,
    '.body_massage_wrapper'
).render();