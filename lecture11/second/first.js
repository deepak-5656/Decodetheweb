
// creating the html element through javascript without using in html
// const newElement = document.createElement('h2');
// newElement.textContent = "I am deepak";

// console.log(newElement);

// select the  first element
// const element = document.getElementById('first');
// element.after(newElement); //this will add the new element after the id=first element


// const newElement2 = document.createElement('h3');
// newElement2.textContent = "How was the code";
// newElement2.id = "third";
// newElement2.className = "thirdclass";

// console.log(newElement2);
// element.before(newElement2); //this will add the new element before the first element

// to get to know about the attribute of the element 
// to set attribute of the element
// newElement2.setAttribute('menu','deep'); //this will set the attribute of the element
// console.log(newElement2.getAttribute('class')); //this will return the id of the element


// add list in unordered list of html file using javascript

// const ul = document.querySelector('ul'); //it selects first ul element in the html file from top to bottom it searches  &we can use the getElementById('ul') also to select the ul element

// const li = document.createElement('li');
// li.textContent = "Web development";

// const li2 = document.createElement('li');
// li2.textContent = "App development";


// li.textContent="system design"; //this will change the text content of the li element override the li object that already there
// const li3 = document.createElement('li');
// li3.textContent = "Devops";

// ul.append(li); //this will add the li element in the ul element at last position
// ul.prepend(li2); //this will add the li element in the ul element at first position

// li.after(li3);  //this will add the li3 element after the li element in the ul element


// if we want to see the children of ul element we can see 
// console.log(ul.children);




// example used in large datasets

const foods = ["Milk", "Soya", "Chicken", "Egg", "Samosa", "Jalebi"];
const ul = document.getElementById("ul");

const fra = document.createDocumentFragment();   //why it is used because it is shared in the fjorm of patches because it reduce the website lags loading  

for (const food of foods) {
    const li = document.createElement("li");
    li.textContent = food;
    fra.append(li);
}
ul.append(fra); //this will add the li elements in the ul element at last position