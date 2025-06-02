// პირველი Promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isTrue = true; 
        if (isTrue) {
            resolve('Condition 1 is true');
        } else {
            reject('Condition 1 is false');
        }
    }, 1000); 
});



// მეორე Promise
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isTrue = true;
        if (isTrue) {
            resolve('Condition 2 is true');
        } else {
            reject('Condition 2 is false');
        }
    }, 2000);
});



// მესამე Promise
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isTrue = true; 
        if (isTrue) {
            resolve('Condition 3 is true');
        } else {
            reject('Condition 3 is false');
        }
    }, 3000); 
});


