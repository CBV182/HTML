function Ride_Function(){
var height, can_ride;
height = document.getElementById("height").value;
can_ride = (height < 102) ? "You are too short":"You are tall enough";
document.getElementById("Ride").innerHTML = can_ride + " to ride.";
}