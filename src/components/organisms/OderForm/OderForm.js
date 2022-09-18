import { Wrapper, InputLocal, ButtonWrapper, Error } from './OrderForm.style';

import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { recipientDetails } from 'data/FormSchema';

const OrderForm = ({ handleOrderData, comment, handleOrderComment }) => {
    //form logic
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(recipientDetails),
    });

    //there could be issue with that (data)
    const onSubmit = (data) => {
        handleOrderData(data.name, data.street, data.zipCode, data.place, data.email, data.phone, comment);
        //clear data
        reset({ name: '', street: '', zipCode: '', place: '', email: '', phone: '' });
        handleOrderComment('');
    };

    return (
        <>
            <Wrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputLocal name="name" placeholder="Imie i nazwisko lub nazwa firmy" {...register('name')} />
                    <Error>{errors.name && 'Tylko litery'}</Error>
                    <InputLocal name="street" placeholder="Ulica i numer" {...register('street')} />
                    <Error>{errors.street && 'Uzupełnij pole'}</Error>
                    <InputLocal name="zipCode" placeholder="Kod pocztowy (xx-xxx)" {...register('zipCode')} />
                    <Error>{errors.zipCode && 'Wpisz poprawny numer pocztowy'}</Error>
                    <InputLocal name="place" placeholder="Miejscowosc" {...register('place')} />
                    <Error>{errors.place && 'Uzupełnij pole'}</Error>
                    <InputLocal name="email" placeholder="E-mail" {...register('email')} />
                    <Error>{errors.email && 'Wpisz poprawny adres email'}</Error>
                    <InputLocal name="phone" placeholder="Telefon" {...register('phone')} />
                    <Error>{errors.phone && 'Wpisz poprawny numer'}</Error>
                    <ButtonWrapper>
                        <Button type="submit"> Zapisz </Button>
                    </ButtonWrapper>
                </form>
            </Wrapper>
        </>
    );
};

export default OrderForm;
