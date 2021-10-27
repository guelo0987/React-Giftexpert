import React,{useState} from 'react';
import Add from './components/Add';
import Search from './components/Search';




function App() {

    const [category, setcategory] = useState(['One Punch'])



    return (
        <div>
            <h1>Gift Expert App</h1>
            <Add setcategory={setcategory}/>
            <hr />
            
            
            <ul>
                {category.map((element)=>(
                    <Search category={element} key={element}/>
                ))}
            </ul>

        </div>
    )
}

export default App
