function next(){
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var number_of_images="";
    for(var i=0;i<images.length;i++)
    {number_of_images=number_of_images+images[i]+"<br>"}
    document.getElementById("images").innerHTML=number_of_images;
    var number_of_names="";
    for(var i=0;i<names.length;i++)
    {number_of_names=number_of_names+names[i]+"<br>"}
    document.getElementById("names").innerHTML = number_of_names
}