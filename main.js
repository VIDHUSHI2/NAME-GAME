name_student_array=[];
var display_student_array=[];
function submit(){
  for(var j=1;j<=4;j++) {
    var name_student=document.getElementById("name_of_student_"+j).value;
    console.log(name_student);
   
  name_student_array.push(name_student);
  }
  console.log(name_student_array);
 var len_name_array=name_student_array.length;
 console.log(len_name_array);
 for(var k=0;k<len_name_array;k++){
   display_student_array.push("<h4>NAME-  "+name_student_array[k]+"</h4>");
   console.log(display_student_array);
 }
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commas=display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    name_student_array.sort();
  var display_student_array_sort=[];
  var len_name_array_sort=name_student_array.length;
  console.log(len_name_array_sort);
  for(var k=0;k<len_name_array_sort;k++){
    display_student_array_sort.push("<h4>NAME- "+name_student_array[k]+"</h4>");
    console.log(display_student_array_sort);
  }
  var remove_commas_sort=display_student_array_sort.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas_sort;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
