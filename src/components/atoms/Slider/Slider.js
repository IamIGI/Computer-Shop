import { Input } from './Slider.style';

const Slider = ({ max, value, handleValue }) => {
    const getBackgroundSize = () => {
        return {
            backgroundSize: `${(value * 100) / max}% 100%`,
        };
    };
    return (
        <Input
            type="range"
            min="0"
            max={max}
            onChange={(e) => handleValue(e.target.value)}
            style={getBackgroundSize()}
            value={value}
        />
    );
};

export default Slider;
