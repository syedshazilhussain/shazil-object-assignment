var arr = [
    {
        name: "Shazil Zaidi",
        rollnumber: "0231",
        age: 11,  
    },
    {
        name: "Akif Zaidi",
        rollnumber: "0232",
        age: 12,  
    },
    {
        name: "Ayaan Zaidi",
        rollnumber: "0233",
        age: 13,  
    },
    {
        name: "Hudaib Zaidi",
        rollnumber: "0234",
        age: 14,  
    },
    {
        name: "Qazim",
        rollnumber: "0235",
        age: 15,  
    },
    {
        name: "Faizi",
        rollnumber: "0236",
        age: 16,  
    },
    {
        name: "Mustafa",
        rollnumber: "0237",
        age: 17,  
    },
    {
        name: "Ebad",
        rollnumber: "0238",
        age: 18,  
    },
    {
        name: "Wali",
        rollnumber: "0239",
        age: 19,  
    },
    {
        name: "Subhan",
        rollnumber: "02310",
        age: 20,  
    }
];

var objInp = document.getElementById("objInput");
var objPera = document.getElementById("objPera");
var objPera2 = document.getElementById("objPera2");
var objPera3 = document.getElementById("objPera3");

function abc(){
    for(i = 0; i < arr.length; i++){
        if(objInp.value == arr[i].name || objInp.value == arr[i].rollnumber || objInp.value == arr[i].age ){
            objPera.innerHTML = arr[i].name;
            objPera3.innerHTML = arr[i].age;
            objPera2.innerHTML = arr[i].rollnumber;
            objInp.value  = "";
        }
    }
}
