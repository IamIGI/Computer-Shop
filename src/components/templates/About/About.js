import { UserContext } from 'context/UserContext';
import React, { useContext } from 'react';

//TEST ZONE

const About = () => {
    const { userAuth, setUserAuth } = useContext(UserContext);
    console.log(userAuth);
    // console.log(userAuth ? userAuth : 'no user logged in');
    // setUserAuth('Igor')

    // localStorage.removeItem('user');
    return (
        <>
            <h1>About</h1>
        </>
    );
};

export default About;
