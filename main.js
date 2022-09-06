 	setInterval(setClock,1000)
    const hourHand=document.querySelector('[ data-hour-hand]')
    const minuteHand=document.querySelector('[ data-minute-hand]')
    const secondHand=document.querySelector('[ data-second-hand]')

 	function setClock() {
 		const currentDate= new Date();
 		const sec=currentDate.getSeconds()/60; 
 		const min=(sec+currentDate.getMinutes())/60;
 		const hour=(min+currentDate.getHours())/12;
 		
 		
 		times();
       



 		setRotate(secondHand,sec)
 		setRotate(minuteHand,min)
 		setRotate(hourHand,hour)

 	}
 	function setRotate(element,rotationRatio){
 		element.style.setProperty('--rotation',rotationRatio*360)
 	}

   function times(){
   		const currentDate= new Date();
   	   
 		let hours = currentDate.getHours();
		if(hours>12)
		{
		    let time=hours-12;
		    document.getElementById("time").innerHTML = time+":" +currentDate.getMinutes()+":"+ currentDate.getSeconds()+" PM";
		}
		else
		{
			document.getElementById("time").innerHTML = hours+":"+currentDate.getMinutes()+":"+ currentDate.getSeconds()+" AM";
		}
		}



setClock()
