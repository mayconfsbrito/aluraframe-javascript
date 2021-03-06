class ListaNegociacoes {

	constructor(armadilha) {
		this._negociacoes = [];
		this._armadilha = armadilha;
	}

	adiciona(negociacao) {
		this._negociacoes.push(negociacao);
		this._armadilha(this);

		return this;
	}

	esvazia() {
		this._negociacoes = [];
		this._armadilha(this);

		return this;
	}

	get negociacoes() {
		return this._negociacoes;
	}
}