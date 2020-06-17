describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        console.log(asia);
        expect(asia.shortfall).toEqual(5);
    });
});