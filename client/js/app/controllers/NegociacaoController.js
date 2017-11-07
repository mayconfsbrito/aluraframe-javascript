class NegociacaoController {

	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

	}
	
	adiciona() {
		event.preventDefault();

		let dateHelper = new DateHelper();
		let data = dateHelper.textoParaData(this._inputData.value);

		let negociacao = new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);

		this._inputData.focus();
		console.log(dateHelper.dataParaTexto(data));
	}
}