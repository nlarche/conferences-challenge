import { expect } from 'chai';
import sinon from 'sinon';
import Controller from './conference-edition.controller';


describe('Test du controller edition : ', () => {
  it('Le controller est instancié', () => {
    const ctrl = new Controller();

    ctrl.getButtonTitle = sinon.spy();

    expect(ctrl).to.be.defined;
    expect(ctrl.getButtonTitle.called).to.be.true;
    expect(ctrl.conference).to.deep.equals({});
  });

  it('getButtonTitle - Ajouter', () => {
    const ctrl = new Controller();

    ctrl.getButtonTitle();

    expect(ctrl.buttonTitle).to.be.equals('Ajouter');
  });

  it('getButtonTitle - Editer', () => {
    const ctrl = new Controller();
    ctrl.conference = {
      id: 1,
    };

    ctrl.getButtonTitle();

    expect(ctrl.buttonTitle).to.be.equals('Editer');
  });
});

