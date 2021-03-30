let button=document.getElementById("button")
button.addEventListener('click',function(){
    let img_element=document.getElementById('image');
    let imag=document.createElement('img');
    imag.src="https://www.todayshospitalist.com/wp-content/uploads/2008/10/happybirthday.jpg";
    img_element.append(imag);
})