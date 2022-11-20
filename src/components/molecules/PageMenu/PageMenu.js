import React, { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { PageButton } from './PageMenu.style';
import useWindowSize from 'hooks/useWindowSize';

function showButtons(arrayOfPages, currentPage, numberOfButtons) {
    if (arrayOfPages.length - currentPage < numberOfButtons) return arrayOfPages.slice(-numberOfButtons);
    return arrayOfPages.slice(currentPage - 1, currentPage - 1 + numberOfButtons);
}

function handleNumberOfButtons(windowSize) {
    if (windowSize.width <= 470) {
        return 4;
    } else {
        return 5;
    }
}

const PageMenu = ({ countPageButtons, pageNr, buttonClicked }) => {
    const windowSize = useWindowSize();
    const [numberOfButtons, setNumberOfButtons] = useState(5);

    useEffect(() => {
        setNumberOfButtons(handleNumberOfButtons(windowSize));
    }, [windowSize]);

    return (
        <>
            {countPageButtons.length > 5 && (
                <PageButton
                    onClick={() => {
                        pageNr === 1 ? buttonClicked(pageNr) : buttonClicked(pageNr - 1);
                    }}
                >
                    <AiOutlineLeft />
                </PageButton>
            )}
            {showButtons(countPageButtons, pageNr, numberOfButtons).map((item, index) => (
                <PageButton currentPage={item === pageNr} key={index} onClick={() => buttonClicked(item)}>
                    {item}
                </PageButton>
            ))}

            {countPageButtons.length > 5 && (
                <PageButton
                    onClick={() => {
                        pageNr === countPageButtons.length ? buttonClicked(pageNr) : buttonClicked(pageNr + 1);
                    }}
                >
                    <AiOutlineRight />
                </PageButton>
            )}
        </>
    );
};

export default PageMenu;
