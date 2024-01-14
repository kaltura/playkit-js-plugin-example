import { registerPlugin } from '@playkit-js/kaltura-player-js';
import { pluginName, PluginExample } from './plugin-example';
import { PluginExampleConfig } from './types/plugin-example-config';

registerPlugin<PluginExample, PluginExampleConfig>(pluginName, PluginExample);

export {PluginExampleConfig}
