import validator from "validator";
export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    init(){
        this.event();
    }
    event(){
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e)
        });
    }
    validate(e){
        const nomeInput = document.querySelector('input[name="nome"]');
        const emailInput = document.querySelector('input[name="email"]');
        const telefoneInput = document.querySelector('input[name="telefone"]');
        let errors = false;

        if(!validator.isEmail(emailInput.value) && !telefoneInput.value) {
            alert('é necessario ter pelo menos o email ou o contato');
            errors = true;
        }
        if(!nomeInput.value){
            alert('Nome não pode ser vazio');
            errors = true;
        }
        if(errors === false) e.target.submit();
    }
}