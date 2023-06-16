document.addEventListener('DOMContentLoaded', function () {
            //  1) Select the section with an id of container without using querySelector.
            const containerSection = document.getElementById('container');
            console.log(containerSection);
            // 2) Select the section with an id of container using querySelector
            const queryContainer = document.querySelector('#container');
            console.log(queryContainer);
            // 3) Select all of the list items with a class of "second".
            const secondItems = document.getElementsByClassName('second');
            console.log(secondItems);
            // 4) Select a list item with a class of third, but only the list item inside of the ol tag.
            const thirdOlList = document.querySelector('ol li.third');
            console.log(thirdOlList);
            // 5) Give the section with an id of container the text "Hello!".
            const getText = containerSection.firstChild;
            getText.textContent = "Hello!";
            // 6) Add the class main to the div with a class of footer. So from <div class="footer"> to <div class="footer main">
            let footer = document.querySelector('.footer');
            footer.classList.add('main');
            console.log(footer);
            // 7) Remove the class main on the div with a class of footer.
            footer.classList.remove('main');
            console.log(footer);
            // 8) Create a new li element.
            const newLi = document.createElement('li');
            console.log(newLi);
            // 9) Give the li the text "four"
            newLi.innerHTML = "four";
            console.log(newLi);
            // 10) Append the li to the ul element.
            let theChild = containerSection.firstElementChild;
            theChild.appendChild(newLi);
            console.log(containerSection);
            // 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
            let greenList = document.querySelectorAll('ol li');
            greenList.forEach(li => {
                li.style.backgroundColor = 'green';
            });
            console.log(greenList);
            // 13) Remove the div with a class of footer.
            let removeFooter = document.querySelector('.footer');
            let parent = removeFooter.parentElement;
            parent.removeChild(removeFooter);
            console.log(parent);
        })



            //Access children Nodes
//element.children
//element.lastChild
//element.firstChild

//Access sibling Nodes
//element.nextElementSibling
//element.previousElementSibling

//Access parent Node if it exists
//element.parentElement;

//remove child
//node.removeChild(oldNode)

//if you don't know the parent...
//oldNode.parentNode.removeChild(oldNode)

//DOM selector methods return NodeLists, which are objects representing a collection of nodes, and is not an array, but still zero-indexed i.e. divList[0]

//getElementsByTagName find node with a certain HTML tag, div, h1, p 

//querySelector querySelectorAll searches the DOM using CSS selectors, #container, .container:first-child 

// // HTML structure:
// // <div id="myDiv">
// //   <p class="myClass">Hello, World!</p>
// // </div>

// // Query selector call:
// const myElement = document.querySelector('#myDiv .myClass');

// // Accessing the element:
// console.log(myElement.textContent); // Output: "Hello, World!"

//getElementbyId find node with a certain ID attribute, pass in the ID as the arg

//getElementsByClassName() find node with certain class attribute

//Array-Like Object TO Array
// const divArr = [].prototype.slice.call(divList)
// const divArr = Array.from(divList);
// const divArr = [...divList];

//Traversing the DOM
// (e = element)

//Access children Nodes
//element.children
//element.lastChild
//element.firstChild

//Access sibling Nodes
//element.nextElementSibling
//element.previousElementSibling

//Access parent Noe if it exists
//element.parentElement;

//remove child
//node.removeChild(oldNode)

//if you don't know the parent...
//oldNode.parentNode.removeChild(oldNode)
//change styles
//document.getElementById(id).style.property = new style
//document.getElementById("id1").style.color = "blue"
//set onclick= for buttons

//listening for events
//document.getElementById("myId").addEventListener("click",function(event){alert('I am Clicked')});
//addEventListener(type,callback)
//type = the event (scroll, mouseover, keydown, keyup, hover)
//cb = the anonymous function that fires when type occurs

//forms
//types : 
//label for = "<username,password>""
//input type = "<text,password,submit>"" //text=username
//instead of "class", uses "name"

//.value attribute
//document.getElementById('username').value

//.innerText (get the title)
// heading = document.getElementById('title')
// heading.innerText >> "Enter your information"

// var name = "Zach"

// heading.innerText = "Enter " + name + "'s information" 
// heading.innerText >> Enter Zach's information

//change content of DIV
//<h1> lives inside <div>
//change innerHTML of the <div> using .innerHTML
//document.getElementById('main-section').innerHTML = "<h3>Hello World Smaller!<h3>" 
//replaces that "Hello World!"

//...rest

// function checkRest(a,b,...rest){
//     console.log("rest",rest); //gets rid of first two (a,b) elements)
