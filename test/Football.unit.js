if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }
  
  describe("F.js", function () {
    describe("clubs()", function () {
        it("returns a random clubs", function () {
            sinon.stub(faker.Football, 'clubs').returns('Real Madrid');
            var clubs = faker.Football.clubs();
  
            assert.equal(clubs, 'Real Madrid');
            faker.Football.club.restore();
        });
    });
  
    describe("Nationalteam()", function () {
        it("returns random Nationalteam", function () {
            sinon.stub(faker.Football, 'Nationalteam').returns('India');
            var Nationalteam= faker.Football.Nationalteam();
  
            assert.equal(Nationalteam, 'India');
            faker.Football.Nationalteam.restore();
        });
    });
  
    describe("sponsers()", function () {
      it("returns random sponsers", function () {
        sinon.stub(faker.Football, 'sponsers').returns('Nike');
            var sponsers= faker.Football.sponsers();
  
            assert.equal(sponsers, 'Nike');
            faker.Football.sponsers.restore();
        });
    });
  
    describe("CupChampions()", function () {
        it("returns a random CupChampions", function () {
            sinon.stub(faker.Football, 'CupChampions').returns('Spain');
            var CupChampions = faker.Football.CupChampions();
  
            assert.equal(CupChampions, 'Spain');
            faker.Football.CupChampions.restore();
        });
    });
  
    
  });
  