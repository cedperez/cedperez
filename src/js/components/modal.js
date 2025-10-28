// This file implements a modal component for displaying additional information or images in a popup format.

class Modal {
    constructor(modalSelector) {
        this.modal = document.querySelector(modalSelector);
        this.closeButton = this.modal.querySelector('.modal-close');
        this.bindEvents();
    }

    bindEvents() {
        this.closeButton.addEventListener('click', () => this.close());
        window.addEventListener('click', (event) => {
            if (event.target === this.modal) {
                this.close();
            }
        });
    }

    open(content) {
        this.modal.querySelector('.modal-content').innerHTML = content;
        this.modal.classList.add('is-active');
    }

    close() {
        this.modal.classList.remove('is-active');
        this.modal.querySelector('.modal-content').innerHTML = '';
    }
}

export default Modal;