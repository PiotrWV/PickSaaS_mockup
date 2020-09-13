import React from 'react';
import style from './Home.css';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

function Home(){
    return (
        <div className = 'home'>
            <Banner />

            <div className='cardSection'>
                <Card
                    src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Lorem ipsum dolor"
                    description="Ed ut perspiciatis unde omnis iste natus error."
                 />
                <Card 
                    src="https://images.pexels.com/photos/776615/pexels-photo-776615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Quis autem vel"
                    description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                />
                <Card
                    src="https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    title="Nemo enim ipsam"
                    description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil"

                 />
            </div>
            
        </div>
    )
}

export default Home