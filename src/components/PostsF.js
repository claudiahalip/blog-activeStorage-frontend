import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostF from '../components/PostF';
import default_image from '../images/default-image.jpg';

export default function PostsF() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [data, setData] = useState( [] );

    useEffect(() => {
        fetch('http://localhost:3001/posts')
        .then(result => result.json())
        .then((res)=> {
            setIsLoaded(true);
            setData(res);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])

   

    if(error){
         return <div>Error: {error.message}</div>  
    } else if(!isLoaded){
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h2>test with React hooks</h2>
                <div> 
                    {data.map( post => {
                    return <PostF title = {post.title} 
                        content={post.content} 
                        image = {post.image ? post.image : default_image   }
                        key = {post.id}/>
                    })}
                </div>
            </div>
        )
    }
}
