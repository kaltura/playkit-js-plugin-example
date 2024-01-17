import { h } from 'preact';
import { BasePlugin, ui } from '@playkit-js/kaltura-player-js';
import { SomeComponent } from './ui/more-icon/some-component.component';
import { PluginExampleConfig } from "./types";

export const pluginName = 'pluginExample';

export class PluginExample extends BasePlugin<PluginExampleConfig> {
  public static defaultConfig = {
    someTitle: 'Plugin Example...'
  };

  public static isValid(): boolean {
    return true;
  }

  public loadMedia(): void {
    this.addSomeComponent();
  }

  private addSomeComponent(): void {
    this.player.ui.addComponent({
      label: 'plugin-example',
      area: ui.ReservedPresetAreas.InteractiveArea,
      presets: [ui.ReservedPresetNames.Playback, ui.ReservedPresetNames.Live],
      get: () => <SomeComponent someTitle={this.config.someTitle} />
    });
  }
}
