function addData(){
    var Name = document.getElementById("Name").value;
    var Ans = document.getElementById("Ans").value;
    var getEmail = localStorage.getItem('userEmail')
    if(getEmail == email ){
        document.write("<h1>User already exists</h1>");
    }
    else{
        localStorage.setItem('userEmail', email);
        localStorage.setItem('Name', name);
        localStorage.userEmail = email;

        localStorage.username = name;

        document.write("<h1>LOgin succesful</h1>");

    }


    
    
        

}