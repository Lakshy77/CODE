let username=window.prompt("Enter your Username");
let password=window.prompt("Enter your Password");
password=Number(password);

if(username=="admin" && password=="123"){
    window.alert("Auth Successful");
    window.location.href="https://www.google.com";
    
}
else{
    window.alert("Auth Failed");
}