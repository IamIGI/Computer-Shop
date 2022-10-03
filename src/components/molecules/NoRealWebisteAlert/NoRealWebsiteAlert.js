import { useEffect, useState } from 'react';
import {
    Wrapper,
    Icon,
    Alert,
    Subtitle,
    ListSection,
    Title,
    GitLink,
    BottomWrapper,
    GetPDF,
} from './NoRealWebsiteAlert.style';
import { FiAlertTriangle } from 'react-icons/fi';
import { getWebUpdates } from 'api/webUpdates';
import { BASE_URL } from 'data/GlobalVariables';

const NoRealWebsiteAlert = () => {
    const [alert, setAlert] = useState(false);
    const [waitForFetch, setWaitForFetch] = useState(false);
    const [updates, setUpdates] = useState({});
    const lastUpdate = updates[updates.length - 1];

    useEffect(() => {
        const fetchWebUpdates = async (code) => {
            setWaitForFetch(true);
            const response = await getWebUpdates();
            setUpdates(response);
            setWaitForFetch(false);
        };

        fetchWebUpdates();
    }, []);

    return (
        <>
            {waitForFetch ? (
                <></>
            ) : (
                <Wrapper onClick={() => setAlert(true)}>
                    <Icon>
                        <FiAlertTriangle />
                    </Icon>
                    {alert ? (
                        <Alert onMouseLeave={() => setAlert(false)}>
                            <Title>This is website is not real e-commerce website !!</Title>

                            <Subtitle>Date: {lastUpdate.date}</Subtitle>
                            <Subtitle>Things implemented last patch:</Subtitle>
                            <br />
                            <Subtitle>Added:</Subtitle>
                            <ListSection>
                                <ul>
                                    {lastUpdate.changes.added.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </ListSection>
                            <Subtitle>Fixed:</Subtitle>
                            <ListSection>
                                <ul>
                                    {lastUpdate.changes.fixes.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </ListSection>
                            <BottomWrapper>
                                <GitLink>
                                    <a
                                        href="https://github.com/users/IamIGI/projects/1/views/1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Project table
                                    </a>
                                </GitLink>
                                <GetPDF>
                                    <a href={`${BASE_URL}/webUpdates/pdf`}>Pobierz pdf</a>
                                </GetPDF>
                            </BottomWrapper>
                        </Alert>
                    ) : (
                        <></>
                    )}
                </Wrapper>
            )}
        </>
    );
};

export default NoRealWebsiteAlert;
