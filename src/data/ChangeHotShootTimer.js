import { changeHotShootPromotion } from 'api/hotShoot';

export function changeHotShootTimer() {
    setInterval(async () => {
        let date = new Date().toString();
        let time = date.split(' ')[4];
        let hours = time.split(':')[0];
        let minutes = time.split(':')[1];
        let seconds = time.split(':')[2];
        if ((hours === '10' || hours === '22') && minutes === '00' && seconds === '00') {
            const changeHotShoot = async () => {
                await changeHotShootPromotion();
            };

            changeHotShoot();
        }
    }, 1000);
}
