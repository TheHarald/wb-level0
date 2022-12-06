const itemPrices = [ 522, 1007, 493 ];
const oldItemPrices = [ 674, 1107, 513 ];

//redux
const counterElements = document.querySelectorAll('.counter'); //счётчики
const counterNumberElements = document.querySelectorAll('.count__value > .count__number'); // осталось
const priceValueElements = document.querySelectorAll('.price__value'); // цены
const oldPriceValueElements = document.querySelectorAll('.old-price-value'); // старые цены
const itemCheckboxElements = document.querySelectorAll('.checkbox-conatiner > .checkbox.item'); // чекбоксы
const allItemsCkeckboxElement = document.querySelector('.checkbox-conatiner > .checkbox.all'); // выбрать все
const totalPriceElement = document.querySelector('.total__title-number'); // сумма
const oldTotalPriceElement = document.querySelector('.total__subtitle > .number'); // старая сумма
const itemItemCountElement = document.querySelector('.total__subtitle > .count__number'); // количество товаров в корзине
const totalSaleElement = document.querySelector('.total__subtitle > .sale__number'); // общая скидка
const paymentCheckboxElement = document.querySelector('.checkbox.payment'); // чекбокс оплаты
const paymentButtonElement = document.querySelector('.total-section-submit__button'); // кнопка оплаты
const paymentModalElement = document.querySelector('.modal-window__background'); // модальное окно
const closePaymentModalButton = document.querySelector('.icon-container.close-modal'); // кнопка закрытия модального окна
const editPaymentModalButtons = document.querySelectorAll('.open-payment-modal'); // кнопка редактирования оплаты
const editDeliveryModalButtons = document.querySelectorAll('.open-delivery-modal'); // кнопка редактирования доставки
const deliveryOptionPointCheckboxElements = document.querySelector('#tab1.tabs__radio'); // чекбоксы точек доставки
const deliveryOptionCourierCheckboxElements = document.querySelector('#tab2.tabs__radio'); // чекбокс курьерской доставки
const deliveryOptionPointElements = document.querySelector('.addresses__list.point'); // точки доставки
const deliveryOptionCourierElements = document.querySelector('.addresses__list.delivery'); // курьерская доставка
const closeDeliveryModalButton = document.querySelector('.icon-container.close-modal-delivery'); // кнопка закрытия модального окна
const deliveryModalElement = document.querySelector('.modal-window__background.delivery'); // модальное окно
const deliverySubmitButton = document.querySelector('.modal-window__button.delivery'); // кнопка подтверждения выбора доставки
const paymentSubmitButton = document.querySelector('.modal-window__button.payment'); // кнопка подтверждения выбора оплаты

const nameInputElement = document.querySelector('.name.recipient__input');
const nameInputSubtitleElement = document.querySelector('.name.recipient__input-subtitle');

const secondNameInputElement = document.querySelector('.second-name.recipient__input');
const secondNameInputSubtitleElement = document.querySelector('.second-name.recipient__input-subtitle');

const emailInputElement = document.querySelector('.email.recipient__input');
const emailInputSubtitleElement = document.querySelector('.email.recipient__input-subtitle');

const phoneInputElement = document.querySelector('.phone.recipient__input');
const phoneInputSubtitleElement = document.querySelector('.phone.recipient__input-subtitle');

const INNInputElement = document.querySelector('.inn.recipient__input');
const INNInputSubtitleElement = document.querySelector('.inn.recipient__input-subtitle');

const missingShowHideButton =  document.querySelector('.icon-container.show-hide-missing'); // кнопка показать/скрыть отсутствующие товары
const missingCartItemsElement = document.querySelector('.cart__items.missing'); // отсутствующие товары

const cartshowHideButton = document.querySelector('.icon-container.show-hide-cart'); // кнопка показать/скрыть корзину
const cartElement = document.querySelector('.cart__items.active'); // корзина
const cartTotalcountElement = document.querySelector('.cart-total-count'); // количество товаров в корзине
const cartTotalPriceElement = document.querySelector('.cart-total-price'); // сумма товаров в корзине
const selectAllCheckboxElement = document.querySelector('.checkbox-conatiner.active'); // чекбокс выбрать все
const cartInfoElement = document.querySelector('.cart__items-count.active'); // информация о корзине
const formElement = document.querySelector('#form'); // форма

cartshowHideButton.addEventListener('click', () => { 
    cartElement.classList.toggle('hide');
    cartshowHideButton.classList.toggle('rotate-up');
    selectAllCheckboxElement.classList.toggle('hide');
    cartInfoElement.classList.toggle('hide');
});

missingShowHideButton.addEventListener('click', () => {
    missingCartItemsElement.classList.toggle('hide');
    missingShowHideButton.classList.toggle('rotate-up');
});


paymentButtonElement.addEventListener('click', () => {
    if(nameInputElement.value === '') {
        nameInputSubtitleElement.classList.remove('hide');
        nameInputElement.classList.add('input-error');
        nameInputElement.scrollIntoView({block: "start", behavior: "smooth"});
    }

    if(secondNameInputElement.value === '') {
        secondNameInputSubtitleElement.classList.remove('hide');
        secondNameInputElement.classList.add('input-error');
        secondNameInputElement.scrollIntoView({block: "start", behavior: "smooth"});
    }

    if(emailInputElement.value === '') {
        emailInputSubtitleElement.classList.remove('hide');
        emailInputElement.classList.add('input-error');
        emailInputSubtitleElement.textContent = 'Укажите электронную почту';
        emailInputElement.scrollIntoView({block: "start", behavior: "smooth"});
    }

    if(phoneInputElement.value === '') {
        phoneInputSubtitleElement.classList.remove('hide');
        phoneInputElement.classList.add('input-error');
        phoneInputSubtitleElement.textContent = 'Укажите номер телефона';
    }

    if(INNInputElement.value === '') {
        INNInputElement.classList.add('input-error');
        INNInputSubtitleElement.textContent = 'Укажите ИНН';
        INNInputSubtitleElement.classList.remove('black');
        INNInputSubtitleElement.classList.add('red');
    }
});

emailInputElement.addEventListener('focusout', () => {
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailInputElement.value === '') {
        console.log('empty');
        emailInputSubtitleElement.classList.add('hide');
        emailInputElement.classList.remove('input-error');
    }else if(!emailRegExp.test(emailInputElement.value)) {
        emailInputSubtitleElement.classList.remove('hide');
        emailInputElement.classList.add('input-error');
        emailInputSubtitleElement.textContent = 'Проверьте адрес электронной почты';
    }
});

phoneInputElement.addEventListener('keyup', (event) => {
    const positions = [2, 6, 10, 13];
    if(positions.includes(event.target.value.length) && event.key !== 'Backspace' ) {
            event.target.value += ' ';
    }
});

phoneInputElement.addEventListener('focusout', () => {
    const phoneRegExp = /^\+[1-9] \d{3} \d{3} \d{2} \d{2}$/;
    if(phoneInputElement.value === '') {
        phoneInputSubtitleElement.classList.add('hide');
        phoneInputElement.classList.remove('input-error');
    }else if(!phoneRegExp.test(phoneInputElement.value)) {
        phoneInputSubtitleElement.classList.remove('hide');
        phoneInputElement.classList.add('input-error');
        phoneInputSubtitleElement.textContent = 'Формат: +9 999 999 99 99';
    }     
});

INNInputElement.addEventListener('focusout', () => {
    const INNRegExp = /^\d{10}$/;
    if(INNInputElement.value === '') {
        INNInputElement.classList.remove('input-error');
    }else if(!INNRegExp.test(INNInputElement.value)) {
        INNInputElement.classList.add('input-error');
        INNInputSubtitleElement.classList.remove('hide');
        INNInputSubtitleElement.classList.remove('black');
        INNInputSubtitleElement.textContent = 'Формат: 1234567890';
    }
});

nameInputElement.addEventListener('focus', () => {
    nameInputSubtitleElement.classList.add('hide');
    nameInputElement.classList.remove('input-error');
});

secondNameInputElement.addEventListener('focus', () => {
    secondNameInputSubtitleElement.classList.add('hide');
    secondNameInputElement.classList.remove('input-error');
});

emailInputElement.addEventListener('focus', () => {
    emailInputSubtitleElement.classList.add('hide');
    emailInputElement.classList.remove('input-error');
});

phoneInputElement.addEventListener('focus', () => {
    phoneInputSubtitleElement.classList.add('hide');
    phoneInputElement.classList.remove('input-error');
});

INNInputElement.addEventListener('focus', () => {
    INNInputElement.classList.remove('input-error');
    INNInputSubtitleElement.textContent = 'Для таможенного оформления';
    INNInputSubtitleElement.classList.add('black');
});






const store = createStore(rootReducer,{
    diliveryType: 'point', // 'courier' or 'point'
    paymentIsChecked: false,
    allIsChecked: false,
    totalPrice: 0,
    oldTotalPrice: 0,
    totalCount: 0,
    totalSale: 0,
    items:[
        {
        count: 1,
        price: 522,
        oldPrice: 674,
        isChecked: true,
        left: 12,
        
    },
    {
        count: 199,
        price: 1007,
        oldPrice: 1107,
        isChecked: true,
        left: 202,
    },
    {
        count: 1,
        price: 493,
        oldPrice: 513,
        isChecked: false,
        left: 5,
    },
]
});


[closePaymentModalButton,paymentSubmitButton].forEach(button => button.addEventListener('click', () => {
    paymentModalElement.classList.toggle('hidden');
}));

[closeDeliveryModalButton,deliverySubmitButton].forEach(button => button.addEventListener('click', () => {
    deliveryModalElement.classList.toggle('hidden');
}));


editPaymentModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        paymentModalElement.classList.toggle('hidden');
    });
});

editDeliveryModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        deliveryModalElement.classList.toggle('hidden');
    });
});




deliveryOptionCourierCheckboxElements.addEventListener('click', () => {
    store.dispatch({type:actionTypes.CHANGE_DELIVERY_TYPE, deliveryType: 'courier'});
});

deliveryOptionPointCheckboxElements.addEventListener('click', () => {
    store.dispatch({type:actionTypes.CHANGE_DELIVERY_TYPE, deliveryType: 'point'});
});


counterElements.forEach((counterElement, index) => {
    counterElement.children[0].addEventListener('click', () => {
        store.dispatch({type: actionTypes.DECREMENT_COUNTER, index});
        store.dispatch({type: actionTypes.CALCULATE_TOTAL});
    });
    counterElement.children[2].addEventListener('click', () => {
        store.dispatch({type: actionTypes.INCREMENT_COUNTER, index});
        store.dispatch({type: actionTypes.CALCULATE_TOTAL});
    });
    
});

itemCheckboxElements.forEach((itemCheckboxElement, index) => {
    itemCheckboxElement.addEventListener('click', () => {
        store.dispatch({type: actionTypes.CHECK_ITEM, index});
        store.dispatch({type: actionTypes.CALCULATE_TOTAL});
    });
});

allItemsCkeckboxElement.addEventListener('click', () => {
    store.dispatch({type: actionTypes.CKECK_ALL_ITEMS});
    store.dispatch({type: actionTypes.CALCULATE_TOTAL});

});

paymentCheckboxElement.addEventListener('click', () => {
    store.dispatch({type: actionTypes.CHECK_PAYMENT});
});


//update
store.subscribe(() => {
    const state = store.getState();
    counterElements.forEach((counterElement, index) => {
        counterElement.children[1].textContent = state.items[index].count;
        if(state.items[index].count === 1) {
            counterElement.children[0].disabled = true;
        } else {
            counterElement.children[0].disabled = false;
        }

        if(state.items[index].count === state.items[index].left) {
            counterElement.children[2].disabled = true;
        }
        else {
            counterElement.children[2].disabled = false;
        }
    });

    counterNumberElements.forEach((counterNumberElement, index) => {
        counterNumberElement.textContent = state.items[index].left;
    });

    priceValueElements.forEach((priceValueElement, index) => {
        priceValueElement.textContent = formatPrice(state.items[index].price * state.items[index].count);
    });

    oldPriceValueElements.forEach((oldPriceValueElement, index) => {
        oldPriceValueElement.textContent = formatPrice( state.items[index].oldPrice * state.items[index].count);
    });

    itemCheckboxElements.forEach((itemCheckboxElement, index) => {
        itemCheckboxElement.checked = state.items[index].isChecked;
    });

    totalPriceElement.textContent = formatPrice(state.totalPrice);
    oldTotalPriceElement.textContent = formatPrice(state.oldTotalPrice);
    itemItemCountElement.textContent = state.totalCount;
    totalSaleElement.textContent = formatPrice(state.totalSale);
    cartTotalcountElement.textContent = state.totalCount;
    cartTotalPriceElement.textContent = formatPrice(state.totalPrice);
    paymentButtonElement.textContent =  state.paymentIsChecked ? `Оплатить ${formatPrice(state.totalPrice)} сом` : 'Заказать';
    
    if(state.deliveryType === 'point') {
        deliveryOptionPointElements.classList.remove('hide');
        deliveryOptionCourierElements.classList.add('hide');
    }

    if(state.deliveryType === 'courier') {
        deliveryOptionPointElements.classList.add('hide');
        deliveryOptionCourierElements.classList.remove('hide');
    }


    
});

store.dispatch({type: 'INIT'});
store.dispatch({type: actionTypes.CALCULATE_TOTAL});


function formatPrice(price) {
    return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}


