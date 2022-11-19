import { Wrapper, Icon, BigIcon, LinkDescription } from './StyledLink.style';

const StyledLink = ({ target, icon, description = '', smallScreen, borderRight = true }) => {
    return (
        <Wrapper to={target} borderRight={borderRight}>
            <span>{smallScreen ? <BigIcon>{icon}</BigIcon> : <Icon>{icon}</Icon>}</span>
            {description !== '' && <LinkDescription>{description}</LinkDescription>}
        </Wrapper>
    );
};

export default StyledLink;
