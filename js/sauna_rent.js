class BodyMassage {
    constructor(rent, src, alt, price, description, parentSelector) {
        this.rent = rent;
        this.src = src;
        this.alt = alt;
        this.description = description;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('our_services_item');
        element.innerHTML = `
            <div class="our_services_title">
                <h4>АРЕНДА ${this.rent}</h4>
                <p>С 09:00-22:00</p>
            </div>
            <img src=${this.src} alt=${this.alt}">
            <div class="our_services_descr">
                <h5>${this.price} ТГ/ЧАС</h5>
                <p>АРЕНДА ${this.rent} СТОИМОСТЬ ДО 4 ЧЕЛ</p>
                <br>
                <p>
                    ${this.description}
                </p>
                <a data-modal>Заказать ${this.rent}</a>
            </div>
        `;
        this.parent.append(element);
    }
}

new BodyMassage(
    "САУНЫ",
    "./img/sauna/design2.jpg",
    "image",
    "25000",
    "<span>Включает в себя:</span><br><br>Сауна из канадского кедра и можжевельника<br><br>Комната отдыха (комфортное вместительность 4-6 чел)<br><br>Живой снег в любое время года<br><br>Spa комната с двумя кушетками для массажа<br><br>Душ, туалетная комната",
    '.our_services_wrapper'
).render();

new BodyMassage(
    "ХАММАМА",
    "./img/sauna/photo3.jpg",
    "image",
    "25000",
    "<span>Включает в себя:</span><br><br>Хаммам из мрамора<br><br>Комната отдыха (комфортное вместительность 4-6 чел)<br><br>Живой снег в любое время года<br><br>Spa комната с двумя кушетками для массажа<br><br>Душ, туалетная комната",
    '.our_services_wrapper'
).render();

new BodyMassage(
    "КОМПЛЕКС",
    "./img/sauna/design3.jpg",
    "image",
    "35000",
    "<span>Включает в себя:</span><br><br>Сауна из канадского кедра и можжевельника<br><br>Комната отдыха (комфортное вместительность 4-6 чел)<br><br>Живой снег в любое время года<br><br>Spa комната с двумя кушетками для массажа<br><br>Душ, туалетная комната",
    '.our_services_wrapper'
).render();