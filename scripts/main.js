let button=document.querySelector('button');
let myHeading=document.querySelector('h1');
count=0;

if(!localStorage.getItem('name')){
	setUserName();
}else{
	let storedName=localStorage.getItem(('name'));
	myHeading.textContent=storedName;
}

function setUserName(){
	let myName=prompt('来者何人？:');
	if(myName==="李政"){
		localStorage.setItem('name',myName);
		myHeading.textContent="晓璐超喜欢"+myName;
	}else if(myName==="晓璐"){
		localStorage.setItem('name',myName);
		myHeading.textContent="李政超喜欢"+myName;
	}else if(!myName||myName===null){
		alert("别放弃，再试一次吖~");
		count++;
		setUserName();
	}else{
		count++;
		if(count<=2){
			alert("错了，再猜一下！（~_~)");
		    setUserName();
		}else{
			alert("笨蛋！就俩个字（~_~)");
			setUserName();
		}
		
	}
}

	
button.onclick=function(){
	setUserName();
}
let myImage=document.querySelector('img')
myImage.ondblclick=function(){
	let mySrc=myImage.getAttribute('src');
	if(mySrc==='images/1.jpg')
	myImage.setAttribute('src','images/2.jpg');
	else if(mySrc==='images/2.jpg')
	myImage.setAttribute('src','images/3.jpg');
	else if(mySrc==='images/3.jpg')
	myImage.setAttribute('src','images/1.jpg');
};


// let myName;
// myName="李政";