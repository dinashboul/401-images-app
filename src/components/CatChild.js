import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 function CatChild(props){

    let [numOfLikes , setNumOfLikes]=useState(0)

    const incrementNumOfLike = () =>{
        setNumOfLikes(numOfLikes+1)
        props.increment()
    } 

    useEffect(()=>{
        console.log("hello")
    })


    
    return(
        <>
            <Card style={{borderRadius:0, boxShadow: "1px 2px 4px 1px silver", width: '18rem', borderRight: "light", margin: 10 }}>
                <Card.Img variant="top" src={props.imgPath} onClick={incrementNumOfLike} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <p>Num of Likes: {numOfLikes}</p>
                    </Card.Text>
                    <Button variant="primary"  onClick={incrementNumOfLike}>😸</Button>
                </Card.Body>
            </Card>
        </>

    )

 }

 export default CatChild;