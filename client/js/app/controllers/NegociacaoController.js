class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._lista = new ListaNegociacoes();

		this._negociacoesView = new NegociacoesView($('#negociacoesView'));
		this._negociacoesView.update(this._lista);
	}

	adiciona() {
		event.preventDefault();

		this._lista.adiciona(this._criaNegociacao());
		this._negociacoesView.update(this._lista);
		this._inputData.focus();

	}

	_criaNegociacao() {
		let data = DateHelper.textoParaData(this._inputData.value);

		return new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}
}