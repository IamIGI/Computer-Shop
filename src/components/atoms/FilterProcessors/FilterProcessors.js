import { DropDownList, Title } from './FilterProcessors.style';

const FilterProcessors = ({ data, filterData, handleProcessors }) => {
    return (
        <>
            <Title>{filterData.title}</Title>
            <DropDownList
                isObject={false}
                onRemove={(e) => handleProcessors(e)}
                onSelect={(e) => handleProcessors(e)}
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

export default FilterProcessors;
