import { BasePlugin, KalturaPlayer, ui } from "kaltura-player-js";
import { PluginExampleConfig } from "./types/plugin-example-config";
import { h } from "preact";
import {SomeComponent} from "./ui/more-icon/some-component.component";

export const pluginName = "pluginExample";

/**
 * manages the registration of UI services
 * @internal
 */
export class PluginExample extends BasePlugin<PluginExampleConfig> {
  protected static defaultConfig: PluginExampleConfig = {
    developerName: 'whoever it is'
  };

  constructor(name: string, player: KalturaPlayer, config?: PluginExampleConfig) {
    super(name, player, config);
  }

  public static isValid(): boolean {
    return true;
  }

  protected loadMedia() {
    this.addSomeComponent();
  }

  private addSomeComponent() {
    this.player.ui.addComponent({
      label: "plugin-example",
      area: ui.ReservedPresetAreas.InteractiveArea,
      presets: [ui.ReservedPresetNames.Playback, ui.ReservedPresetNames.Live],
      get: () => <SomeComponent developerName={this.config.developerName} />,
    });
  }
}
