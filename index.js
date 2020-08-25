//  1. ways to print in console using console API
    //  console.log("Hello World")    
    //  alert("Hey! my name is anthony gonzalves")
    //  document.write("This is a document write attempt")
    
 // 2. CONSOLE API   
    console.log("Hello World")
    console.warn("This is a warning!")
    console.error("I'm an error. Please take care of me")

// 3. Variables in javascript
    //containers to store data values

// 4. Data types in JS
    //Numbers
    var number1 = 50
    var number2 = 40
    var number3 = 9.999999
    console.log(number1 + number2 + number3)

    //String
    var str1 = "Hi my name is anuvrat"
    var str2 = "Hi I'm an engineer"
    console.log(str1)
    console.log(str2)

    //object
    var marks = {
        anuvrat : 100,
        rahul: 100,
        ankita: 90
    }
    console.log(marks['ankita'])

    //Booleans
    var a = true
    var b = false

    console.log(a, b)
    console.assert( a == true)

    //undefined
    //var und = undefined
    var und
    console.log(und)

    /*
    There are two categories of data types:
    1) Primitive data types: null, undefined, numbers, string, boolean and symbol
    2) Reference data type: Array and objects
    */

    //Array
    var arr1 = [1,2,3,4,"Anuvrat"]
    console.log(arr1)
    console.log(arr1[4])

//    console.log(arr[5])         //Uncaught ReferenceError: arr is not defined

//Operators in JS
    // 1. Assignment operators = and shorthand assignment
    var a = 10
    console.log("a = ", a)
    a = 100
    console.log("a = ", a)

    a += 20
    console.log("a = ", a)
    a -= 20
    console.log("a = ", a)
    a *= 20
    console.log("a = ", a)
    a /= 20
    console.log("a = ", a)


    // 2. Arithmatic operator + - * / %(modulo)
    var b = 50

    console.log("a + b = ", a+b)
    console.log("a - b = ", a-b)
    console.log("a * b = ", a*b)
    console.log("a / b = ", a/b)
    console.log("a % b = ", a%b)

    // 3. comparision operators > >= < <= ==
    console.log("a == b ? ", a==b)
    console.log("a < b ? ", a<b)
    console.log("a > b ? ", a>b)
    console.log("a <= b ? ", a<=b)
    console.log("a >= b ? ", a>=b)

    // 4. logical operators && || !
    console.log("true && true ? ", true &&  true)
    console.log("true && false ? ", true &&  false)
    console.log("false && true ? ", false &&  true)
    console.log("false && false ? ", false && false)

    console.log("true || true ? ", true ||  true)
    console.log("true || false ? ", true ||  false)  
    console.log("false || true ? ", false ||  true)
    console.log("false || false ? ", false || false)
    
    console.log("!true = ", !true)
    console.log("!flase = ", !false)

// functions in JavaScript

    function avg(a, b){
        return (a+b)/2
    }

    // functions help us to DRY -> do not repeat yourself

    var avg1 = avg(10,20)
    var avg2 = avg(100,200)

    console.log("averages are: ", avg1, avg2)

// conditionals in JavaScript
    // 1. Single if

    var age = 18

    if(age >= 18){
        console.log("You are an adult")
    }

    // 2. if-else

    if(age <= 12){
        console.log("You are not a teenager")
    }
    else{
        console.log("You may be a teenager")
    }

    // 3. if-else ladder
    age = 80
    if(age <= 12){
        console.log("You are not a teenager")
    }
    else if(age < 18){
        console.log("You are a teenager")
    }
    else if(age >= 18 && age <60){
        console.log("You are an adult ")
    }
    else{
        console.log("Dawa and dua ki zarurat hai")
    }

// Iterations in JavaScript

    var arr = [7,8,1,2,5,3,4,9,6,10]
    
    // for loop
    for(let i=0; i< arr.length; i++){
        console.log("This is for loop: ", arr[i])
    }

    // while loop
    let i=0
    while(i < arr.length){
        console.log("This is while loop: ", arr[i])
        i++
    }

    // const abc =10                  to declare constant variable
    // abc++

    // for each loop
    arr.forEach(function(element){
        console.log("This is for each loop: ", element)
    })

    // do while loop

    let j=0
    do{
        console.log("This is do while loop: ", arr[j])
        j++
    }while(j < arr.length)

// Array methods in JavaScript
    console.log(arr)

    // push -> enter element in last of array
    arr.push("Anuvrat")
    console.log(arr)

    //pop -> removes last element in array
    arr.pop()
    console.log(arr)

    //shift -> removes first element in array
    arr.shift()
    console.log(arr)

    //unshift -> adds element at first position in array
    arr.unshift("Anuvrat")
    console.log(arr)

// string methods in JavaScript

    let testString = "I am vengence. I am the night. I am Batman."

    console.log(testString.length)
    console.log(testString.search("Batman"))
    console.log(testString.substring(5,13))
    console.log(testString.toUpperCase())
    console.log(testString.indexOf("am"))
    console.log(testString.lastIndexOf("am"))

// Date in JavaScript

    let myDate = new Date()
    console.log(myDate)
    console.log(myDate.getDate())
    console.log(myDate.getDay())
    console.log(myDate.getHours())
    console.log(myDate.getMonth())
    console.log(myDate.toDateString())

//DOM Manipulation via JavaScript

    let elem = document.getElementById("btn")
    console.log(elem)

    let elemClass = document.getElementsByClassName("container")
    console.log(elemClass)

    //elemClass[0].style.background = "yellow"
    elemClass[0].classList.add("bg-primary")
    elemClass[0].classList.add("text-success")

    console.log(elemClass[0].innerHTML)
    console.log(elemClass[0].innerText)

    tn = document.getElementsByTagName('div')
    console.log(tn)

    newElement = document.createElement('p')
    newElement.innerText = "This is a new element created using document.createElement"
    tn[0].appendChild(newElement)

    newElement2 = document.createElement('b')
    newElement2.innerText = "This is a bold text created using document.createElement"
    tn[0].appendChild(newElement2)

    newElement3 = document.createElement('i')
    newElement3.innerText = "This is a replaced element"
    tn[0].replaceChild(newElement3, newElement)

    // selecting element using query

    let sel = document.querySelector(".container")
    console.log(sel)

    sel = document.querySelectorAll(".container")
    console.log(sel)

    // Events in JavaScript
    function clicked(){
        console.log("The button was clicked")
    }
    window.onload = function(){
        console.log("The document just got loaded")
    }

    // to handle events we add event listeners in javascript

    firstContainer.addEventListener('click', function(){
        console.log("Clicked on the container")
    })

    // firstContainer.addEventListener('mouseover', function(){
    //     console.log("Mouse is hovering on the container")
    // })

    // firstContainer.addEventListener('mouseout', function(){
    //     console.log("Mouse is out of container")
    // })

    // firstContainer.addEventListener('mouseup', function(){
    //     console.log("Mouse is no longer pressed")
    // })

    // firstContainer.addEventListener('mousedown', function(){
    //     console.log("Mouse is currently pressed")
    // })

    // using events we can perform operations on other elements

    // firstContainer.addEventListener('click', function(){
    //     document.querySelectorAll('.container')[1].innerHTML = "<b> container was clicked </b>"
    //     console.log("Check the text in second div")
    // })

    // prevHTML = document.querySelectorAll('.container')[1].innerHTML

    // firstContainer.addEventListener('mouseup', function(){
    //     document.querySelectorAll('.container')[1].innerHTML = prevHTML
    //     console.log("Mouse is no longer pressed")
    // })

    // firstContainer.addEventListener('mousedown', function(){
    //     document.querySelectorAll('.container')[1].innerHTML = "<b> Clicked on container </b>"
    //     console.log("Mouse is currently pressed")
    // })

    // setTimeout ---->>> it is used when we want to perform an action after certain time

    writeToConsole = () => {
        document.querySelectorAll('.container')[1].innerHTML = "<b> Set timeout triggered automatically </b>"
        console.log("Check the second div")
    }

    //setTimeout(writeToConsole, 5000)

    //clearTimeout  ---> used to stop the triggering of setTimeout()
    clr = setTimeout(writeToConsole, 5000)
    clearTimeout(clr)
    
    
    
    //setInterval-->> it is used when we want to perform some action multiple times at certain interval

    writeToConsoleInterval = () => {
        document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval triggered automatically </b>"
        console.log("Check the second div")
    }

    //clearInterval -->> used to stop triggering of setInterval()
    clr = setInterval(writeToConsoleInterval, 3000)
    clearInterval(clr)

    //local storage operation with JavaScript
    localStorage.clear

    localStorage.setItem('name', 'Anuvrat')
    localStorage.setItem('age', '29')
    localStorage.setItem('profile', 'QA')

    console.log(localStorage.getItem('profile'))
    console.log(localStorage.getItem('name'))
    console.log(localStorage.length)
