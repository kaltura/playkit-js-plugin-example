import { expectElementExists } from './utils/expects';
import { getSomeComponent } from './utils/getters';
import { loadPlayerAndSetMedia } from './utils/setup';

describe('plugin example', () => {
  it('should load the plugin', () => {
    loadPlayerAndSetMedia({}).then((player) => {
      expect(player).to.exist;
      expectElementExists(getSomeComponent);
    });
  });
});
