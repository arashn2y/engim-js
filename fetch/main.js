const fetchData = () => {
  const url = "https://dummyjson.com/products";

  const promise = fetch(url);
  // console.log(promise);

  const jsonPromise = promise
    .then(body => {
      return body.json();
    })
    .catch(error => {
      console.log(error);
    });

  jsonPromise
    .then(data => {
      console.log("OK");
      console.log(data);
    })
    .catch(error => {
      console.log("Error");
      console.log(error);
    });
};

// fetchData();

const productDiv = document.getElementById("product");
const title = document.getElementById("title");

const AsyncFetchData = async () => {
  const url = "https://dummyjson.com/products";
  try {
    const response = await fetch(url); // GET
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Error");
  }
};

// AsyncFetchData();

const FetchDataOfFirstProduct = async () => {
  const url = "https://dummyjson.com/products/1";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    title.textContent = data.title;
    data = null;
    data.images.forEach(image => {
      const img = document.createElement("img");
      img.src = image;
      img.className = "w-25 h-25";
      // img.classList.add("w-25", "h-25");
      productDiv.appendChild(img);
    });
    const h1 = document.createElement("h1");
    h1.textContent = data.price;
    const h2 = document.createElement("h2");
    h2.textContent = data.description;
    productDiv.appendChild(h1);
    productDiv.appendChild(h2);
  } catch (error) {
    console.log(error);
    const span = document.createElement("span");
    span.textContent = error.message;
    span.className = "text-danger";
    productDiv.appendChild(span);
  }
};

// FetchDataOfFirstProduct();

const createProduct = async product => {
  const url = "https://dummyjson.com/products/add";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const status = response.status;
    if (status === 201) {
      const data = await response.json();
      console.log(data);
    } else if (status === 404) {
      console.log(`Error: ${status} - ${response.statusText}`);
    } else {
      console.log("Not Specified Error");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id, product) => {
  const url = `https://dummyjson.com/products/${id}`;
  // id = 1 =>  const url = `https://dummyjson.com/products/1`;
  // id = 2 =>  const url = `https://dummyjson.com/products/2`;
  // id = 3 =>  const url = `https://dummyjson.com/products/3`;

  // CRUD
  // Create => Post
  // Read => Get
  // Update => Put
  // Delete => Delete
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const status = response.status;
  if (status === 200) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log("Error");
  }
};

const deleteProduct = async id => {
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url, {
    method: "DELETE"
  });
  console.log(response);
  const json = await response.json();
  console.log(json);
  const status = response.status;
  if (status === 200) {
    console.log("Product deleted");
  } else {
    console.log("Error");
  }
};

// fetchData();
// AsyncFetchData();
// createProduct({ title: "test", price: 100, description: "An ultimate  new version of Iphone", rating: 4.54 });
// updateProduct(1, { title: "Iphone 14", price: 1000000 });
deleteProduct(1);
deleteProduct(2);
deleteProduct(3);
deleteProduct(4);
