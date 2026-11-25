// Matrimony Software Start

let age = 21;
let job = true;
let area = "dhaka";

if (age >= 21) {
  console.log("You are adult");
  if (job === true) {
    console.log("Your are Employed");
    if (area === "dhaka") {
      console.log("You are Selected");
    } else {
      console.log("Your are not Selected");
    }
  } else {
    console.log("Your are Unemployed");
  }
} else {
  console.log("Your are under age");
}

// Matrimony Software End

// Result Grade Start

let num = 33;

if (num < 1 || num > 100) {
  console.log("Enter a valid Number");
}

else if (num >= 1 && num < 33) {
  console.log("You are failed");

}

else if (num >= 33 && num < 40) {
  console.log("You Got D Grade");

}

else if (num >= 40 && num < 50) {
  console.log("You Got C Grade");

}

else if (num >= 50 && num < 60) {
  console.log("You Got B Grade");

}

else if (num >= 60 && num < 70) {
  console.log("You Got A-");

}

else if (num >= 70 && num < 80) {
  console.log("You Got A Grade");

}

else if (num >= 80 && num <= 100) {
  console.log("Congratulations! You Got A+");

}

// Result Grade End
//Age Function Start

let boyos = 21;

if (boyos < 0) {
  console.log("enter a valid age");

} else if (boyos >= 0 && boyos <= 1) {
  console.log("New Born");

} else if (boyos >= 2 && boyos < 18) {
  console.log("Child");

} else if (boyos >= 18 && boyos < 60) {
  console.log("Adult");

} else if (boyos >= 60) {
  console.log("Old");
}

//Age Function End
function myFunc (){
    console.log("this is function")
}

 myFunc ()