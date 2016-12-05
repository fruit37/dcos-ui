jest.dontMock('../../../../../../src/js/structs/DSLFilterList');
jest.dontMock('../../../../../../src/resources/grammar/SearchDSL.jison');
jest.dontMock('../../constants/HealthStatus');
jest.dontMock('../ServiceAttribHealthFilter');
jest.dontMock('../../../../../../src/js/structs/List');

var DSLFilterList = require('../../../../../../src/js/structs/DSLFilterList');
var SearchDSL = require('../../../../../../src/resources/grammar/SearchDSL.jison');
var HealthStatus = require('../../constants/HealthStatus');
var ServiceAttribHealthFilter = require('../ServiceAttribHealthFilter');
var List = require('../../../../../../src/js/structs/List');

describe('ServiceAttribHealthFilter', function () {

  beforeEach(function () {
    this.mockItems = [
      {getHealth() { return HealthStatus.HEALTHY; }},
      {getHealth() { return HealthStatus.UNHEALTHY; }},
      {getHealth() { return HealthStatus.IDLE; }},
      {getHealth() { return HealthStatus.NA; }}
    ];
  });

  it('Should correctly keep services in healthy state', function () {
    let services = new List({items: this.mockItems});
    let expr = SearchDSL.parse('health:healthy');

    let filters = new DSLFilterList();
    filters.plug(new ServiceAttribHealthFilter());

    expect(expr.filter(filters, services).getItems()).toEqual([
      this.mockItems[0]
    ]);
  });

  it('Should correctly keep services in unhealthy state', function () {
    let services = new List({items: this.mockItems});
    let expr = SearchDSL.parse('health:unhealthy');

    let filters = new DSLFilterList();
    filters.plug(new ServiceAttribHealthFilter());

    expect(expr.filter(filters, services).getItems()).toEqual([
      this.mockItems[1]
    ]);
  });

  it('Should correctly keep services in idle state', function () {
    let services = new List({items: this.mockItems});
    let expr = SearchDSL.parse('health:idle');

    let filters = new DSLFilterList();
    filters.plug(new ServiceAttribHealthFilter());

    expect(expr.filter(filters, services).getItems()).toEqual([
      this.mockItems[2]
    ]);
  });

  it('Should correctly keep services in n/a state', function () {
    let services = new List({items: this.mockItems});
    let expr = SearchDSL.parse('health:na');

    let filters = new DSLFilterList();
    filters.plug(new ServiceAttribHealthFilter());

    expect(expr.filter(filters, services).getItems()).toEqual([
      this.mockItems[3]
    ]);
  });

  it('Should correctly keep nothing on unknown states', function () {
    let services = new List({items: this.mockItems});
    let expr = SearchDSL.parse('health:foo');

    let filters = new DSLFilterList();
    filters.plug(new ServiceAttribHealthFilter());

    expect(expr.filter(filters, services).getItems()).toEqual([
    ]);
  });

});
