import { createContext, useState } from 'react';

const RefreshContext = createContext({});

export const RefreshProvider = ({ children }) => {
    const [refresh, setRefresh] = useState(false);
    console.log(`Refresh context: ${refresh}`);

    return <RefreshContext.Provider value={{ refresh, setRefresh }}>{children}</RefreshContext.Provider>;
};

export default RefreshContext;
