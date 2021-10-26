import React, { useEffect, useState } from 'react';
import HomeDetails from '../HomeDetails/HomeDetails';

const Home = () => {
    const [imgs, setImg] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setImg(data));
    }, []);
    console.log(imgs);
    return (
        // col-12 col-md-4 col-lg-4"
        <div>
            <div className="row">
                {imgs.map(img => <div className="col-12 col-md-6 col-lg-4"><HomeDetails key={img.key} details={img}></HomeDetails></div>)}
            </div>
        </div>
    );
};

export default Home;