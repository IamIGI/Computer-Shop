import { DropDownList, Title } from './FilterProducers.style';

const FilterProducers = ({ data, filterData, handleProducers }) => {
    return (
        <>
            <Title>{filterData.title}</Title>
            <DropDownList
                isObject={false}
                onRemove={(e) => handleProducers(e)}
                onSelect={(e) => handleProducers(e)}
                options={filterData.filters}
                placeholder="Wybierz"
                selectedValues={data}
                style={{
                    chips: {
                        // color: 'black',
                        background: '#fcb040',
                    },
                    multiselectContainer: {
                        color: '#737C8E',
                    },
                    searchBox: {
                        'padding-left': '20px',
                        'border-radius': '30px',
                    },
                    optionContainer: {
                        // To change css for option container
                        'margin-left': '5%',
                        width: '90%',
                        border: '1px solid',
                        'border-radius': '5px',
                    },
                }}
            />
        </>
    );
};

export default FilterProducers;
