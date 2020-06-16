describe('Jasmine Spy', () => {
    it('Spying employee', () => {
        let alice = new Employee('Alice', 4, 'Testing');
        spyOn(alice, 'calculateSalary');
        console.log(alice.getDetails());
        expect(alice.calculateSalary).toHaveBeenCalled();
    });
});