import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

// test for emoji visibility
describe('emoji is visible', () => {
    it('inserts emoji into h2', () => {
        // return element containing emoji in span tag
        const { getByLabelText } = render(<Nav />);
        // use the getByLabelText method and query by the aria-label value
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// test that links are visible
describe('links are visible', () => {
    it('inserts text ino the links', () => {
        // Arrange - verify that the text content is being inserted into the <a> tags using getByTestId()
        const { getByTestId } = render(<Nav />);
        // Assert the valid outcomes using the matcher toHaveTextContent()
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
