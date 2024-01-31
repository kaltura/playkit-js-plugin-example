import { h } from 'preact';
import { BasePlugin, ui } from '@playkit-js/kaltura-player-js';
import { SomeWrappedComponent } from './ui/more-icon/some-component.component';
import { PluginExampleConfig } from './types';

export const pluginName = 'pluginExample';

export class PluginExample extends BasePlugin {
  public static defaultConfig: PluginExampleConfig = {
    someTitle: 'Plugin Example...'
  };

  public static isValid(): boolean {
    return true;
  }

  public loadMedia(): void {
    this.logger.info(`'loadMedia' lifecycle hook - called on 'changesourcestarted' player event'
      'any logic relaying on entry/media metadata should be executed here...'`);
    this.addSomeComponent();
  }

  private addSomeComponent(): void {
    this.player.ui.addComponent({
      label: 'plugin-example',
      area: ui.ReservedPresetAreas.InteractiveArea,
      presets: [ui.ReservedPresetNames.Playback, ui.ReservedPresetNames.Live],
      get: () => <SomeWrappedComponent someTitle={this.config.someTitle} />
    });
  }

  public reset(): void {
    this.logger.info(`'reset' lifecycle hook - called on change media'
      '(every time player.setMedia() / player.loadMedia() API are called)'
      'state reset/re-initialization (for new media/entry) should be executed here...'`);
  }

  public destroy(): void {
    this.logger.info(`'destroy' lifecycle hook - called when player.destroy() API is called)'
      'cleanup logic should be executed here...'`);
  }
}
