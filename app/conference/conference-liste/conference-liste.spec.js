import { expect } from 'chai';
import sinon from 'sinon';
import Controller from './conference-liste.controller';


describe('Test du controller de la liste : ', () => {
  it('Le controller est instancié', () => {
    const ctrl = new Controller();
    expect(ctrl).to.be.not.undefined;
  });

  it('La fonction edit doit appeler la fonction onEdit', () => {
    const ctrl = new Controller();

    ctrl.onEdit = sinon.spy();

    ctrl.edit('test');

    expect(ctrl.onEdit.called).to.be.true;

    const event = { $event: { conference: 'test' } };

    expect(ctrl.onEdit.calledWith(event)).to.be.true;
  });
});

