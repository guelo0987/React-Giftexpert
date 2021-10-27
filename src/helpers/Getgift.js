


//Esto devuelve una promesa de la coleccion de la imagenes

export const Getgift = async(category)=>{


try{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=14&api_key=7jHzTam7J2eJrfe34XZ8KeS9ldXaI78L`

    const connect = await fetch(url)
    const response = await connect.json()
    const {data} = response

    const gifts = data.map((element)=>{

        return {
            id:element.id,
            title:element.title,
            url:element.images.original.url
        }

    })
    
    
    return gifts
}catch(err){
    console.error(err)
}
}