window.addEventListener('DOMContentLoaded', function () {
    initSliders();
    initValidators();
    initLibs();
});

function initLibs() {

}

/**
 * Initializes the sliders.
 */
function initSliders() {
    // Add code to initialize the sliders here
}

/**
 * Initializes validators for elements with 'data-validate' attribute.
 */
function initValidators() {

}

/**
 * Class representing Events with various event handling methods.
 */
class Events {
    /**
     * Constructor for Events class.
     */
    constructor() {

        this.events = new Set();

        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(`[data-event]`).forEach(i => {
                i.dataset.event.split(',').forEach((event) => {
                    let [eventType, eventName] = event.split('.');

                    if (!this[eventName]) return;

                    this.events.add(eventType);
                });
            });
            this.init();
        });
    }

    /**
     * Initializes event listeners based on event types.
     */
    init() {

        const body = document.querySelector("body");

        this.events.forEach((type) => {

            body.addEventListener(type, (e) => {
                const target = e.target.closest(`[data-event]`);
                if (!target) return;

                target.dataset.event.split(',').forEach((event) => {
                    let [eventType, eventName] = event.split('.');

                    if (type !== eventType || !this[eventName]) return;

                    this[eventName].call(this, e, target);
                });
            });
        });

    }

    /**
     * Adds an item to the cart.
     *
     * @param {Event} e - the event object
     * @param {HTMLElement} elem - the element to add to the cart
     */
    addToCart(e, elem) {
        e.preventDefault();

        fetch('/ajax/addToCart.php', {
            method: 'POST',
            body: elem.dataset.params,
        }).then(response => response.json()).then(function (data) {
            // alert(data.message);
            toastr["success"](data.message);
            BX.onCustomEvent('OnBasketChange');
        }).catch(function (err) {
            alert('Fetch Error :-S', err);
        });
    }

    /**
     * A function to open a search.
     *
     * @param {Object} e - the event object
     * @param {Element} elem - the element to open search for
     * @return {void}
     */
    openSearch(e, elem) {
        e.preventDefault();
        document.querySelector(elem.dataset.target).classList.add('active');
        document.body.classList.add('ovh');
    }

    /**
     * Function to close the search.
     *
     * @param {object} e - the event object
     * @param {object} elem - the element to be closed
     * @return {void}
     */
    closeSearch(e, elem) {
        e.preventDefault();
        document.querySelector(elem.dataset.target).classList.remove('active');
        document.body.classList.remove('ovh');
    }

    /**
     * Add a photo.
     *
     * @param {type} e - description of parameter
     * @param {type} elem - description of parameter
     * @return {type} description of return value
     */
    addPhoto(e, elem) {
        e.preventDefault();

        let rootElem = elem.closest('[data-root]');
        let imagesElem = rootElem.querySelector('[data-images]');
        let files = elem.files;
        let imagesHtml = `<span class="reviews-photos__image">
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="42" height="42" rx="4" fill="#F2F2F2"/>
<path d="M22 28C22 28.7 22.13 29.37 22.35 30H14C12.9 30 12 29.11 12 28V14C12 12.9 12.9 12 14 12H28C29.11 12 30 12.9 30 14V22.35C29.37 22.13 28.7 22 28 22V14H14V28H22ZM22.96 21.29L20.21 24.83L18.25 22.47L15.5 26H22.35C22.75 24.88 23.47 23.91 24.4 23.21L22.96 21.29ZM29 27V24H27V27H24V29H27V32H29V29H32V27H29Z" fill="#9C9C9C"/>
</svg>
                            </span>`;


        imagesElem.innerHTML = '';

        if (files.length > 0) {
            Array.from(files).forEach(file => {
                let reader = new FileReader();
                reader.onload = function (e) {
                    imagesElem.insertAdjacentHTML('beforeend', `<span class="reviews-photos__image">
                                <img src="${e.target.result}">
                            </span>`);
                }
                reader.readAsDataURL(file);
            });
        } else {
            imagesElem.insertAdjacentHTML('beforeend', imagesHtml);
        }


    }

    /**
     * Add a review.
     *
     * @param {Event} e - the event object
     * @param {HTMLFormElement} elem - the form element to submit
     */
    addReview(e, elem) {
        e.preventDefault();

        fetch(elem.action, {
            method: 'POST',
            body: new FormData(elem),
        }).then(response => response.json()).then(data => {
            if (data.status) {
                elem.reset();
                toastr['success'](data.message);
            } else {
                toastr['error'](data.message);
            }
        }).catch(err => {
            alert('Fetch Error :-S', err);
        });
    }

    /**
     * Adds an item to the cart.
     *
     * @param {Event} e - the event object
     * @param {HTMLElement} elem - the element to add to the cart
     */
    addToFavorite(e, elem) {
        e.preventDefault();

        let countObj = document.querySelectorAll('[data-favorite-count]');

        let data = JSON.parse(elem.dataset.params);
        $.ajax({
            dataType: "json",
            type: "POST",
            url: "/ajax/addToFavorite.php",
            data: data,
            success: (data) => {
                if (data.result === 'add') {
                    $(elem).addClass('active');
                    countObj.forEach(i => {
                        i.innerHTML = Number(i.innerHTML) + 1;
                    });

                } else {
                    $(elem).removeClass('active');

                    countObj.forEach(i => {
                        i.innerHTML = Number(i.innerHTML) - 1;
                    });
                }
            }
        });
    }

    /**
     * Sends a form using fetch API and handles the response.
     *
     * @param {Event} e - the event object
     * @param {Element} elem - the form element to be submitted
     */
    sendForm(e, elem) {
        e.preventDefault();

        fetch(elem.action, {
            method: 'POST',
            body: new FormData(elem)
        }).then(response => response.json()).then(function (data) {

            if (data.status) {
                elem.reset();
                toastr["success"]("Мы скоро свяжемся с вами.", "Спасибо!");
            } else {
                toastr["error"](data.error);
            }

        }).catch(function (err) {
            alert('Fetch Error :-S', err);
        });
    }

    /**
     * A function that changes the sort order by making a POST request to the server and reloading the page.
     *
     * @param {Event} e - the event triggering the function
     * @param {HTMLElement} elem - the element related to the event
     * @return {void}
     */
    setCokieWithReload(e, elem) {

        let form = elem.closest('form');

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
        })
            .then(response => response.json())
            .then(function (data) {
                location.reload();
            })
            .catch(function (err) {
                alert('Fetch Error :-S', err);
            });
    }

    openMobileMenu(e, elem) {
        e.preventDefault();
        document.querySelector(".header-mobile").classList.add("active");
        document.querySelector("body").classList.add("fancybox-active");
    }

    closeMobileMenu(e, elem) {
        e.preventDefault();
        document.querySelector(".header-mobile").classList.remove("active");
        document.querySelector("body").classList.remove("fancybox-active");
    }

    openMobileDrop(e, elem) {
        e.preventDefault();
        elem.closest('a').nextElementSibling.classList.add("active");
    }

    backMobileMenu(e, elem) {
        e.preventDefault();
        elem.closest(".header-mobile__drop").classList.remove("active");
    }

    openFilter(e, elem) {
        e.preventDefault();
        document.querySelector(".filter").classList.add("active");
        document.querySelector("body").classList.add("ovh");
    }

    closeFilter(e, elem){
        e.preventDefault();
        document.querySelector(".filter").classList.remove("active");
        document.querySelector("body").classList.remove("ovh");
    };
}

new Events();