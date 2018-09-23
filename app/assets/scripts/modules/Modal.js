class Modal {
    constructor() {
        this.openModalButton = document.querySelectorAll('.open-modal');
        this.modal = document.querySelector('.modal');
        this.closeModalButton = document.querySelector('.modal__close');
        this.events();
        
    }

    events(){
        let that = this;
        // clicking the open modal button
        this.openModalButton[0].addEventListener('click', this.openModal.bind(this));
        this.openModalButton[1].addEventListener('click', this.openModal.bind(this));
        this.openModalButton[2].addEventListener('click', this.openModal.bind(this));

        // clocking the X close modal button
        this.closeModalButton.addEventListener('click', this.closeModal.bind(this));
        // pushes any key
        document.addEventListener('keydown', function(e){
            if(e.key === 'Escape') {
                that.closeModal()
            }
        });

        
    }

    openModal(){
        this.modal.classList.add('modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.classList.remove('modal--is-visible');

    }
}


export default Modal;