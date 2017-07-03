import { expect } from 'chai';
import sinon from 'sinon';

import '../../../test/test-helper';

import Controller from './conference-edition.controller';


describe('Test du controller edition : ', () => {
  it('Le controller est instancié', () => {
    const ctrl = new Controller();
    expect(ctrl).to.be.not.undefined;
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

