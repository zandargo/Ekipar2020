const componentes = [
	{
		compID: "aquecedor1",
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
	}
];

//Componentes
// document
// 	.getElementById("div-content")
// 	.insertAdjacentElement(
// 		"beforeend", ${componentes.map(mapTemplate).join("")});

console.log(componentes.length);

function mapTemplate(obj) {
	return `
	<div id="${obj.compID}" class="tabcontent">
		<h1>${obj.titulo}</h1>
	</div>
	`;
}

//  <div class="animal">
//  <img class="pet-photo" src="${pet.photo}">
//  <h2 class="pet-name">${pet.name} <span class="species">(${
// 	pet.species
// })</span></h2>
//  <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
//  ${pet.favFoods ? foods(pet.favFoods) : ""}
//  </div>

//NavLinks
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
