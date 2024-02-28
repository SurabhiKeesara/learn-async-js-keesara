const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
  // cleaner way of chaining promises
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => { 
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');
  