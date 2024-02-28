const fetchPromise = fetch(
    "https://mdn.github.io/learningarea/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(`Bad Response : ${response.status}`) 
    })
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
        })
    .catch((error) => { // async error handler
        console.error(`Failed to get products: ${error}`);
    });

    console.log('Chaining promises ... ');
  