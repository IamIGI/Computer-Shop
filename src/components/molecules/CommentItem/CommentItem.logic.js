export const readMoreSplit = (comment) => {
    let opinionSplit = [];
    opinionSplit.push(comment.substr(0, 300));
    comment.substr(300, 2000) !== '' && opinionSplit.push(comment.substr(300, 2000));
    return opinionSplit;
};

export const checkBreakLine = (comment) => {
    return comment.split('也').map((sentence) => (
        <>
            {sentence} <br />
        </>
    ));
};
