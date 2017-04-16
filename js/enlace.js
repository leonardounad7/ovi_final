$(document).ready(function(e) {
//boton inicio///	
$('#inicio').click(function(event){	
	event.preventDefault();
	cargarimagenloader('.imagenes');
$('.imagenes').html('<p class="tlt">Inicio</p>')
$('.imagenes').css({'color':'#FFFFFF','font-size':'1em','background':'#1D70B7','margin-bottom':'10px'})
cargarimagenloader('.image_static');
$.post('cursos/programacion_web_1/inicio/inicio.html',{},function(cargo){$('.image_static').html(cargo)});
});
//boton cursos//
$('#cursos').click(function(event){	
	event.preventDefault();
	cargarimagenloader('.imagenes');
$('.imagenes').html('<p class="tlt">Programaci&oacute;n Web</p>')
$('.imagenes').css({'color':'#FFFFFF','font-size':'1em','background':'#1D70B7','margin-bottom':'10px'})
cargarimagenloader('.image_static');
$.post('cursos/programacion_web_1/pre_contenido.html',{},function(cargo){$('.image_static').html(cargo)});
});
//boton lecturas//
$('#lecturas').click(function(event){	
	event.preventDefault();
	cargarimagenloader('.imagenes');
$('.imagenes').html('<p class="tlt">Lecturas</p>')
$('.imagenes').css({'color':'#FFFFFF','font-size':'1em','background':'#1D70B7','margin-bottom':'10px'})
cargarimagenloader('.image_static');
$.post('cursos/programacion_web_1/lecturas/pre_contenido.html',{},function(cargo){$('.image_static').html(cargo)});
});
//boton actividades//
$('#actividades').click(function(event){	
	event.preventDefault();
	cargarimagenloader('.imagenes');
$('.imagenes').html('<p class="tlt">Actividades</p>')
$('.imagenes').css({'color':'#FFFFFF','font-size':'1em','background':'#1D70B7','margin-bottom':'10px'})
cargarimagenloader('.image_static');
$.post('cursos/programacion_web_1/actividades/actividades.html',{},function(cargo){$('.image_static').html(cargo)});
});

//boton autor//
$('#autor').click(function(event){	
	event.preventDefault();
	cargarimagenloader('.imagenes');
$('.imagenes').html('<p class="tlt">Autores</p>')
$('.imagenes').css({'color':'#FFFFFF','font-size':'1em','background':'#1D70B7','margin-bottom':'10px'})
cargarimagenloader('.image_static');
$.post('cursos/programacion_web_1/autores/autores.html',{},function(cargo){$('.image_static').html(cargo)});
});
//boton comunidad//
$("#community").click(function(event) {
	url="https://twitter.com/universidadunad?lang=es";
window.open(url, '_blank');
      return false;
   });
});