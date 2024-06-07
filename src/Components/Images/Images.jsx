import React, { Fragment, useState } from 'react'
import { saveAs } from "file-saver";
import "./Images.css"



const Images = () => {
    const [valor, setValor] = useState("")
    const [result, setResult] = useState([])


    const searchResult = async() =>{
        try {
            const APIKey = "lwKtIZZd0aHb2iacD5IUPtozpMDBkwTunE-PyW2539w"
            const URL = `https://api.unsplash.com/search/photos/?client_id=${APIKey}&query=${valor}&per_page=60`;
            
            const response = await fetch(URL)
            const data = await response.json()
            
            setResult(data.results || [])
            setValor("")
        }
        catch (error) {
            console.log(error.message)
        }
    }


    const handleDowload = (url, nameTheImg) =>{
        saveAs(url, nameTheImg)
    }

    const formCancel = (event) =>{
        event.preventDefault()
        searchResult()
    }


    return (
        <Fragment>
            <form onClick={formCancel}>
                <div style={{textAlign:"center", margin:"auto", marginTop:"20px" ,width:"90%"}}>
                    <input style={{color:"#dddcdc"}} placeholder='Search image' value={valor} onChange={event => setValor(event.target.value)} />
                    <button style={{margin:"20px", width:"50%"}} type="submit">Search</button>
                </div>
            </form>
            
            <section className="imgContainer">
            {
                result.map((image, index) => {
                    return (
                        <div key={index} style={{ textAlign: "center" }}>
                            <img style={{ objectFit: "cover" }} src={image.urls.regular} alt='from API' />
                            <button id="buttonDowload" onClick={() => handleDowload(image.urls.full, "Imagen from ToDo")}>Download</button>
                        </div>
                        )
                })
            }
            </section>
        </Fragment>
    )
}


export default Images