import {
    Wrapper,
    TopWrapper,
    FormSection,
    InputSection,
    InputDescription,
    TextAreaSection,
    ButtonSection,
    DescriptionSection,
    SelectSection,
    Instructions,
    EmailSection,
    SuccessIcon,
    SuccessDescription,
    SuccessSection,
    FailureSection,
} from './ContactAuthor.style';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BsEnvelope } from 'react-icons/bs';
import { TextArea } from 'components/molecules/PopUpAddComment/PopUpAddComment.style';
import { Input } from 'components/atoms/Input/Input';
import { useState, useEffect } from 'react';
import { BuyButton } from 'components/molecules/ProductBuyContent/ProductBuyContent.style';
import { SelectStyle } from 'components/atoms/SelectStyle/SelectStyle';
import { testEmailRegex } from 'data/Regex';
import { sendContactAPI } from 'api/contact';
import { BiMessageAltCheck, BiCommentError } from 'react-icons/bi';

const ContactAuthor = () => {
    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [name, setName] = useState('');
    const [error, setError] = useState([false, '']);
    const [success, setSuccess] = useState(false);

    const [messageCategory, setMessageCategory] = useState(0);
    const [message, setMessage] = useState('');

    const messageOptions = [
        { label: 'Błąd', value: 0 },
        { label: 'Współpraca', value: 1 },
    ];

    useEffect(() => {
        setValidEmail(testEmailRegex(email));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            category: messageCategory,
            message,
        };
        try {
            const response = await sendContactAPI(data);
            if (response.code === 1) {
                setError([true, 'Wiadomość zawiera słowa wulgarne']);
            } else if (response.code === 2) {
                setError([true, 'Imie zawiera słowa wulgarne']);
            } else if (response.code === 0) {
                console.log([false, '']);
                setError([false, '']);
                setSuccess(true);
                //clear
                setName('');
                setEmail('');
                setMessageCategory(0);
                setMessage('');
            }
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

    useEffect(() => {
        setTimeout(() => {
            setSuccess(false);
        }, 2000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success]);
    return (
        <Wrapper>
            <SectionDescription title={'Skontaktuj się z autorem'} icon={<BsEnvelope />} />
            <TopWrapper>
                <FormSection>
                    <form onSubmit={handleSubmit}>
                        <InputSection>
                            <Input
                                type="text"
                                id="name"
                                autoComplete="off"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <InputDescription>Imie</InputDescription>
                        </InputSection>
                        <EmailSection>
                            <InputSection>
                                <Input
                                    type="text"
                                    id="email"
                                    style={validEmail || !email ? {} : { border: '1px solid red' }}
                                    autoComplete="off"
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required={messageCategory === 0 ? false : true}
                                />

                                <InputDescription>Email</InputDescription>
                            </InputSection>
                            {emailFocus && email && !validEmail && (
                                <Instructions>
                                    Email jest <br /> nie poprawny.
                                </Instructions>
                            )}
                        </EmailSection>
                        <SelectSection>
                            <SelectStyle width="200px">
                                <select value={messageCategory} onChange={(e) => setMessageCategory(e.target.value)}>
                                    {messageOptions.map((option, index) => (
                                        <option value={option.value} key={index}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </SelectStyle>
                        </SelectSection>
                        <TextAreaSection>
                            <TextArea maxLength={2000} value={message} onChange={(e) => setMessage(e.target.value)} />
                            <InputDescription>Wiadomość</InputDescription>
                        </TextAreaSection>
                        <ButtonSection>
                            <BuyButton>
                                <p>Dodaj opinię</p>
                            </BuyButton>
                            {error[0] ? (
                                <FailureSection>
                                    <SuccessIcon>
                                        <BiCommentError />
                                    </SuccessIcon>
                                    <SuccessDescription>{error[1]}</SuccessDescription>
                                </FailureSection>
                            ) : (
                                <></>
                            )}
                            {success ? (
                                <SuccessSection>
                                    <SuccessIcon>
                                        <BiMessageAltCheck />
                                    </SuccessIcon>
                                    <SuccessDescription>
                                        Wiadomość
                                        <br /> wysłana
                                    </SuccessDescription>
                                </SuccessSection>
                            ) : (
                                <></>
                            )}
                        </ButtonSection>
                    </form>
                </FormSection>
                <DescriptionSection>
                    <p> Cześć, tutaj Igor, MERN developer z zainteresowania. </p>{' '}
                    <p>
                        {' '}
                        Strona na której jesteś to moj pierwszy duży projekt, z założenia rozwijany póki nie uda mi się
                        zmienić pracy 😉
                    </p>
                    <p>
                        {' '}
                        Jeżeli udało Ci się znaleźć błąd w funkcjonowaniu strony, napisz do mnie w tym formularzu
                        kontaktowym 😊{' '}
                    </p>{' '}
                    <p>
                        Pole e-mail nie jest obowiązkowe, jednak na pewno odeśle swoje podziękowania jeżeli je
                        zostawisz.{' '}
                    </p>{' '}
                    <p>
                        {' '}
                        Jeżeli interesuje Cię współpraca wybierz odpowiednia kategorię z rozwijanej listy, wtedy pole
                        E-mail jest już obowiązkowe.{' '}
                    </p>{' '}
                    <br /> <b>Za wszelkie uwagi, z góry dziękuje. 😊</b>
                </DescriptionSection>
            </TopWrapper>
        </Wrapper>
    );
};

export default ContactAuthor;
