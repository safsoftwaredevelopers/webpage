function validate() {
    var matricno=document.getElementById("matricno").value;
    var password=document.getElementById("password").value;

    
    

    if (matricno=="200753" && password=="light"){
        alert("Welcome dear, Ogunyemi Albert Anu");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
        
        return false;
    }

    else if (matricno=="guest" && password=="guest"){
        alert("Welcome guest");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
    }

    else if (matricno=="200453" && password=="taiwo"){
        alert("Welcome dear, Taiwo");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
    }


















    else {
        alert("Wrong credentials");
    }








}