const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
  // fetch returns a promise (I prefer axio)
  fetchPromise.then((response) => {
    // response is a JSON object, we want to process it once the call is complete
    // without promise, we would have a callback to fetch to execute when fetch completes
    console.log(`Received response? ${response.ok? 'yes' : 'no'}`);
    console.log(`Response Status: ${response.status}`);
  });
  
  console.log("Started request…");

  /*
  Three promise states:
  - pending: async is not completed yet
  - completed: async is completed
    - fulfilled: promise is fulfilled with expected return type
    - rejected: error thrown in async function

  Promise callbacks scheduled on microtask queue (exists right before the event loop)
  - Event loop has pending call backs phase (macrotask longer running callbacks)

  When promise returned
  - associated callback in .then() added to microtask queue
  - In event loop, the microtask runs between/before event loop tasks
  - Main thread - sync; event loop is inf loop in main thread to manage async functionality
  */
  