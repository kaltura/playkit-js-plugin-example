import { BasePlugin, ui } from '@playkit-js/kaltura-player-js';
import { PluginExampleConfig } from './types/plugin-example-config';
import { h } from 'preact';
import { SomeComponent } from './ui/more-icon/some-component.component';

export const pluginName = 'pluginExample';

export class PluginExample extends BasePlugin<PluginExampleConfig> {
  protected static defaultConfig: PluginExampleConfig = {
    developerName: 'whoever you are'
  };

  public static isValid(): boolean {
    return true;
  }

  protected loadMedia(): void {
    this.addSomeComponent();
  }

  private addSomeComponent(): void {
    this.player.ui.addComponent({
      label: 'plugin-example',
      area: ui.ReservedPresetAreas.InteractiveArea,
      presets: [ui.ReservedPresetNames.Playback, ui.ReservedPresetNames.Live],
      get: () => <SomeComponent developerName={this.config.developerName} />
    });
  }
}
