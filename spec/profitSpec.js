describe('province', function() {
    let asia;
    beforeEach(function() {
        asia = new Province(sampleProvinceData());
    })
    it('shortfall', function() {
        console.log(asia);
        expect(asia.shortfall).toEqual(5);
    });
    it('profit', function() {
        expect(asia.profit).toEqual(230);
    })
});