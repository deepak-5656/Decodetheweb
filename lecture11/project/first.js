const users = [
  {
    name: "Aarav Sharma",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Verma",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rahul Mehta",
    age: 26,
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sneha Kapoor",
    age: 23,
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Vikram Singh",
    age: 28,
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Ananya Gupta",
    age: 21,
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Rohan Das",
    age: 27,
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Kavya Nair",
    age: 25,
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Arjun Patel",
    age: 29,
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Neha Joshi",
    age: 24,
    photo: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    name: "Karan Malhotra",
    age: 30,
    photo: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Ishita Roy",
    age: 23,
    photo: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];

// now we are printing this array data on the screen only using with js concept using html element 

const root = document.getElementById("root");

// use any loop because users is the array stored on that

users.forEach((user)=>{
  const name = document.createElement("h2");
  name.textContent = user.name;
//   root.appendChild(name);

//   now for age create 
  const age = document.createElement("p");
    age.textContent = `Age: ${user.age}`;
//   root.appendChild(age);


//   for image create this to print
    const image = document.createElement("img");
    image.src = user.photo;
    // root.appendChild(image);

    // all this i am now going to add in div element of html tag inside the div because they all are children of div 
    const card = document.createElement("div");
    card.append(name, age, image);


    //now put all this card into the root element

    root.append(card);

})