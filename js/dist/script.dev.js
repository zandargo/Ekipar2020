"use strict";

//* ------- CÓDIGO DE CRIAÇÃO DOS BOTÕES NAVBAR -------*/
document.getElementById('navbar').insertAdjacentHTML(
/*html*/
'beforeend', "\n\t<div class=\"N0\">Componentes Individuais</div>\n\t".concat(componentes.map(mapNav).join(''), "\n\n\t<div class=\"N0\">Equipamentos</div>\n\t").concat(equipamentos.map(mapNav).join(''), "\n\t"));

function mapNav(obj) {
  /*html*/
  return "<button class=\"tablink N1\" onclick=\"openTab(event, '".concat(obj.ID, "')\"> ").concat(obj.navlink, " </button>");
} //* ------- INÍCIO DO CÓDIGO DE CRIAÇÃO DAS "SUB PÁGINAS" (DIVS) -------*/


document.getElementById('div-content').insertAdjacentHTML(
/*html*/
'beforeend', "\n\t\t".concat(componentes.map(mapTemplate).join(''), "\t\n\t\t").concat(equipamentos.map(mapTemplate).join(''), "\n\t\t"));

function mapTemplate(obj) {
  /*html*/
  return "\n\t<div id=\"".concat(obj.ID, "\" class=\"tabcontent\">\n\n\n\t\t<!-- T\xCDTULO -->\n\t\t<div class=\"box1\">\n\t\t\t<div class=\"box-title\">\n\t\t\t\t").concat(obj.titulo, "\n\t\t\t</div>\n\t\t\t<div class=\"box-content description\">\n\t\t\t\t<div class=\"box-content-text\">\n\t\t\t\t\t<div class=\"square-vr\"></div>\n\t\t\t\t\t<p>").concat(obj.descricao, "</p>\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"box-content-vr\">\n\t\t\t\t\t<img src=\"./img/").concat(obj.vr, "/0_0.png\" width=\"500\" height=\"325\"\n\t\t\t\t\tclass=\"reel\"\n\t\t\t\t\tdata-speed=\"0\"\n\t\t\t\t\tdata-cw=\"true\"\n\t\t\t\t\tdata-cursor=\"default\"\n\t\t\t\t\tdata-revolution=600\n\t\t\t\t\tdata-images=\"./img/").concat(obj.vr, "/0_#.png|0..23\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<!-- FUNCIONAMENTO -->\n\t\t<div class=\"box1\">\n\t\t\t<div class=\"box-title\">\n\t\t\t\tFuncionamento\n\t\t\t</div>\n\t\t\t<div class=\"box-content functioning\">\n\t\t\t\t<div class=\"square1\"></div>\n\t\t\t\t<p>").concat(obj.funcionamento, "</p>\n\t\t\t</div>\n\t\t\t<div class=\"img-ctnr\">\n\t\t\t\t").concat(obj.img.map(mapListImg).join(''), "\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<!-- DETALHAMENTO -->\n\t\t<div class=\"box1\">\n\t\t\t<div class=\"box-title\">\n\t\t\t\tDetalhamento\n\t\t\t</div>\n\t\t\t<div class=\"box-content detailing\">\n\t\t\t\t<div class=\"box-content-sketch\">\n\t\t\t\t\t<img class=\"img-sketch\" src=\"./img/").concat(obj.croqui, "\" alt=\"\" /> \n\t\t\t\t</div>\n\t\t\t\t<div class=\"box-content-list\">\n\t\t\t\t\t").concat(obj.detalhamento.join(''), "\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t");
}

function mapListImg(obj) {
  // <div class="img-ctnr"><img src="./img/${obj}" alt="" /></div>

  /*html*/
  return "\n\t\t\t<div class=\"slide\">\n\t\t\t\t<img src=\"./img/".concat(obj, "\" alt=\"\" />\n\t\t\t</div>\n\t");
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


var i, tabcontent, tablinks;

function openTab(evt, tabName) {
  //* Ocultar todos class="tabcontent"
  $('.tabcontent').hide(); //* Coletar todos class="tablinks" e remover class="active"

  $('.tablink').removeClass('active'); //* Mostrar a div e adicionar class="active"

  evt.currentTarget.className += ' active';
  document.getElementById(tabName).style.display = 'block'; //* Rolar para o tpo da página

  $('html, body').animate({
    scrollTop: 0
  }, 'slow');
} //* ------- INÍCIO DO CARREGAMENTO ------- */
//> Ocultar todos class="tabcontent" no início do carregamento


$('.tabcontent').hide();
$('#aempresa').show();
$('#aempresa, #btn-aempresa').addClass('active');
$('html, body').animate({
  scrollTop: 0
}, 'slow');