const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

// consecutive async functions
fetchPromise.then((response) => {
  const jsonPromise = response.json(); // async call, returns a promise
  jsonPromise.then((products) => { // executed once .json() promise is resolved
    products.forEach(product => { // we want to do something with actual data from json response
      console.log(product.name);
    });
  });
});

console.log('Fetching products ... ');

/*
    We want these promises to happen consecutively
    What if the JSON extraction is also async? 
      Get a successful response
      THEN call response.json() (another async)
*/