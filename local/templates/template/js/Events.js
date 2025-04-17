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
                alert("Мы скоро свяжемся с вами.", "Спасибо!");
            } else {
                alert("Произошла ошибка.", data.error);
            }

        }).catch(function (err) {
            alert('Fetch Error :-S', err);
        });
    }

}

export default Events;