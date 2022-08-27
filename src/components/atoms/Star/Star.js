import { StarStyle } from './Star.style';

const Star = ({ opinionRating, rate }) => {
    return <StarStyle style={opinionRating >= rate ? { '--star-color': 'orange' } : { '--star-color': 'lightGrey' }} />;
};

export default Star;
