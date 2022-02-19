import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
    rand( min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    formatarCPF(cpf) {
        
        return (
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11) 
         );
            
    }

    geraNovoCPF() {
        const cpfSemDigitos = this.rand();
        console.log(cpfSemDigitos)

        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        const novoCPF = cpfSemDigitos + digito1 + digito2

        return this.formatarCPF(novoCPF);
    }

}
