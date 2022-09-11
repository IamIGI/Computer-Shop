import { Wrapper } from './About.styles';

import { getAboutPage } from 'api/contente';
import { useEffect, useState } from 'react';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

import Onas from 'components/molecules/AboutComponents/ONas/Onas';
import DlaczegoMy from 'components/molecules/AboutComponents/DlaczegoMy/DlaczegoMy';
import OAutorzeStrony from 'components/molecules/AboutComponents/OAutorzeStrony/OAutorzeStrony';
import GdzieMnieZnajdziesz from 'components/molecules/AboutComponents/GdzieMnieZnajdziesz/GdzieMnieZnajdziesz';
import MojaUczelnia from 'components/molecules/AboutComponents/MojaUczelnia/MojaUczelnia';

const About = () => {
    const [{ description, lastUpdate }, setContent] = useState({});
    const [waitForFetch, setWaitForFetch] = useState(true);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setWaitForFetch(true);
                const response = await getAboutPage();
                setContent(response);

                setWaitForFetch(false);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        };

        fetchContent();
    }, []);

    return (
        <>
            {waitForFetch ? (
                <LoadingAnimation />
            ) : description === {} ? (
                <p>Błąd serwera</p>
            ) : (
                <Wrapper>
                    <Onas description={description} />
                    <DlaczegoMy description={description} />
                    <OAutorzeStrony description={description} />
                    <GdzieMnieZnajdziesz description={description} />
                    <MojaUczelnia description={description} />
                </Wrapper>
            )}
        </>
    );
};

export default About;
