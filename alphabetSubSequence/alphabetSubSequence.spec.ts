import { alphabetSubsequence } from './alphabetSubsequence';

describe(alphabetSubsequence.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'effg';

        // act
        const response = alphabetSubsequence(data);

        // assert
        expect(response).toBe(false);
    });

    it('Test 2', () => {
        // arrange
        const data = 'ace';

        // act
        const response = alphabetSubsequence(data);

        // assert
        expect(response).toBe(true);
    });

    it('Test 3', () => {
        // arrange
        const data = 'zab';

        // act
        const response = alphabetSubsequence(data);

        // assert
        expect(response).toBe(false);
    });
});
