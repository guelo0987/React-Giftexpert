import React from 'react'
import  useFetchgift  from '../hooks/useFetchgift';
import Giftgrid from '../components/Giftgrid'




// El uso principal de este componente es que solo le pasamos como props el estado del hook y que busque con la api, ya para poder imprimirlo hay que usar el use state para poder ponerle carcteristicas

const Search = ({category}) => {

    
   
    const {data, loading} = useFetchgift(category)
    

    return (
        <>
            <h2 className='animate__animated animate__bounceInDown'>{category}</h2>

             {loading && <div className="loader">Loading...</div>}

            <div className="content">
                {
                    data.map((element)=>(
                        <Giftgrid data={element} key={element.id}/>
                    ))
                }

            </div>  
        </>
    )
}

export default Search;

