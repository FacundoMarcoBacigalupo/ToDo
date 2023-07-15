import { useState } from 'react'



const Select = () => {
    const [select, setSelect] = useState(1)

    const options = [
        {id:1, grade:"normal", color:"#352709"},
        {id:2, grade:"relevant", color:"#491901"},
        {id:3, grade:"important", color:"#7D1E1E"}    
    ]


    const handleChange = event => setSelect(event) 


    return (
        <select onChange={event => handleChange(event.target.value)} style={{width:"100px"}}>
            {
                options.map(option => {
                return(
                    <option key={option.id} value={select} style={{backgroundColor: option.color}}>
                        {option.grade}
                    </option>
                )})
            }
        </select>
    )
}



export default Select