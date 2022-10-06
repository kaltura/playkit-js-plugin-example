import { expect } from 'chai';
import { createSandbox, spy } from 'sinon';
import '../../src/index';
import { setup } from 'kaltura-player-js';
import { IconComponent } from '../mock/compenents/icon.component';
import { config, targetId } from '../mock/config';
import { mediaData } from '../mock/media-sourc';
import '../mock/plugins/index';

describe('Upper Bar Manager', () => {
  let player;
  let upperBarManagerService;
  const sandbox = createSandbox();

  before(() => {
    const element = document.createElement('DIV');
    element.id = targetId;
    document.body.appendChild(element);
  });

  after(() => {
    document.getElementById(targetId).remove();
  });

  afterEach(() => {
    player.destroy();
    for (const element of document.getElementsByTagName('video')) {
      element.remove();
    }
    sandbox.restore();
  });

  it('Add icon', async () => {
    // Given
    player = setup(config);
    upperBarManagerService = player.getService('upperBarManager');
    player.setMedia({ sources: { ...mediaData } });
    await player.ready();

    // Do
    const iconId = upperBarManagerService.add({ label: 'icon', component: IconComponent, onClick: () => {} });

    // Expect
    expect(upperBarManagerService.componentsRegistry.size).to.equal(1);
    expect(upperBarManagerService.componentsRegistry.get(iconId).label).equal('icon');
  });
});
