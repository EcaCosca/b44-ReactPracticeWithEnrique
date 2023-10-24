import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [product, setProduct] = useState({
    title: "Test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // EXAMPLE USING THEN AND CATCH
    axios("https://fakestoreapi.com/products")
      .then((responseData) => {
        console.log(responseData);
        setData(responseData.data);
      })
      .catch((error) => console.log(error));

    // EXAMPLE USING ASYNC AWAIT
    // try {
    //   const response = await fetch('https://fakestoreapi.com/products')
    //   const data = await response.json()
    //   console.log(data);
    //   setData(data)

    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleChange = (event) => {
    const keyName = event.target.id;
    const incomingValue = event.target.value;

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [keyName]: incomingValue,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // todo try to change what is being displayed after the add of a product

    const newProduct = {
      ...product,
    };

    //  FETCH POST REQUEST USING THEN AND CATCH
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="card">
        <h1>Welcome to your very own fakestore</h1>
        <div className="new-product-upload-dashboard">
        <div className="new-product">
          <h3>New product</h3>

          <form onSubmit={handleSubmit}>
            <label>
              Title:
            </label>
            <br />
              <input type="text" id="title" onChange={handleChange} />
            <br />
            <label>
              Description:
            </label>
            <br />
              <input type="text" id="description" onChange={handleChange} />
            <br />
            <label>
              Image:
            </label>
            <br />
              <input type="text" id="image" onChange={handleChange} />
            <br />
            <label>
              Category:
            </label>
            <br />
              <input type="text" id="category" onChange={handleChange} />
            <br />
            <label>
              Price:
            </label>
            <br />
              <input type="number" id="price" onChange={handleChange} />
            <br />
            <button>Submit</button>
          </form>
        </div>

        <div className="new-product preview">
        <h3>Preview</h3>
        <div className="card">
          <h1>{product.title}</h1>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <p>{product.description}</p>
          <ul>
            <li>Category: {product.category}</li>
            <li>Price: {product.price}</li>
          </ul>
        </div>
        </div>
        </div>
      </div>
      <div className="products">
        <h1>Products for Sale</h1>
        {!data ? (
          <h1>Loading...</h1>
        ) : (
          data.map((product) => {
            return (
              <div className="card">
                <h1>{product.title}</h1>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <p>{product.description}</p>
                <ul>
                  <li>Category: {product.category}</li>
                  <li>Price: {product.price}</li>
                  <li>
                    Rating: {product.rating.rate} from {product.rating.count}{" "}
                    reviews
                  </li>
                </ul>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
