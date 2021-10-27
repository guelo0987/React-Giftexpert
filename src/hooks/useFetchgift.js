import {useState,useEffect} from 'react'
import {Getgift} from '../helpers/Getgift'



function useFetchgift(category) {
   

    const [state, setstate] = useState({

        data:[],
        loading:true
    })

    useEffect(() => {
        
        setTimeout(()=>{

            Getgift(category).then((img)=>{
                setstate({
                    data:img,
                    loading:false,
                })
            })

        },3000)

    }, [category])


    return state

}

export default useFetchgift
