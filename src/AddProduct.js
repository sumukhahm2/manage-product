
import {Form,Button,Container} from 'react-bootstrap'
import {useState,useRef} from 'react'

const AddProduct=(props)=>{
  console.log(props)
     const titleRef=useRef()
     const imageRef=useRef()
     const priceRef=useRef()
     const descriptionRef=useRef()

    const addProductHandler=async(e)=>{
          e.preventDefault()
          try{
            if(props.data)
            {
              console.log(props)
                const updatedData={
                  title:titleRef.current.value,
                  description:descriptionRef.current.value,
                  price:priceRef.current.value,
                  image:imageRef.current.value,
                  prodId:props.data._id
                }

                
              const res=await fetch('http://localhost:4000/edit-product',
                { 
                 method:'POST',
                 body:JSON.stringify(updatedData),
                 headers:{
                     'Content-Type':'application/json'
     
                 }
               }
     
               )
     
               const data=await res.json()
     
               console.log(data)
          
            }
            else{
              console.log('adding')
              const addProductData={
                title:titleRef.current.value,
                description:descriptionRef.current.value,
                price:priceRef.current.value,
                image:imageRef.current.value
              }
    
              const res=await fetch('http://localhost:4000/add-product',
               { 
                method:'POST',
                body:JSON.stringify(addProductData),
                headers:{
                    'Content-Type':'application/json'
    
                }
              }
    
              )
    
              const data=await res.json()
    
              console.log(data)
         
            }
          }
          catch(error)
          {
            console.log(error)
          }
           

         

    }

    return(
        <Container className='d-flex flex-column justify-content-center  my-2'>
        <Form className='fs-5 w-75' onSubmit={addProductHandler}>
            <Form.Text className='fs-3 fw-bolder text-success'>Add Product</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="" ref={titleRef} defaultValue={props.data?props.data.title:''}/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ImageURL</Form.Label>
          <Form.Control type="text" placeholder="" ref={imageRef} defaultValue={props.data?props.data.imageURL:''}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="" ref={descriptionRef} defaultValue={props.data?props.data.description:''}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="" ref={priceRef} defaultValue={props.data?props.data.price:''}/>
        </Form.Group>
        <Button variant="success" type="submit">
          Add Product
        </Button>
      </Form>
      </Container>
    )
}


export default AddProduct