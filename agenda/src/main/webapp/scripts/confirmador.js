/**
 * Confirmar a exclusao de um contato
 * @author Igor Costa de Lima
 * @param idcon
 */

 function confirmar(idcon){
	 let resposta = confirm("Confirmar a exclusão deste contato?")
	 if (resposta === true){
		 //alert(idcon)
		 window.location.href = "delete?idcon=" + idcon
	 }
 }