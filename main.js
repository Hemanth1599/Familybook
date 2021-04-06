var img= [
    "DSC_3537.JPG",
    "f07da8f4-8670-4369-a585-0c1105ad6594.jfif"
];

var names= [
    "Rathi",
    "Hemanth"
];

var i = 0;
function nextslide() {  
    document.getElementById("Myfam").innerHTML = names[i];
  document.getElementById("Myfamname").src = img[i];
  i++;
}