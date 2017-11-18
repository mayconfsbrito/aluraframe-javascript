class DateHelper {

	constructor() {
		throw new Error('Você não pode instanciar esta classe');
	}

	static textoParaData(texto) {
		return new Date(
			...texto.split('-').map((item, indice) => item - (indice % 2))
		);
	}

	static dataParaTexto(data) {
		return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;
	}
}