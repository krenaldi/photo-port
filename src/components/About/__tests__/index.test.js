import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// ensure that after each test won't have any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', () => {
    // First Baseline Test - verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });
    // Second Test - Compare Snapshots of DOM
    it('matches snapshot DOM node structure', () => {
        // use the asFragment function to return a snapshot of the About component
        const { asFragment } = render(<About />);
        // test and compare whether the expected and actual outcomes match using se the toMatchSnapshot matcher to assert that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    })
})

