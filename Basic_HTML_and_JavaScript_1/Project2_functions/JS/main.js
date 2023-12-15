
   

    function change (){
    var result = document.getElementById('result')
    result.innerHTML = "Red is a very hot color. Its associated with fire, violence, and warfare. Its also associated with love and passion. In history, its been associated with both the Devil and Cupid. Red can actually have a physical effect on people, raising blood pressure and respiration rates. Its been shown to enhance human metabolism, too."
    result.style.color = "red";
    }

    function confirm (){
        var other = document.getElementById('other')
        other.innerHTML = "The color of power and sophistication. Black is an incredibly strong and intimidating color that exudes authority and makes us feel secure and protected. Often seen at formal and prestigious events, this mysterious marvel arouses and seduces our senses with its elegance and sexiness."
    }

    function myfunction(){
        var sentence = "Hello, there!";
        sentence += " You're so beautiful today!";
        document.getElementById("concatenate").innerHTML= sentence;
       
    }