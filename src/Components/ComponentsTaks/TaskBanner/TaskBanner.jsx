import React from 'react'


const Taskbanner = ({ taskItems }) => {
    return (
        <h4 className="text-center p-4 fw-bold">
            <span style={{color:"rgb(184, 184, 184)"}}>
                ({ taskItems.filter((t) => !t.done).length } Tasks To Do)
            </span>
        </h4>
    )
}


export default Taskbanner