// davaleba n1

let n = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    n += i;
  }
}
console.log(n);

// -----------------------

// davaleba n2

let tech = ["Laptop", "Phone", "Keyboard", "Mouse", "Monitor"];

input = prompt("sheiyvane produqtis dasaxeleba:");
if (tech.indexOf(input) === -1) {
  alert("produqti ar arsebobs");
} else {
  alert("produqti arsebobs misi indexi: " + tech.indexOf(input));
}

// -----------------------


// davaleba n3

let movies = [
  {
    name: "Interstellar",
    year: 2014,
    rating: 8.7,
  },
  {
    name: "Inception",
    year: 2010,
    rating: 8.8,
  },
  {
    name: "The Batman",
    year: 2022,
    rating: 7.9,
  },
];

let count = 0;

for (let i = 0; i < movies.length; i++) {

//   console.log("Movie name: " + movies[i].name );

  if (movies[i].rating > 8.0) {
    count++;

    console.log(
      "name: " + movies[i].name + " Movie rating: " + movies[i].rating,
    );
  }
}
console.log("filmebis raodenoba romelta reitingi > 8.0: " + count);
