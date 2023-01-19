import { Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import React, { useState, useEffect} from 'react';
import getRandomJoke from '../../services/axiosCNService';


const ChuckNorris = () => {

    const [joke, setJoke] = useState(null);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);


    useEffect(() => {
        obtainJoke()
    }, []);    
    
    const obtainJoke = () => {
        getRandomJoke()
        .then((response) => {
            console.log(response.data.value);
            setJoke(response.data.value);
        })
        .catch((error) => {
            alert(`Something went wrong! ${error}`);
        });
    }

    const likeNumber = () => {
        setLike(like+1);
        obtainJoke();
    }

    const dislikeNumber = () => {
        setDislike(dislike+1);
        obtainJoke();
    }

    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <h2>{joke}</h2>

            <div className='mt-5'>
            <Button variant="outlined" color="success" startIcon={<ThumbUpIcon/>} onClick={() => likeNumber()}>
                I like it
            </Button>
            <Button variant="outlined" color="error" startIcon={<ThumbDownAltIcon/>} onClick={() => dislikeNumber()}>
                That's boring
            </Button>
            </div>
            <div className='mt-3'>
                <h5 className='text-success'>Your Likes: <b>{like}</b></h5>
                <h5 className='text-danger'>Your Dislikes: <b>{dislike}</b></h5>
            </div>
        </div>
    );
}

export default ChuckNorris;
