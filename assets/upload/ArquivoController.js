class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        this._criarArquivo();
        //cria um Arquivo com as suas propriedades;
        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }

    _criarArquivo() {
        let infoArquivo = this._inputDados
            .value
            .toUpperCase()
            .split('/').
        let arquivo = new Arquivo(...infoArquivo);
        console.log(arquivo);

        return arquivo;
    }
}