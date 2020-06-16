describe('Setup and Teardown', () => {
    let count = 0;
    let velocity = 0;
    beforeEach(() => {
        this.velocity = 100;
    });

    afterEach(() => {
        this.velocity = 0;
    });

    it('Testing Velocity and reducing velocity', () => {
        expect(this.velocity).toEqual(100);
        this.velocity = 20;
        expect(this.velocity).toBe(20);
        this.acceleration = 5;
    })

    it('Testing Velocity', () => {
        expect(this.acceleration).toBeUndefined();
    });
});