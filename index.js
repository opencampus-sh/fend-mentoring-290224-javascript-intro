console.log("Hello, JavaScript!");

// var name = "Eric";
// var name;
// name = "Eric";

// let name = "Eric";
// name = "Hanna";
// name = 3;

// const name;
// name = "Eric";

const myName = "Eric";

let name = "Alice"; // String
// let age = 30; // Number
let isStudent = true; // Boolean
let address = null; // null
let description; // undefined
let hobbies = ["Reading", "Traveling"]; // Array
let person = { firstName: "Bob", lastName: "Smith" }; // Object

let sum = 11 % 5;
console.log(sum);

let isEqual = 10 !== 10;
let isNotEqual = 10 == "10";
console.log(isEqual);
console.log(isNotEqual);

let result = 10 > 5 || 10 < 20;
console.log("result", result);

const age = 16;

if (age >= 18 && age !== 21) {
  console.log("You are an adult.");
} else if (age === 21) {
  console.log("You are 21.");
} else {
  console.log("You are a minor.");
}

switch (true) {
  case age >= 18 && age !== 21:
    console.log("You are an adult.");
    break;
  case age === 21:
    console.log("You are 21.");
    break;
  default:
    console.log("You are a minor.");
}

for (let i = 0; i < 5; i++) {
  console.log("Loop iteration: " + i);
  console.log(`Loop iteration: ${i}rd time`);
}

let iterator = 0;

while (iterator < 5) {
  console.log("Loop iteration While: " + iterator);
  iterator++;
}

console.log("finished");

// i = i + 1;

function greetStatic() {
  console.log("Hello");
}

greetStatic();

// console.log(greetStatic());
const aliceGreeting = greet("Alice", "in Wonderland");

function greet(name, lastName) {
  return `Hello, ${name} ${lastName}!`;
}

const greetArrow = (name, lastName) => `Hello Arrow, ${name} ${lastName}!`;

console.log(greetArrow("Alice", "in Wonderland"));

const products = [
  {
    title: "Coffee 1",
    price: 100,
    "description for product": "My description text  for coffee 2",
    packageSizes: [
      {
        size: "1kg",
        text: "The 1kg size",
      },
      {
        size: "5kg",
        text: "The 5kg size",
      },
      {
        size: "10kg",
        text: "The 10kg size",
      },
    ],
  },
  {
    title: "Coffee 2",
    price: 200,
    "description for product": "My description text  for coffee 2",
    packageSizes: [
      {
        size: "1kg",
        text: "The 1kg size",
      },
      {
        size: "5kg",
        text: "The 5kg size",
      },
      {
        size: "10kg",
        text: "The 10kg size",
      },
    ],
  },
  {
    title: "Coffee 3",
    price: 300,
    "description for product": "My description text for coffee 3",
    packageSizes: [
      {
        size: "1kg",
        text: "The 1kg size",
      },
      {
        size: "5kg",
        text: "The 5kg size",
      },
      {
        size: "10kg",
        text: "The 10kg size",
      },
    ],
  },
];

products.forEach((product) => {
  console.log(`This is a product with the name ${product.title} and the description ${product["description for product"]}`);
});

const productDescriptions = products.map((product) => {
  return product["description for product"];
});

console.log("products", products);
console.log("productDescriptions", productDescriptions);

window
// const container = document.getElementById("container");
const container = document.querySelector(".container");
const containers = document.querySelectorAll(".container");
console.log(containers);

container.style.color = "pink";
container.innerHTML = "<h2>Text 2</h2>";

const childElement = document.createElement("div");
childElement.innerText = "Child Element";
childElement.style.color = "aqua";

container.appendChild(childElement);

const productContainer = document.querySelector(".product");
const chosenProduct = products[0];

const productHtml = `
  <div class="product">
    <div class="product-title">
      ${chosenProduct.title}
    </div>
  </div>
`
productContainer.innerHTML = productHtml;


containers.forEach((c, i) => {
  if (i === 0) {
    c.style.backgroundColor = "red";
  } else {
    c.style.backgroundColor = "yellow";
  }
})