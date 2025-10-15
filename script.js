function home() {
    window.location.href = "index.html";
}

function submit() {
    var hobby = document.getElementById("hobby");
    var new_div = document.getElementById("yours");
    if (hobby.value != "") {
        new_div.textContent = "Another one of your hobbies is " + hobby.value + "!";
        hobby.placeholder = "Manually enter one too!";
    }
    else hobby.placeholder = "Invalid input, try again :(";
    
}