import useRefresh from 'hooks/useRefresh';

const ChangeHotShootTimer = () => {
    const { refresh, setRefresh } = useRefresh();

    setInterval(async () => {
        let date = new Date().toString();
        let time = date.split(' ')[4];
        let hours = time.split(':')[0];
        let minutes = time.split(':')[1];
        let seconds = time.split(':')[2];
        if ((hours === '10' || hours === '22') && minutes === '00' && seconds === '00') {
            console.log('Refresh hotShootPromotion: 0' + refresh, !refresh);
            setRefresh(!refresh);
        }
    }, 1000);

    return <></>;
};

export default ChangeHotShootTimer;
