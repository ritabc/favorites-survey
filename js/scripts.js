$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var vacationArray = [];

    var firstSpot = $("input#vaca1").val();
    var secondSpot = $("input#vaca2").val();
    var thirdSpot = $("input#vaca3").val();
    var fourthSpot = $("input#vaca4").val();

    console.log(vacationArray);

    vacationArray.push(firstSpot);
    vacationArray.push(secondSpot);
    vacationArray.push(thirdSpot);
    vacationArray.push(fourthSpot);

    console.log(vacationArray);

    var newArray = [];
    newArray.push(vacationArray[1]);
    console.log(newArray);
    newArray.push(vacationArray[0]);
    newArray.push(vacationArray[2]);


    console.log("newArray is: " + newArray);


    //$("ul#favlist").append("<li>" + newArray + "</li>");
    $("ul#favlist").append("<li>" + newArray[0] + "</li>");
    $("ul#favlist").append("<li>" + newArray[1] + "</li>");
    $("ul#favlist").append("<li>" + newArray[2] + "</li>");


    // newArray.push(vacationArray[0]);
    // newArray.push(vacationArray[2]);
    //
    //
    // newArray.append("li")

  });
});
