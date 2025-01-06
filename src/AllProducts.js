
import {useEffect,useState} from 'react'

import {Container,Col,Row,Button} from 'react-bootstrap'

const AllProducts=()=>{

  const [products,setProducts]=useState(null)
  const [detail,setDetail]=useState(null)
    useEffect(()=>{
       const getData=async()=>{
        const res=await fetch('http://localhost:4000/products')
        const data=await res.json()
        console.log(data.message)
        setProducts(data.message)
       } 
     getData()
      
    },[])
    console.log(detail)

    const detailsHandler=async(product)=>{
       const res=await fetch(`http://localhost:4000/product/${product._id}`,{
        method:'GET',

       })
       const data=await res.json()
       console.log(data)
       setDetail(data.message)
    }
    const addToCartHandler=async(product)=>{
       const res=await fetch('http://localhost:4000/cart',{
        method:'POST',
        body:JSON.stringify(product),
        headers:{
          'Content-Type':'application/json'
        }
       })
       
    }
      return(
        <Container className='my-2'>
          {!detail && products && products.map(product=>
            <Col className='col-4 text-center' key={product._id}>
            <div className='border border-ridge shadow-lg'>
                 <p className='fs-3'>{product.title}</p>
                 <p>{product.description}</p>
                 <p className='fs-4'>{product.price}</p>
                 <div className='d-flex justify-content-around'>
                  <Button className='mb-2' onClick={()=>detailsHandler(product)}>Details</Button>
                  <Button className='mb-2' onClick={()=>addToCartHandler(product)}>Add To Cart</Button>
                 </div>
              </div> 
        </Col>
          )}
          {detail && <Col className=' text-center' key={detail[0]._id}>
            <div className='border border-ridge shadow-lg'>
                 <p className='fs-3'>{detail[0].title}</p>
                 <p>{detail[0].description}</p>
                 <p className='fs-4'>{detail[0].price}</p>
                 {/* <div className='d-flex justify-content-around'>
                  <Button className='mb-2' onClick={()=>detailsHandler(product)}>Details</Button>
                  <Button className='mb-2' onClick={()=>addToCartHandler(product)}>Add To Cart</Button>
                 </div> */}
              </div> 
        </Col>}
            
        </Container>
      )
}


export default AllProducts