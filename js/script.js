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
					${mapVRsq(obj.vr)}
					<p>${obj.descricao}</p>	
				</div>
				${mapVR(obj.vr)}
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
			
				<div class="flipd">
					<ul class="flip-items">
						${obj.img.map(mapListImg).join('')}
					</ul>
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
					<br>
					<ul>
						${obj.detalhamento.map(mapList).join('')}
					</ul>
				</div>
				
			</div>
		</div>
	</div>
	`
}

function mapListImg(obj, index) {
	// <div class="img-ctnr"><img src="./img/${obj}" alt="" /></div>
	/*html*/
	return `
			<li id="${index+1}"> <img src="./img/${obj}" alt="" /> </li>
	`
}

function mapVR(obj) {
	if (obj != '') {
		/*html*/
		return `
		<div class="box-content-vr">
			<img src="./img/${obj}/0_0.png" width="500" height="325"
			class="reel"
			data-speed="0"
			data-cw="true"
			data-cursor="default"
			data-revolution=600
			data-images="./img/${obj}/0_#.png|0..23">
		</div>
		`
	} else { return '' }
  }

function mapVRsq(obj) { 
	if (obj != '') {
	/*html*/
		return `
		<div class="square-vr"></div>
		`
	} else { return '' }
}


function mapList(obj) { 
	if (obj != '') {
	/*html*/
		return `
		<li>${obj}</li>
		`
	} else { return '' }
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

	//* Redim Img Caroussel
	// $(".flipd").height(800)
	// // $(".flipd").width('100%')
	// $('.flipd ul').css('margin', '0 20px');
	// $('.flipd ul').css('margin', '0 auto');
}

//* ------- INÍCIO DO CARREGAMENTO ------- */
//> Ocultar todos class="tabcontent" no início do carregamento
$('.tabcontent').hide()
$('#aempresa').show()
$('#aempresa, #btn-aempresa').addClass('active')
$('html, body').animate({ scrollTop: 0 }, 'slow')



$(function(){ 
		$(".flipd").flipster({
			style: 'carousel',
			spacing: -0.5,
			autoplay: 3000,

		})
})
	
// $('.flipd').width('75%')
// $('.flipd ul').width('75%')
// $('.flipd ul').width('75%')
