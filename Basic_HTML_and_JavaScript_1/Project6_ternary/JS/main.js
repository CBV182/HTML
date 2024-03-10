function Model_function(){
var height, can_ride;
height = document.getElementById("height").value;
can_ride = (height < 170) ? "You are too short":"You are tall enough";
document.getElementById("model").innerHTML = can_ride + " to be a model.";
}

function dress (brand, Year, Color)
{

    this.dress_brand = brand;
    this.dress_Year = Year;
    this.dress_Color = Color;
}

var Kate = new dress("Gucci", 2021, "red");
var Emma = new dress("Channel",2022, "White and Black");
var Shirley = new dress("Prada", 2020, "blue");

function myfunction() {
    document.getElementById("New_and_This").innerHTML = "Kate wears a beautiful " + Kate.dress_Color + " " + Kate.dress_brand 
    + " dress, manufactured in " + Kate.dress_Year;
}