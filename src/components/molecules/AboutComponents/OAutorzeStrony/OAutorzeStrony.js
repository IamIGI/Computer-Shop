import { Title, Description } from 'components/templates/About/About.styles';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import {
    StackSection,
    UsePopUp,
    PopUp,
    Stack,
    StackImage,
    StackTitle,
    StackLibrarySection,
    StackLibrary,
    StackStars,
} from './OAutorzeStrony.style';
import Star from 'components/atoms/Star/Star';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { useState } from 'react';

const OAutorzeStrony = ({ description }) => {
    const [displayPopUp, setDisplayPopUp] = useState('');
    const openPopUp = (index) => {
        setDisplayPopUp(index);
    };

    const closePopUp = (index) => {
        setDisplayPopUp(index);
    };
    return (
        <>
            <Title>
                <SectionDescription title={description[2].title} icon={<BsPersonBoundingBox />} />
            </Title>
            <Description>
                {description[2].content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </Description>
            <StackSection>
                {description[2].extras.map((extra, index) => (
                    <Stack key={index}>
                        <StackImage>
                            <img src={extra.image} alt="Stack" />
                        </StackImage>
                        <StackTitle>{extra.name}</StackTitle>
                        {extra.libraries.length !== 0 ? (
                            <>
                                <UsePopUp onMouseOver={() => openPopUp(index)} onMouseOut={() => closePopUp('')}>
                                    <AiOutlineInfoCircle />
                                </UsePopUp>
                                {displayPopUp === index ? (
                                    <PopUp>
                                        <StackLibrarySection>
                                            <ul>
                                                {extra.libraries.map((library, index) => (
                                                    <li key={index}>
                                                        <StackLibrary>{library}</StackLibrary>
                                                    </li>
                                                ))}
                                            </ul>
                                        </StackLibrarySection>
                                    </PopUp>
                                ) : (
                                    <></>
                                )}
                            </>
                        ) : (
                            <></>
                        )}

                        <StackStars>
                            {[...Array(6)].map((star, index) => {
                                index += 1;
                                return <Star opinionRating={extra.score} rate={index} key={index} />;
                            })}
                        </StackStars>
                    </Stack>
                ))}
            </StackSection>
        </>
    );
};

export default OAutorzeStrony;
