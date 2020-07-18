// Solution:1
function feetToMile(n){
        if(n<=0){
        console.log("Invalid Input")
        }
        else{
        var mile = Math.ceil(n * 0.00018939);
        return mile;
        }
    }
var output = feetToMile(40);
console.log(output); 


// Solution:2
   
function woodCalculator(chair,table,bed){
    var numOfChair = chair * 1;
    var numOfTable = table * 3;
    var numOfBed = bed * 5;
     var totalwood =  numOfChair + numOfTable +numOfBed;
      return totalwood;
} 
  var woodNum = woodCalculator(3,3,3);
  console.log(woodNum,"cu ft");

  // Solution 3:
  function brickCalculator(floor){
  var feet1= 15;
  var feet2= 12;
  var feet3= 10;
        if(floor <= 10){
         var bricks1 = floor * feet1 * 1000;
         return bricks1;
        }
        else if(floor>=11 && floor<=20){
            var bricks1 = floor * feet1 * 1000;
            var bricks2 = floor * feet2 * 1000;
           var total= bricks1 + bricks2;
            return total;
             }     
        else if(floor>20){
            var bricks1 = floor * feet1 * 1000;
            var bricks2 = floor * feet2 * 1000;
           var bricks3 = floor * feet3 * 1000;
           var totalLast = bricks1 + bricks2 + bricks3;
           return totalLast;
    }
}
var result = brickCalculator(7);
console.log(result);

// Solution:4

function tinyFriend(name){
    var tiniest = name[0];
    for(var i=0; i<name.length ; i++){
        var currentName = name[i];
        if(currentName.length< tiniest.length){
            tiniest =currentName;
        }
    }
    return tiniest;
}
    var result = tinyFriend(["micle","ada","tommy","arthur"]);
    console.log(result);

