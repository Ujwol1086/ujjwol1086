function myfunc_btn(){
    var bike = document.getElementById("bike").value;
    if(bike == "Pulsar 150"){
        document.getElementById("pulsar150").style.display= "flex";
        document.getElementById("pulsar150").style.padding = "50px"; 
        document.getElementById("img").style.display = "flex";
    }else{
        document.getElementById("pulsar150").style.display = "none";
        document.getElementById("img").style.display = "none";
    }
    if(bike == "Pulsar NS 160"){
        document.getElementById("ns160").style.display = "flex";
        document.getElementById("ns160").style.padding = "50px"; 
        document.getElementById("img1").style.display = "flex";
    }else{
        document.getElementById("ns160").style.display = "none";
        document.getElementById("img1").style.display = "none";
    }
    if(bike == "Pulsar NS 200"){
        document.getElementById("ns200").style.display= "flex";
        document.getElementById("ns200").style.padding = "50px"; 
        document.getElementById("img2").style.display = "flex";
    }else{
        document.getElementById("ns200").style.display = "none";
        document.getElementById("img2").style.display = "none";
    }
    if(bike == "Dominar 250"){
        document.getElementById("dominar250").style.display = "flex";
        document.getElementById("dominar250").style.padding = "50px"; 
        document.getElementById("img3").style.display = "flex";
    }else{
        document.getElementById("dominar250").style.display = "none";
        document.getElementById("img3").style.display = "none";
    }
    if(bike == "Dominar 400"){
        document.getElementById("dominar400").style.display= "flex";
        document.getElementById("dominar400").style.padding = "50px"; 
        document.getElementById("img4").style.display = "flex";
    }else{
        document.getElementById("dominar400").style.display = "none";
        document.getElementById("img4").style.display = "none";
    }
}