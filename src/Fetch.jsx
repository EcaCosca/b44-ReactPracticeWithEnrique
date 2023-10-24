import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import e from 'cors'

function Fetch() {
  // const count = 0
  // const [variableName, ourSetterThatChangesTheValueOfTheVariable] = useState(initialState);
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const [product, setProduct] = useState({
      title: 'Test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
  })
  const [data, setData] = useState(null)

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    console.log("Getting all data");
    
    // EXAMPLE USING THEN AND CATCH 
    // fetch('https://fakestoreapi.com/products')
    // .then(response => response.json())
    // .then(responseData => {
    //   console.log(responseData)
    //   setData(responseData)
    // })
    // .catch(error => console.log(error))

    // EXAMPLE USING ASYNC AWAIT
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data);
      setData(data)

    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    const keyName = event.target.id;
    const incomingValue = event.target.value;
    
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [keyName]: incomingValue
      }
    })
  }

  const handleDone = () => setDone((prevValueOfDone) => !prevValueOfDone)

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {  
      ...product
    }

    //  FETCH POST REQUEST USING THEN AND CATCH
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(newProduct),
            headers:{
              "Content-Type":"application/json",
            }
        })
    .then(res=>res.json())
    .then(json=>console.log(json))
    .catch(err=>console.log(err))
  }

  return (

    <>        
      <div className="card">
      <h1>Welcome to your very own fakestore</h1>
      <p>New product:</p>

      <form onSubmit={handleSubmit}>
        <label>
        Title:
          <input type="text" id="title" onChange={handleChange} />
        </label>
        <br/>
        <label>
          Description:
          <input type="text" id="description" onChange={handleChange} />
        </label>
        <br/>
        <label>
          Image:
          <input type="text" id="image" onChange={handleChange} />
        </label>
        <br/>
        <label>
          Category:
          <input type="text" id="category" onChange={handleChange} />
        </label>
        <br/>
        <label>
          Price:
          <input type="number" id="price" onChange={handleChange} />
        </label>
        <br/>
        <button>Submit</button>
      </form>

      </div>

      <h3>Preview</h3>
      <div className='card'>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <ul>
          <li>Category: {product.category}</li>
          <li>Price: {product.price}</li>
          {/* <li>Rating: {product.rating.rate} from {product.rating.count} reviews</li> */}
        </ul> 
      </div>


      <div className='products'>
      <h1>Products for Sale</h1>
        {
          !data ? <h1>Loading...</h1> : 
          data.map((product) => {
          return (
            <div className='card'>
              <h1>{product.title}</h1>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <ul>
                <li>Category: {product.category}</li>
                <li>Price: {product.price}</li>
                <li>Rating: {product.rating.rate} from {product.rating.count} reviews</li>
              </ul>
            </div>
          )
        })}
      </div>
        <button onClick={handleDone}>
          {done ? "Not done" : "Done"}
        </button>
    </>
  )
}

export default Fetch
