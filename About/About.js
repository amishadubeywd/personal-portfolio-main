AOS.init({offset:0});

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

document.addEventListener('DOMContentLoaded', () => {
    
    const downloadBtn = document.querySelector('.btn button');

   
    downloadBtn.addEventListener('click', () => {
        
        const resumeUrl = './Resume - Amisha Dubey.pdf';
       
        const a = document.createElement('a');
        a.href = resumeUrl;
        a.download = 'Resume - Amisha Dubey.pdf'; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a); 
    });
});