import React, {useState} from 'react';
import CatChild from './CatChild';
import data from './data.json'
function Parent() {

    let [totalNumOfTunas, setTotalNumOfTunas] = useState(0);

    const incrementTotalLikes = () => {
        setTotalNumOfTunas(totalNumOfTunas+1)
    }
    return(
        <>

        <h2 style={{background:"Green" ,color:"white", marginBottom:"10rem" ,marginTop:"2rem" ,textAlign: 'center',border:"20px"}}>Total Num of Likes : {totalNumOfTunas}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
                {data.map(card => {
                    return (
                        <CatChild 
                        name={card.title}
                        imgPath={card.image_url}
                        increment={incrementTotalLikes}
                        
                        />
                    )
                })}
        {/* <div style={{display:"flex", flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
          
          <CatChild 
            name="nature1"
            imgPath="https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg"
            increment={incrementTotalLikes}
          />
          <CatChild 
            name="nature2"
            imgPath="https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg"
            increment={incrementTotalLikes}
          />

        <CatChild 
            name="nature3"
            imgPath="https://wallpapercave.com/wp/u9AVLry.jpg"
            increment={incrementTotalLikes}
          /> */}
    
          </div>
        </>
    )
}

export default Parent;