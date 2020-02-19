/* ------- LISTA DE COMPONENTES INDIVIDUAIS -------*/
const componentes = [
	{
		ID: "aquecedor1",
		titulo: "AQUECEDOR ESTÁTICO DE CORRENTE",
		descricao:
			"O aquecimento de equipamentos e correntes industriais é uma das operações mais utilizadas em unidades de transformação química. As utilidades industriais mais utilizadas em termos de aquecimento são o valor e o óleo térmico. A grande dificuldade na utilização de vapor de água é a necessidade ocorre do fato de se operar a latas pressões e a possibilidade de ocorrer incrustações por formação de sais nos equipamentos. Ao contrário do que ocorre com a utilização do vapor, as caldeiras movidas a óleo térmico possuem a grande vantagem de se trabalhar a baixas pressões e não necessitar de um grau de segurança tão elevado. Com este intuito, a Ekipar possui sua linha de aquecedores a óleo térmico.",
		funcionamento:
			"O aquecedor por fluxo estático foi projetado para que o fluído a ser aquecido seja bombeado internamente as suas serpentinas e saia já com a temperatura desejada. Este possui um sistema de aquecimento interno no qual o óleo é aquecido. O fluído que deverá receber calor deverá ser bombeado por dentre as serpentinas. Este sistema foi projetado para atender a pequenas unidades pilotos e pesquisas que necessitam de aquecimento controlado.",
		detalhamento: [
			"Equipamento em aço inox AISI 316, chapa de 3/16'', volume de 4L de óleo térmico interno",
			"Aquecimento por resistência elétrica de 2KW",
			"Termopar tipo J destinado ao controle do aquecimento",
			"Indicador de pressão tipo Bourbon",
			"Controlador de temperatura",
			"POP – Procedimento operacional Padrão."
		],
		croqui: "./img/croqui_Aquecedor1.png",
		img: ["img_Aquecedor1.2.png"],
		vr: []
	},
	{
		ID: "aquecedor2",
		titulo: "AQUECEDORES DE CORRENTE POR FLUXO CONTÍNUO",
		descricao:
			"O aquecimento de equipamentos e correntes industriais é uma das operações mais utilizadas em unidades de transformação química. As utilidades industriais mais utilizadas em termos de aquecimento são o valor e o óleo térmico. A grande dificuldade na utilização de vapor de água é a necessidade ocorre do fato de se operar a latas pressões e a possibilidade de ocorrer incrustações por formação de sais nos equipamentos. Ao contrário do que ocorre com a utilização do vapor, as caldeiras movidas a óleo térmico possuem a grande vantagem de se trabalhar a baixas pressões e não necessitar de um grau de segurança tão elevado. Com este intuito, a Ekipar possui sua linha de aquecedores a óleo térmico.",
		funcionamento:
			"O sistema por aquecimento contínuo foi projetado para que o óleo aquecido seja bombeado e enviado a equipamentos que possuem camisas e serpentinas internas. Estes equipamentos característicos da indústria de transformação química. Estes aquecedores para aquecimento de tanques agitados, reatores, trocadores de calor, etc.",
		detalhamento: [
			"Equipamento em aço inox AISI 316, chapa de 3/16'', volume de 20L de óleo térmico interno",
			"Aquecimento por resistência elétrica de 2KW",
			"Bomba de Engrenagem de 1/2 c.v.",
			"Termopar tipo J destinado ao controle do aquecimento",
			"Indicador de pressão tipo Bourbon",
			"Controlador de temperatura",
			"POP – Procedimento operacional Padrão."
		],
		croqui: "./img/croqui_Aquecedor1.png",
		img: ["img_Aquecedor1.2.png"],
		vr: []
	},
	{
		ID: "mini-centrifuga",
		titulo: "MINI CENTRÍFUGA DESTINADA À PURIFICAÇÃO DE ÓLEOS",
		descricao:
			"A remoção de impurezas e purificação de determinados produtos desejados é um etapa crucial em vários processos produtivos. Uma das vertentes bastante estudadas e avaliadas é a purificação de óleos residuais. Este tipo de produto é bastante reutilizado em usinas produtoras de biocombustível. O óleo, antes um rejeito e causador de entupimentos de tubulações, passa a ser uma importante fonte de matéria prima. Pensando nisso, a Ekipar desenvolveu uma mini centrifuga destinada à remoção de impurezas e particulados.",
		funcionamento:
			"A mini centrífuga trabalha utilizando a diferença de densidade e, portanto, da diferença da velocidade terminal das partículas presentes no meio. O sistema possui um cilindro no qual a velocidade de decaimento das partículas provoca a separação dos diferentes elementos presentes no meio.",
		detalhamento: [
			"Tanque de alimentação em aço inox, 60 Litros (OPCIONAL)",
			"Centrífuga em aço carbono e central em alumínio ",
			"Motor de 3 CV",
			"Resistência aquecedora destinada a redução de viscosidade",
			"Inversor de frequência",
			"Sensor de Temperatura",
			"Quadro Elétrico",
			"POP – Procedimento operacional Padrão."
		],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "mixer",
		titulo: "Misturador Estático de Fluxo",
		descricao:
			"As unidades industriais, em sua grande maioria, produzem determinados produtos a partir da mistura e reação de outros constituintes. Muitas das correntes que possuem substâncias sólidas necessitam ser diluídas em tanques agitados. No entanto, no caso de misturas líquidas, a utilização de tanque agitados poderá ter um custo bastante elevado. Uma vez que o efeito da turbulência pode ocasionar a saída de regimes entre laminar e turbulento, a utilização de misturadores estáticos poderá facilitar e reduzir os custos.",
		funcionamento:
			"As misturas de líquidos serão bombeadas ao mixer. Ao entrarem em contato com as pás invertidas, internas ao equipamento, sofrerão efeito da camada limite e bordo de ataque. Com isso, ocorrerá a mudança de regime de laminar para turbulento. Assim, as substancias serão misturadas e enviadas às etapas posteriores das unidades de processamento.",
		detalhamento: [
			"Equipamento com diâmetro variado (de acordo com o processo). Os diâmetros devem variar com a vazão desejada. O equipamento poderá ser em aço inox ou carbono."
		],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "visor-de-fluxo",
		titulo: "Visor de Fluxo Tubular",
		descricao:
			"Em unidades de processamento, grande parte dos reagentes e produtos são transportados por tubulações em aço. Isso ocorre devido à necessidade de manter sob controle as condições operacionais. No entanto, a necessidade de visualizar os fenômenos que ocorrem durante tais processos torna-se algo de extrema importância ao acompanhamento das unidades de transformação. Com isso, a Ekipar possui em sua linha de acessórios visores de fluxo destinados a tubulações de baixas pressões.",
		funcionamento:
			"O visor de fluxo foi projetado para ser instalado em trechos de tubulações ao qual se deseja monitorar o acompanhamento de processos. Para isso, deseja-se nestas circunstancias acompanhar, dentre outras situações, a turbidez de misturas, e mudanças de coloração.",
		detalhamento: [
			"Estrutura em alumio naval, podendo também ser confeccionado em aço inoxidável",
			"Visor em vidro boro silicato",
			"Parafusos para fixação das placas de proteção"
		],
		croqui: "",
		img: [""],
		vr: []
	}
];

/* ------- LISTA DE EQUIMAPENTOS / MÁQUINAS palhação-------*/
const equipamentos = [
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	},
	{
		ID: "",
		titulo: "",
		descricao: "",
		funcionamento: "",
		detalhamento: ["", "", ""],
		croqui: "",
		img: [""],
		vr: []
	}
];
/* ------- LISTA DE COMPONENTES INDIVIDUAIS -------*/

/* ------- INÍCIO DO CÓDIGO DE CRIAÇÃO DAS "SUB PÁGINAS" (DIVS) -------*/

document.getElementById("div-content").insertAdjacentHTML(
	"beforeend",
	`
		${componentes.map(mapTemplate).join("")}
		`
);

function mapTemplate(obj) {
	/*html*/
	return `
	<div id="${obj.ID}" class="tabcontent">
		<div class="box1">
			<div class="box-title">
				${obj.titulo}
			</div>
			<p>${obj.descricao}</p>
		</div>
	</div>
	`;
}

// TODO - Criar função que verifica se o detalhamento é um array de itens, ou apenas um parágrafo

/* 
<h4>Favorite Foods</h4>
<ul class="foods-list">
${foods.map(food => `<li>${food}</li>`).join("")}
</ul>





 */

/* ------- EVENTOS DE CLIQUE NO MOUSE: MOSTRAR SUB PÁGINA ------- */

// Declare all variables
var i, tabcontent, tablinks;
// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
}

function openTab(evt, tabName) {
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}
