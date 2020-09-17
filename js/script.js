//* ------- CÓDIGO DE CRIAÇÃO DOS BOTÕES NAVBAR -------*/
document.getElementById('navbar').insertAdjacentHTML(
	/*html*/
	'beforeend',
	`
	<div class="N0">Componentes Individuais</div>
	${componentes.map(mapNav).join('')}

	<div class="N0">Equipamentos</div>
	${equipamentos.map(mapNav).join('')}
	`
)

function mapNav(obj) {
	/*html*/
	return `<button class="tablink N1" onclick="openTab(event, '${obj.ID}')"> ${obj.navlink} </button>`
}




//* ------- INÍCIO DO CÓDIGO DE CRIAÇÃO DAS "SUB PÁGINAS" (DIVS) -------*/
document.getElementById('div-content').insertAdjacentHTML(
	/*html*/
	'beforeend',
	`
		${componentes.map(mapTemplate).join('')}	
		${equipamentos.map(mapTemplate).join('')}
		`
)

function mapTemplate(obj) {
	/*html*/
	return `
	<div id="${obj.ID}" class="tabcontent">


		<!-- TÍTULO -->
		<div class="box1">
			<div class="box-title">
				${obj.titulo}
			</div>
			<div class="box-content description">
				<div class="box-content-text">
					<div class="square-vr"></div>
					<p>${obj.descricao}</p>	
				</div>
				<div class="box-content-vr">
					<img src="./img/${obj.vr}/0_0.png" width="500" height="325"
					class="reel"
					data-speed="0"
					data-cw="true"
					data-cursor="default"
					data-revolution=600
					data-images="./img/${obj.vr}/0_#.png|0..23">
				</div>
			</div>
		</div>


		<!-- FUNCIONAMENTO -->
		<div class="box1">
			<div class="box-title">
				Funcionamento
			</div>
			<div class="box-content functioning">
				<div class="square1"></div>
				<p>${obj.funcionamento}</p>
			</div>
			<div class="img-ctnr">
				${obj.img.map(mapListImg).join('')}
			</div>
		</div>


		<!-- DETALHAMENTO -->
		<div class="box1">
			<div class="box-title">
				Detalhamento
			</div>
			<div class="box-content detailing">
				<div class="box-content-sketch">
					<img class="img-sketch" src="./img/${obj.croqui}" alt="" /> 
				</div>
				<div class="box-content-list">
					${obj.detalhamento.join('')}
				</div>
				
			</div>
		</div>
	</div>
	`
}

function mapListImg(obj) {
	// <div class="img-ctnr"><img src="./img/${obj}" alt="" /></div>
	/*html*/
	return `
			<div class="slide">
				<img src="./img/${obj}" alt="" />
			</div>
	`
}

/* 




Exemplo interessante de como escrever uma função de parâmetro único de forma bem minimalista:
<h4>Favorite Foods</h4>
<ul class="foods-list">
${foods.map(food => `<li>${food}</li>`).join("")}
</ul>





 */

//* ------------------------- ADICIONAR VR ÀS PÁGINAS ------------------------ */

//* ------- EVENTOS DE CLIQUE NO MOUSE: MOSTRAR SUB PÁGINA ------- */
var i, tabcontent, tablinks
function openTab(evt, tabName) {
	//* Ocultar todos class="tabcontent"
	$('.tabcontent').hide()

	//* Coletar todos class="tablinks" e remover class="active"
	$('.tablink').removeClass('active')

	//* Mostrar a div e adicionar class="active"
	evt.currentTarget.className += ' active'
	document.getElementById(tabName).style.display = 'block'

	//* Rolar para o tpo da página
	$('html, body').animate({ scrollTop: 0 }, 'slow')
}

//* ------- INÍCIO DO CARREGAMENTO ------- */
//> Ocultar todos class="tabcontent" no início do carregamento
$('.tabcontent').hide()
$('#aempresa').show()
$('#aempresa, #btn-aempresa').addClass('active')
$('html, body').animate({ scrollTop: 0 }, 'slow')

