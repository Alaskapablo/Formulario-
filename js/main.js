
const clearFormulario = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const isnumber = (number) => /^[0-9]+$/.test(number);

const cepValido = (cep) => cep.lenght = 8 && isnumber(cep);

const pesquisarCep = async() =>{
    clearFormulario();

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const date = await fetch(url);
        const endereco = await date.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado';
            document.getElementById('bairro').value = 'CEP não encontrado';
            document.getElementById('cidade').value = 'CEP não encontrado';
            document.getElementById('estado').value = 'CEP não encontrado';
        }else{
            preencherFormulario(endereco);
        }   
    }else{
        document.getElementById('endereco').value = 'CEP incorreto';
        document.getElementById('bairro').value = 'CEP incorret';
        document.getElementById('cidade').value = 'CEP incorret';
        document.getElementById('estado').value = 'CEP incorret';
    }
    
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);