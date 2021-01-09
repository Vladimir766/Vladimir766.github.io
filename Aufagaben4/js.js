let time = new Date()
let timedom = document.getElementById("time")
let months = ["January","February","March","April","May","June","July","August ","September","October","November","December"]
timedom.innerHTML="Today is: "
timedom.innerHTML+= months[time.getMonth()]+" "
timedom.innerHTML+= time.getDate()+", "
timedom.innerHTML+= time.getFullYear()



neu0 = document.createElement('img')
	
	neu0.src = "1.jpg";

	neu1 = new Image();
	neu1.src = "2.jpg";

	neu2 = new Image();
	neu2.src = "3.jpg";


function tausche(nummer,grafik)   {
    document.images[nummer].src=grafik.src;
}

let imgs = document.querySelectorAll('.special img')
imgs.forEach(function(img){
		img.style.transition = 'all 1s'
		let imgs = ['1.jpg','2.jpg','3.jpg'];
		let colors = ['red','green','yellow']
		let widths = [400,300,500]
		let i =0
		setInterval(()=>{
			img.parentNode.style.backgroundColor=colors[i]
			img.parentNode.style.width=widths[i]+'px'
			img.src = imgs[i]
			i++
			if(i>=imgs.length){
				i=0
			}
			
		},10000)
	})


	



    