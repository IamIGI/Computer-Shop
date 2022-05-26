import React, { useState } from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Input with button', () => {
    it('Renders the components', () => {
        renderWithProviders(<FormField label="name" name="name" id="name" />); // you render using this file
    });
});
