describe('Setup and Teardown', () => {
    let count = 0;
    let velocity = 0;
    beforeEach(() => {
        velocity = 100;
        count++;
        console.log('Count is ' + count);
    });

    afterEach(() => {
        velocity = 0;
        console.log('Some spec just finished and this function is called');
    });

    beforeAll(() => {
        console.log('This is called only one, specs are about to run.');
    });

    afterAll(() => {
        console.log('All specs finished, time for cleanup');
    });

    it('Testing Velocity and reducing velocity', () => {
        expect(velocity).toEqual(100);
        velocity = 20;
        expect(velocity).toBe(20);
    })

    it('Testing Velocity', () => {
        expect(velocity).toEqual(100);
        expect(true).toEqual(true);
    });
});