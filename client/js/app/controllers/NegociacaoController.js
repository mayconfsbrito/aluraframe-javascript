class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._lista = new ListaNegociacoes();

		this._negociacoesView = new NegociacoesView($('#negociacoesView'));
		this._negociacoesView.update(this._lista);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagemView.update(this._mensagem);
	}

	adiciona() {
		event.preventDefault();

		this._lista.adiciona(this._criaNegociacao());

		this._mensagem.texto = 'Negociação adicionada com sucesso';
		this._mensagemView.update(this._mensagem);

		this._negociacoesView.update(this._lista);

		this._limparFormulario();
	}

	_criaNegociacao() {
		let data = DateHelper.textoParaData(this._inputData.value);

		return new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	_limparFormulario() {
		this._inputData.value='';
		this._inputValor.value=0;
		this._inputQuantidade.value=1;
		this._inputData.focus();
	}
}