describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        console.log(asia);
        expect(asia.shortfall).toEqual(5);
    });
    it('profit', function() {
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).toEqual(230);
    })
});