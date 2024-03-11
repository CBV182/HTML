function count(){
    document.getElementById("counting").innerHTML = count();
    function count () {
        var Starting_point = 22;
        function Plus_one() {Starting_point -=2}
        Plus_one();
        return Starting_point;
    }
}