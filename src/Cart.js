
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
    return(
        <Container>
             
            <Row>
            <p>Cart Items</p>
                {cartData && cartData.map((item)=>{
                   return <Col className='border border-ridge shadow-lg text-center fs-4' key={item._id}>
                         <p>{item.title}</p>
                         <hr/>
                         <p>{item.imageURL}</p>
                         <p>{item.description}</p>
                         <p>{item.price}</p>
                         <p>{item.quantity}</p>
                         <Button onClick={()=>deleteProduct(item._id)}>Delete</Button>

                    </Col>
                })}
            </Row>
            </Container>
    )
}



export default Cart