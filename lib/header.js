function openf()
    {
        document.getElementById("list").style.height='60vh';
        document.getElementById("header").style.backgroundColor='black';
        document.getElementById("closebtn").style.display='inline';
        document.getElementById("openbtn").style.display='none';     
    }
function closef()
    {
        document.getElementById("list").style.height='0px';
        document.getElementById("header").style.backgroundColor='rgba(0, 0, 0, 0.500)';
        document.getElementById("openbtn").style.display='inline'; 
        document.getElementById("closebtn").style.display='none';
    }
