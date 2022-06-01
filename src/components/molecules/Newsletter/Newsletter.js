import React from 'react';
import { DescriptionContent, Icon, TopWrapper, Wrapper, BottomWrapper } from './Newsletter.style';
import { BsMailbox } from 'react-icons/bs';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
const Newsletter = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <DescriptionContent>
                    <h2>Newsletter</h2>
                    <p>
                        Nie przegap żadnej promocji,
                        <br /> zdobywaj dodatkowe rabaty.
                    </p>
                </DescriptionContent>
                <Icon>
                    <BsMailbox />
                </Icon>
            </TopWrapper>
            <BottomWrapper>
                <form>
                    <Input name="email" placeholder="E-mail" />
                    <Button type="submit"> Zapisz się! </Button>
                </form>
            </BottomWrapper>
        </Wrapper>
    );
};

Newsletter.propTypes = {};
export default Newsletter;
