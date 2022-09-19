import { useEffect, useState } from 'react';
import { Wrapper, Icon, Alert, Subtitle, ListSection, Title, GitLink } from './NoRealWebsiteAlert.style';
import { FiAlertTriangle } from 'react-icons/fi';
import { getWebUpdates } from 'api/webUpdates';

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
                <Wrapper onMouseOver={() => setAlert(true)}>
                    <Icon>
                        <FiAlertTriangle />
                    </Icon>
                    {alert ? (
                        <Alert onMouseOut={() => setAlert(false)}>
                            <Title>This is website is not real e-commerce website !!</Title>

                            <Subtitle>Date: {lastUpdate.date}</Subtitle>
                            <Subtitle>Things implemented last patch:</Subtitle>
                            <br />
                            <Subtitle>Added:</Subtitle>
                            <ListSection>
                                <ul>
                                    {lastUpdate.changes.added.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </ListSection>
                            <Subtitle>Fixed:</Subtitle>
                            <ListSection>
                                <ul>
                                    {lastUpdate.changes.fixes.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </ListSection>
                            <GitLink>
                                <a href="https://github.com/users/IamIGI/projects/1/views/1">Project table</a>
                            </GitLink>
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
