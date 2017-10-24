
/*la ruta donde inicia la aplicacion: inicia la vista(views) inicio.jade*/

module.exports = {

	inicio : function(req, res, next){
		return res.render('inicio');
	}
}
