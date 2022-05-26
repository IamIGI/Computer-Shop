import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from './AddUser';
import DashBoard from './DashBoard';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';

describe('Add user test:', () => {
    it('User adding, appear on DashBoard', () => {
        renderWithProviders(
            <>
                <AddUser />
                <DashBoard />
            </>
        ); // you render using this file
        fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Duncan' } });
        fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55' } });
        fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.2' } });
        fireEvent.click(screen.getByTestId('Consent'));
        fireEvent.click(screen.getByText('Add'));
        screen.getByText('Duncan');
    });
    it('Prevents adding new user if the consent is not checked', () => {
        renderWithProviders(
            <>
                <AddUser />
                <DashBoard />
            </>
        ); // you render using this file
        fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Paul' } });
        fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55' } });
        fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.2' } });
        fireEvent.click(screen.getByText('Add'));
        const newUser = screen.queryByText('Paul'); //search matching text, if nothing find, return null
        expect(newUser).not.toBeInTheDocument();
    });
});
