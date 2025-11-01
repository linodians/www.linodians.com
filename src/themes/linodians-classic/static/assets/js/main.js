function toggleMainNav( toggle ){

	nav = document.querySelector( "body > header nav" );
	list = document.querySelector( "body > header nav ul" );

	if( nav.style.display == "none" || nav.style.display == "" ){

		nav.style.display = "block";
	}else{

		nav.style.display = "none";
	}

	event.stopPropagation();
}
