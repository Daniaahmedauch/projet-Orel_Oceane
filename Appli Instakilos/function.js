//ajouter une image
function ajoutImg()
{

}



//supprimer une image
function supprImg()
{

}



//ajouter un commentaire
function ajoutCom()
{
	var input = $(/*id de l'input commentaire*/).val();
	$(/*id de la div commentaire*/).append("<div>"+input+"<button>"+"delete"+"</button></div>");
	$(/*id de l'input commentaire*/).val('');
}


function supprCom()
{
	$(this).parent().remove();
	// var	elementSuppr = $(this).attr('id');
	// var test = $("#delete").attr("id");
	// console.log(test);
	// console.log(elementSuppr);
}

//compteur de like
function like()
{
	var cmt = 0;
	var doubleClick = 0;
	console.log("début function");
	doubleClick++;
	console.log("doubleClick = "+doubleClick);
	if (doubleClick == 2)
	{
		cmt--;
		console.log("cmt = "+cmt);
		doubleClick = 0;
		console.log("doubleClick = "+doubleClick);
	}
	else
	{
		cmt++;
		
		console.log("cmt = "+cmt);
		//afficher cmt a coté du logo
		
		console.log("doubleClick = "+doubleClick)
	}	
	console.log("fin function");
}

//afficher le manuel d'utilisation
function aide()
{
	//window.open ?
};
