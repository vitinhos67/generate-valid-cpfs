import GeraCPF from './modules/GeraCPF' 

import './assets/css/style.css';


(function() {
    const exibirCPF = document.querySelector('.cpf-gerado')

    const gerarCPFAleatorio = new GeraCPF()

    exibirCPF.innerHTML = gerarCPFAleatorio.geraNovoCPF()

})();
