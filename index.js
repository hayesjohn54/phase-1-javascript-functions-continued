// code your solution here
function saturdayFun(basketball = "roller-skate"){
    if ("basketball"){
    return `This Saturday, I want to ${basketball}!`;

}  }

function mondayWork(work = 'go to the office'){
    if("work"){
        return `This Monday, I will ${work}.`;
    }

}

function wrapAdjective(flair = "*"){
    return function (inner = `You are ${flair}!`) {
        return `You are ${flair}${inner}${flair}!`;
    }
}