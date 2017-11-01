console.log(" ");
console.log ("Pythagorean Triple Calculation");
console.log(" ");

//use the following formula to find PT
//2m, m^2 + 1, m^2 -1, m > 1
//and then within that formula, multiples of each variation, so (a*2) + (b*2) + (c*2), (a*3) + (b*3) + (c*3), etc.
ptFound = false;
doneDo = false;
chkNum = 2;
sum = 0;
endA = 0;
endB = 0;
endC = 0;
searchNum = 1000;


do {
  
  a = 2 * chkNum;
  b = (chkNum * chkNum) - 1;
  c = (chkNum * chkNum) + 1
  
  sum = a + b + c;
  console.log ("Checking numbers (a, b c) " + a + ", " + b + ", " + c + " and sum is " + sum);
  
  //if sum is 1000 then end
  if (sum === searchNum) {
	  ptFound = true;
    endA = a;
    endB = b;
    endB = c;

  //if number checking for is greater than 23 then end
  } else if (sum > searchNum) {

    doneDo = true;

  //otherwise do multiples of a, b, c until sum is over 1000 or 1000 has been found
  } else {

    inSum = 0;
    multiple = 2;
    
    //do multiples of the current set to see if the number exists
    do {
      
      inA = a * multiple;
      inB = b * multiple;
      inC = c * multiple;
      inSum = inA + inB + inC;
      
      console.log (" -- Checking numbers (a, b c) " + inA + ", " + inB + ", " + inC + " and sum is " + inSum);
      
      //if sum is 1000 then end
      if (inSum === searchNum) {
        ptFound = true;
        endA = inA;
        endB = inB;
        endC = inC;

			//otherwise increase the multiple
      } else {
        multiple++;

      }
      
    } while (ptFound !== true && inSum <= searchNum)
    

    //increae the checking number
	  chkNum++;
  }


} while (ptFound !== true && doneDo !== true)
  
console.log(" ");

//output results
if (ptFound) { 
  console.log("Found Pythageron Triple that sums to " + searchNum + ". Values are (a, b, c) " + endA + ", " + endB + ", " + endC + ".");
  
} else {
  console.log("No Pythageron Triple that sums to " + searchNum + ".");
  
  
}
console.log(" ");