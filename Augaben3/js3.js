function NeuesFenster() {
	alert('pr')
	window.open("subscribe.html","neuesfenster", "width=300,height=400");
}


function changeColor(){
	if(document.body.style.backgroundColor == 'red'){
		document.body.style.backgroundColor = 'white'
		document.body.style.color = 'black'
	}else if(document.body.style.backgroundColor == 'white'){
		document.body.style.backgroundColor = 'yellow'
		document.body.style.color = 'green' 
	}else{
		document.body.style.backgroundColor = 'red'
		document.body.style.color = 'white'
	}
}