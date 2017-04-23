interface LangText {
	previewBtn: string;
	goToFilter: string;
	KeepImg: string;
	retake: string;
	keepFilter: string;
	cancelFilter: string;
	printBtn: string;
	startOverBtn: string;
	[key: string]: string;
};

interface LangType{
	EN: LangText;
	ES: LangText;
	TYPES: LangText;
	[key: string]: LangText;
};

export let LANG: LangType = {
	'EN': {
		previewBtn: 'Take Picture',
		goToFilter: 'Add Filters',
		KeepImg: 'Keep Picture',
		retake: 'Retake Picture',
		keepFilter: 'Accept',
		cancelFilter: 'Cancel',
		printBtn: 'Print',
		startOverBtn: 'Start Over'
	},
	'ES': {
		previewBtn: 'Tomar Foto',
		goToFilter: 'Poner Filtros',
		KeepImg: 'Aceptar Foto',
		retake: 'Retomar Foto',
		keepFilter: 'Aceptar',
		cancelFilter: 'Cancelar',
		printBtn: 'Imprimir',
		startOverBtn: 'Comenzar de Nuevo'
	},
	'TYPES': {
		previewBtn: 'previewBtn',
		goToFilter: 'goToFilter',
		KeepImg: 'KeepImg',
		retake: 'retake',
		keepFilter: 'keepFilter',
		cancelFilter: 'cancelFilter',
		printBtn: 'printBtn',
		startOverBtn: 'startOverBtn'
	}
};
