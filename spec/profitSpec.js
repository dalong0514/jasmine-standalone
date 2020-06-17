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
    it('change production', function() {
        asia.producers[0].production = 20;
        expect(asia.shortfall).toEqual(-6);
        expect(asia.profit).toEqual(292);
    })
    it('zero demand', function() {
        asia.demand = 0;
        expect(asia.shortfall).toEqual(-25);
        expect(asia.profit).toEqual(0);
    })
    it('negative demand', function() {
        asia.demand = -1;
        expect(asia.shortfall).toEqual(-26);
        expect(asia.profit).toEqual(-10);
    })
});

describe('no producers', function() {
    let noProducers;
    beforeEach(function() {
        const data = {
            name: 'No producers',
            producers: [],
            demand: 30,
            price: 20,
        };
        noProducers = new Province(data);
        console.log(noProducers);
    });
    it('shortfall', function() {
        expect(noProducers.shortfall).toEqual(30);
    });
    it('profit', function() {
        expect(noProducers.profit).toEqual(0);
    })
})