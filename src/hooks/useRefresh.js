import { useContext } from 'react';
import RefreshContext from 'context/refreshProvider';

const useRefresh = () => {
    return useContext(RefreshContext);
};

export default useRefresh;
