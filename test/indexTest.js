const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')

describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
       expect(companyName).to.equal('Scuber');
      expect(companyName).to.equal('Scuber');
    });

    it('is defined as a const', function () {
      expect(js).to.match(/const companyName/, "Expected companyName to be a const");
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Scuber', function () {
      expect(mostProfitableNeighborhood).to.equal('Scuber');
    });

    it('does not raise error if the mostProfitableNeighborhood is changed', function () {
      expect(function () { mostProfitableNeighborhood = 'Upper West Side' }).to.not.throw(TypeError);
    });

    it('is not defined as a const', function () {
      expect(js).not.to.match(/const mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood not to be a const");
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Scaber', function () {
      expect(companyCeo).to.equal('Scaber');
    });

    it('does not raise error if the companyCeo is changed', function () {
      expect(function () { companyCeo = 'Scaber' }).to.not.throw(TypeError);
    });

    it('is not defined as a const', function () {
      expect(js).not.to.match(/const companyCeo/, "Expected companyCeo not to be a const");
    });
  });
});
