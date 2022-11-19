import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { PageButton } from './PageMenu.style';

function showButtons(arrayOfPages, currentPage) {
    if (arrayOfPages.length - currentPage < 5) return arrayOfPages.slice(-5);
    return arrayOfPages.slice(currentPage - 1, currentPage - 1 + 5);
}

const PageMenu = ({ countPageButtons, pageNr, buttonClicked }) => {
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
            {showButtons(countPageButtons, pageNr).map((item, index) => (
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
