var array_students=[];

function submit(){
    var name1 = document.getElementById("nameofstudent1").value;
    var name2 = document.getElementById("nameofstudent2").value;
    var name3 = document.getElementById("nameofstudent3").value;
    var name4 = document.getElementById("nameofstudent4").value;

    array_students.push(name1);
    array_students.push(name2);
    array_students.push(name3);
    array_students.push(name4);

    document.getElementById("display_name").innerHTML=array_students;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    array_students.sort();

    document.getElementById("display_name").innerHTML=array_students;
}