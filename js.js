//Условные операторы
//Задание 1\
/*
function myFunction (a, b) {
  let result;
  if (a % 2 === 0) {
    result = a * b
  } else {
    result = a + b
  }
  console.log(result);
}
myFunction(5,3);
//Задание 2
function findQuarter (x,y) {
  if (y === 0) {
    console.log("Точка принадлежит оси координат y");
  } else if (x === 0) {
    if (y === 0) {
      console.log("Точка принадлежит оси координат x и y");
    } else {
      console.log("Точка принадлежит оси координат x");
    }
  } else if (x < 0 ) {
    if (y > 0) {
      console.log("Точка принадлежит 1-й четверти");
    } else if (y < 0) {
      console.log("Точка принадлежит 3-й четверти");
    }
  } else if (x > 0) {
    if (y > 0) {
      console.log("Точка принадлежит 2-й четверти");
    } else if (y < 0) {
      console.log("Точка принадлежит 4-й четверти");
    }
  }
}
findQuarter(0,40);
//Задание 3
let array = [10,-1,2,3,-34,11];
function sumPositive (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  console.log(result);
}
sumPositive(array);
//Задание 4
function findMax(a,b,c) {
  console.log(Math.max((a*b*c), (a+b+c))+3)
}
findMax(1,1,3)

*/
//Циклы
//Задание 1
function myFunction (a,b) {
  let numberOfEvenNumbers = 0;
  let sumOfEvenNumbers = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      numberOfEvenNumbers++;
      sumOfEvenNumbers += i;
    }
  }
  console.log( `Сумма четных чисел в диапазоне равна:${sumOfEvenNumbers}
Количество четных чисел в диапазоне равно:${numberOfEvenNumbers}`);
}
myFunction(3,5)
//Задание 2
function isPrime (num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  };
  return true;
}
console.log(isPrime(7));
//Задание 3
function getSqrtBySequentialSelection(number) {
  for (let i = 1; ; i++) {
    let q = i * i;
    if (number == q) { 
      return i;
    }
    if (number < q) {
      return i - 1;
    }
  }
}


console.log(getSqrtBySequentialSelection(8));

function getSqrtByBinarySearch (number) {
  let min = 1;
    let max = number;
    let prev = 0;
    for (;;) {
        let mid = (min + max) / 2;
        if (prev == mid) {
          return mid;
        }
        let q = mid * mid;
        if (number == q) {
          return mid;
        }
        if (number < q) {
          max = mid;
        } else {
          min = mid;
          prev = mid;
        }
    }

}
console.log(getSqrtByBinarySearch(8));

//Задание 4
function getFactorial (n) {
  let result = n;
  for (let i = n - 1; i > 1; --i) {
      result *= i;
  }
  return result;
}
console.log(getFactorial(5));
//Задание 5
function digitSum (y) {
  let sum = 0;
  let figures = String(y);

  for (let i = 0; i < figures.length; i++) {
     sum += Number(figures[i]);
  }

  return sum;
}
console.log(digitSum(128));
/*

//Одномерные массивы
let arr = [1, 22, 56, 7, 9, 4, 21, 57];
//Задание 1
function getMinOfArray(arr) {
  return Math.min.apply(null, arr);
}
console.log(getMinOfArray(arr));
//Задание 2
function getMaxOfArray(numArray) {
  return Math.max.apply(null, arr);
}
console.log(getMaxOfArray(arr));

//Задание 3
function getMinIndexOfArray(arr) {
  return arr.indexOf(Math.min.apply(null, arr));
}
console.log(getMinIndexOfArray(arr));

//Задание 4
function getMaxIndexOfArray (arr) {
  return arr.indexOf(Math.max.apply(null, arr));
}
console.log(getMaxIndexOfArray(arr));

//Задание 5
function getSumOfOdd(arr) {
  let sum = arr.reduce((res, item, index) => {
    if (index % 2 !== 0) res += item;
    return res;
    }, 0);
    return sum;
}
console.log(getSumOfOdd([1, 22, 56, 7, 9, 4]));
//Задание 6

  let array = [1, 22, 56, 7, 9, 4];
  console.log(array.reverse());

//Задание 7
function countOfOdd (arr) {
  let sum = arr.reduce((res, item) => {
    if (item % 2 !== 0) res += item;
    return res;
    }, 0);
    return sum;
}
console.log(countOfOdd([1, 22, 56, 7, 9, 4]));


//Функции
//Задание 1
function getWeekDay (num) {
  switch (num) {
    case 1: return 'Понедельник'
    break
    case 2: return 'Вторник'
    break
    case 3: return 'Среда'
    break
    case 4: return 'Четверг'
    break
    case 5: return 'Пятница'
    break
    case 6: return 'Субота'
        break
    case 7: return 'Воскресенье'
        break
  }
}
console.log(getWeekDay(6));
//Задание 2
function getDistance(a, b) {
  return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1],  2));
  }
console.log(getDistance([5,-3], [6,4]));
//Задание 3
let assocArr = [];
 
assocArr[0] = new Array("", "один", "два", "три", "четыри", "пять", "шесть", "семь","восемь", "девять");
 
assocArr["d"] = new Array("десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать","пятнадцать", "шеснадцать", "семнадцать", "восемнадцать", "девятнадцать");
 
assocArr[1] = new Array("", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят","семьдесят", "восемьдесят", "девяносто");
assocArr[2] = new Array("", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот","семьсот", "восемьсот", "девятьсот");
assocArr["s"] = new Array("", "одна", "две");
assocArr[3] = new Array("тысяч", "тысяча", "тысячи", "тысячи", "тысячи", "тысяч", "тысяч","тысяч", "тысяч", "тысяч", "");

function numToWord(number) {
 
  let resp = ""
  let numArr = []
  let flag = true;

  if (isNaN(number) || number < 1 || number > 9999) {
      return "Invalid input!";
  }

  for (; number != 0; number = Math.floor(number / 10)) {
    numArr.push(number % 10);
  }
  for (let i = numArr.length - 1; i >= 0 ; i--) {
      if (flag) {
          if (numArr[i] == 1 && i == 1 || numArr[i] == 1 && i == 4) {
              flag = false;
          } else {
              resp += digitToWord(i, numArr[i], 0);
          }
      } else {
          resp += digitToWord("d", numArr[i], i);
          flag = true;
      }
  }
  return resp.trim();
}

function digitToWord(digit, offset, char) {
  let resp = "";

  switch (digit) {
      case 3:
          resp += (offset == 1 || offset == 2 ? assocArr["s"][offset] : assocArr[0][offset]) + " ";
          break;

      case 4:
          digit = 1;
          break;

      case "d":
          resp += assocArr[digit][offset] + " ";
          digit = char;
          offset = 0;
          break;
  }
  return resp + assocArr[digit][offset] + " ";
}
console.log(numToWord(999));
//Задание 4

//"Как натренировать своего дракона"
function sPossibleToGiveChange(banknotesArray){
  let a25 = 0;
  let a50 = 0;
  for(let i = 0; i < banknotesArray.length; i++){
    if(banknotesArray[i] == 25){
      a25 += 1;
    }
    if(banknotesArray[i] == 50){
      a25 -= 1; 
      a50 += 1;
    }
    if(banknotesArray[i] == 100){
      if(a50 == 0 && a25 >= 3){
        a25 -= 3;
      }else{
        a25 -= 1; a50 -= 1;
      }
    }
    if(a25 < 0 || a50 < 0){
       return false;
    }
  }
  return true;
}
console.log(sPossibleToGiveChange([25, 50, 100]));

//Функции (1)
let listOfPosts2 = [

  {
    id: 1,
    post: 'some post1',
    title: 'title 1',
    author: 'Ivanov',
    comments: [

      {
          id: 1.1,
          comment: 'some comment1',
          title: 'title 1',
          author: 'Rimus'
      },

      {
          id: 1.2,
          comment: 'some comment2',
          title: 'title 2',
          author: 'Uncle'
      }
    ]
  },

  {
    id: 2,
    post: 'some post2',
    title: 'title 2',
    author: 'Petrov',
    comments: [

      {
          id: 1.1,
          comment: 'some comment1',
          title: 'title 1',
          author: 'Rimus'
      },

      {
          id: 1.2,
          comment: 'some comment2',
          title: 'title 2',
          author: 'Uncle'
      },

      {
          id: 1.3,
          comment: 'some comment3',
          title: 'title 3',
          author: 'Rimus'
      }
    ]
  },

  {
    id: 3,
    post: 'some post3',
    title: 'title 3',
    author: 'Rimus'
  },

  {
    id: 4,
    post: 'some post4',
    title: 'title 4',
    author: 'Uncle'
  }

]

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
  let att = 0;
  let com = 0;

  listOfPosts.forEach(({ author, comments }) => {
      att += author === authorName;
      if (comments) com += comments.filter(({ author }) => author === authorName).length;
  })
  return `Post: ${att}, comments: ${com}`
  };
  console.log(getQuantityPostsByAuthor(listOfPosts2, 'Rimus'));

  //Функции (2)

  function cache(func) {
    let calls = {};
    return function() {
      let key = JSON.stringify(arguments);
      if (!(key in calls)) {
        calls[key] = func.apply(null, arguments);
      }
      return calls[key];
    };
  }
*/