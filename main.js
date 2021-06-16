name_student=[];
var display_student=[];

function submit() {
    for(var j=1;j<=4;j++) {
        var name=document.getElementById("name_of_the_student_"+j).value;
        name_student.push(name);
    }
    console.log(name_student);
    for(var k=0;k<4;k++) {
        display_student.push("<h4>"+name_student[k]+"</h4>");
      
    }
    console.log(display_student);
    document.getElementById("display_name_with_commas").innerHTML=display_student;
    var remove_comma=display_student.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting() {
    name_student.sort();
    var display_student_sorting=[];
    for(var k=0;k<4;k++) {
        display_student_sorting.push("<h4>"+name_student[k]+"</h4>");
      
    }
    var remove_comma=display_student_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}