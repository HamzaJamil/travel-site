import $ from 'jquery'

class ModalBox {
    constructor() {
        this.openModalBtn = $('.open-modal');
        this.modalBox = $('.modal-box');
        this.closeModalBtn = $('.modal-box__close');

        this.modalEvents();
    }

    modalEvents() {
        // open the modal-box
        this.openModalBtn.click(this.openModal.bind(this));

        // close the modal-box
        this.closeModalBtn.click(this.closeModal.bind(this));

        //Push any key to close modal-box
        $(document).keyup(this.keyPressHandler.bind(this))
    }

    openModal() {
        this.modalBox.addClass('modal-box--visible');
        return false
    }

    closeModal() {
        this.modalBox.removeClass('modal-box--visible');

    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal()
        }
    }


}
console.log("hello");

export default ModalBox