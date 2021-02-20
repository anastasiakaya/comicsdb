import React from 'react';

const HTitle = ({number, isBig, children }) => {

    const isBigClass = isBig ? 'title-bg' : '';
    switch (number) {
        case '2':
            return <h2 className={isBigClass}>{children}</h2>;
        case '3':
            return <h3 className={isBigClass}>{children}</h3>;
        case '4':
            return <h4 className={isBigClass}>{children}</h4>;
        case '5':
            return <h5 className={isBigClass}>{children}</h5>;
        case '6':
            return <h6 className={isBigClass}>{children}</h6>;
        default:
            return <h1 className={isBigClass}>{children}</h1>;
    }

}

export default HTitle;
