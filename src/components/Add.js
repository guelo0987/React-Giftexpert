import React,{useState} from 'react'







const Add = ({setcategory}) => {


    const [input, setinput] = useState('');

    const handleSubmit = (e)=>{

        e.preventDefault()
        setcategory((cats)=>[input])
    }

    const handleChange = (e)=>{
        setinput(e.target.value)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"  onChange={handleChange}/>
            </form>
        </>
    )
}

export default Add
