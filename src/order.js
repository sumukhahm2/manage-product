
import {Container,Row,Col,Button} from 'react-bootstrap'
import {useEffect,useState} from 'react'

const Order=()=>{
    const [order,setOrder]=useState(null)
useEffect(()=>{
     async function getCartData(){
        const res=await fetch('http://localhost:4000/orders',{
            method:'GET'
        })
        const data=await res.json()
        console.log(data)
        if(data.message)
        setOrder(data.message)
     }
    getCartData()
},[])


    return(
        <Container>
             
            <Row>
            <p>Ordered Items</p>
                {order && order.map((item)=>{
                   return <Col className='border border-ridge shadow-lg text-center fs-4' key={item._id}>
                         <p>{item.title}</p>
                         <hr/>
                         <img src={item.imageURL} alt={item.imageURL} width='400px'/>
                         <p>{item.description}</p>
                         <p>{item.price}</p>
                         <p>{item.quantity}</p>

                    </Col>
                })}

            </Row>
            </Container>
    )
}



export default Order