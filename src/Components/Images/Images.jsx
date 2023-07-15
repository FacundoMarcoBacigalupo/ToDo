import React, { Fragment, useState } from 'react'
import { saveAs } from "file-saver";
import "./Images.css"



const Images = () => {
    const [valor, setValor] = useState('')
    const [result, setResult] = useState([])


    const searchResult = async()=>{
        try {
            const APIKey = "9yGMC75xWiOp-fYrPZCQ2xYtFDbFq6ZgltyDRCjC9Uo"
            const URL = `https://api.unsplash.com/search/photos/?client_id=${APIKey}&query=${valor}&per_page=60`;

            const response = await fetch(URL)
            const data = await response.json()
            setResult(data.results)
        }
        catch (error) {
            console.log(error.message)
        }
    }


    const handleDowload = (url, nameTheImg) =>{
        saveAs(url, nameTheImg)
    }



    return (
        <Fragment>
            <div style={{textAlign:"center", margin:"auto", marginTop:"20px" ,width:"90%"}}>
                <input style={{color:"#dddcdc"}} placeholder='Search image' onChange={event => setValor(event.target.value)} />
                <button style={{margin:"20px", width:"50%"}} onClick={() => searchResult()}>Search</button>
            </div>

            <section className="imgContainer">
                {
                result.map((image, index) =>{
                        return(
                            <div key={index} style={{textAlign:"center"}}>
                                <img style={{objectFit:"cover"}} src={image.urls.regular} alt='from API' />
                                <button onClick={() => handleDowload(image.urls.full, image.user.username)} style={{marginTop:"10px", marginBottom:"20px", width:"50%"}}>Dowload</button>
                            </div>
                        )
                    })
                }
            </section>
        </Fragment>
    )
}


export default Images