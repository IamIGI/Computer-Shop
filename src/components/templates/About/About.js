import { UserContext } from 'context/UserContext';
import React, { useContext } from 'react';

//TEST ZONE

const About = () => {
    const { userData } = useContext(UserContext);
    console.log(userData);
    return (
        <>
            {userData.userLogged}
            <h1>About</h1>
        </>
    );
};

export default About;
