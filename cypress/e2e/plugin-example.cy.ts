import { loadPlayerAndSetMedia } from './utils/setup';

describe('plugin example', () => {
  it('should load the plugin', () => {
    loadPlayerAndSetMedia({}).then((player) => {
      expect(player).to.exist;
    });
  });
});
