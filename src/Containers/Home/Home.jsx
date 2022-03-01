
import React from 'react';
import './Home.css';

import Button from '../../Components/Button/Button';

const Home = () => {


    return(
        <div className='designHome'>
            soy Home
            <Button destino={"Login"} url={"/login"}/>
        </div>
    )
};

export default Home;