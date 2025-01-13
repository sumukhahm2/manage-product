
import {Container,Row,Col,Button} from 'react-bootstrap'
import {useEffect,useState} from 'react'

const Cart=()=>{
     const [cartData,setCartData]=useState([])
useEffect(()=>{
     async function getCartData(){
        const res=await fetch('http://localhost:4000/get-cart',{
            method:'GET'
        })
        const data=await res.json()
        console.log(data)
        if(data.message)
        setCartData(data.message)
     }
    getCartData()
},[])

const deleteProduct=async(id)=>{
     const res=await fetch('http://localhost:4000/cart-delete-product',{
        method:'POST',
        body:JSON.stringify({id:id}),
        headers:{
            'Content-Type':'application/json'
        }
     })
     const data=await res.json()
     console.log(data)
}
console.log(cartData)

const orderCartItems=async()=>{
   const res=await fetch('http://localhost:4000/create-order',{
    method:'POST',
    body:JSON.stringify({}),
    headers:{
        'Content-Type':'application/json'
    }
   })

   const data=await res.json()
   console.log(data)
}
    return(
        <Container>
             
            <Row>
            <p>Cart Items</p>
                {cartData && cartData.map((item)=>{
                   return <Col className='border border-ridge shadow-lg text-center fs-4' key={item.productId._id}>
                         <p>{item.productId.title}</p>
                         <hr/>
                         <img src={item.productId.imageURL} alt={item.productId.imageURL} width='400px'/>
                         <p>{item.productId.description}</p>
                         <p>{item.productId.price}</p>
                         <p>{item.productId.quantity}</p>
                         <Button onClick={()=>deleteProduct(item.productId._id)}>Delete</Button>

                    </Col>
                })}
                <div className='my-2 d-flex justify-content-end'>
                    <Button className='btn-success' onClick={orderCartItems}>Order</Button>
                </div>
            </Row>
            </Container>
    )
}



export default Cart