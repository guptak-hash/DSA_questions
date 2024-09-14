let arr=[1, 2, 3, 4, 2, 1, 6, 5]

let arr1 = [];

for (let i = 0; i < arr.length; i++) {
    let isDistinct = true;  

    
    for (let j = 0; j < arr1.length; j++) {
      if (arr[i] === arr[j]) {
        isDistinct = false;  
        break;
      }
    }

   
    if (isDistinct) {
      arr1.push(arr[i]);
    }
  }



let min1 = Infinity
let min2 = Infinity
let min3 = Infinity
let max1 = -Infinity
let max2 = -Infinity
let max3 = -Infinity

let min = []
let max = []

for(i=0; i<=arr1.length-1; i++){
let current = arr1[i]
  if(current<min1){
    min3 = min2
    min2 = min1
    min1 = current
    
  }
  else if(current<=min2){
    min3 = min2
    min2 = current
    
  }
  else if(current<=min3){
    
    min3 = current
    
  }
  if(current>max1){
    max3 = max2
    max2 = max1
    max1 = current
    
  }
  else if(current>max2){
    max3 = max2
    max2 = current
    
  }
  else if(current>max3){
    max3 = current
  }
}


if((min1!==Infinity && min2!==Infinity && min3!==Infinity)&&(min1!==min2 && min2!==min3 && min3!==min1)){
  min.push(min1);
min.push(min2);
min.push(min3);

let bag = ''
for(j=0; j<=2; j++){
  bag = bag + min[j] + ' '
}
console.log(bag);
}
else{
  console.log('Not Possible');
}

if((max1!==-Infinity && max2!==-Infinity && max3!==-Infinity)&&(max1!==max2 && max2!==max3 && max3!==max1)){
  max.push(max3);
max.push(max2);
max.push(max1);

let bag1 = ''
for(j=0; j<=2; j++){
  bag1 = bag1 + max[j] + ' '
}
console.log(bag1);
}
else{
  console.log('Not Possible');
}