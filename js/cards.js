class Services {
    constructor(src, alt, title, description, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.description = description;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('our_services_item');
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <div class="our_services_description">
                <h3>${this.title}</h3>
                <p>${this.description}</p>
                <a data-modal class="record_btn">Записаться</a>
            </div>
        `;
        this.parent.append(element);
    }
}

new Services(
    "img/main/cards/cards1.jpg",
    "SPA",
    'Спа',
    'Окунитесь в мир роскошных, уникальных церемоний красоты по телу и лицу, эксклюзивных Spa-программ, выполненных лучшими мастерами из Таиланда, Индонезии и России.',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards2.jpg",
    "Sauna",
    'Сауна',
    'Место, куда не стыдно прийти с семьей, компанией или просто вдвоем. Пространство, где русские банные традиции сочетаются с модными, дизайнерскими интерьерами.',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards3.jpg",
    "Hammam",
    'Хаммам',
    'Хаммам – это баня для эстетов. В нашем комплексе "Enjoy", турецкий хаммам входит в состав сауны. Две культуры парения находятся в одном помещении, что дает насладиться всеми прелестями по принятию СПА процедур и парению.',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards4.jpg",
    "Salt cave",
    'Соляная пещера',
    'Наша соляная пещера – совершенная имитация природной соляной пещеры с присущим ей микроклиматом, целебный воздух которого оказывает комплексное лечебное воздействие на организм человека.',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards5.jpg",
    "Manicure",
    'Ногтевой сервис',
    'Только обращаясь к настоящим мастерам, вам можно быть уверенным, что процесс будет исполнен качественно и, что важно, безопасно.',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards6.jpg",
    "Cosmetology",
    'Косметология',
    'Косметология, чистка лица, эпиляци, пилинг лица, фотоомоложение кожи лица, массаж лица и другие услуги вы найдете в нашем салоне.',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards7.jpg",
    "Make-up",
    'Визаж',
    'Свадебные образы, макияж, face art и creative make up- все для Вас',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards8.jpg",
    "Yoga",
    'Йога',
    'Индивидуальная практика йоги в Москве',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards9.jpg",
    "Spa certificate",
    'Сертификат в Спа',
    'Подарите любимым спа сертификат! Они останутся в восторге от такого подарка. Различные наборы сертификатов для любого человека.',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards10.jpg",
    "Spa for two",
    'Спа для двоих',
    'Спа программы, массажи и уходы вместе со второй половинкой в самом зеленом спа салоне Москвы. Удивите свою вторую половинку походом в спа.',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards11.jpg",
    "Bachelorette party in spa",
    'Девичник в спа',
    'Удивите подруг лучшими спа программами и массажами в самом зеленом спа салоне Москвы. Спа девичник для лучших подруг.',
    '.our_services_wrapper'
).render();

new Services(
    "img/main/cards/cards12.jpg",
    "Spa programs",
    'Спа программы',
    'Попробуйте наши авторские спа программы для восстановления души и тела. Спа программы в хаммаме и сауне с последующим массажем.',
    '.our_services_wrapper'
).render();