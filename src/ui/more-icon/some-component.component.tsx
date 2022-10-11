import { h, Component, ComponentChild } from 'preact';
import { PlaykitUI, ui } from 'kaltura-player-js';
import * as styles from './some-component.component.scss';

import EventManager = PlaykitUI.EventManager;

const { withEventManager } = ui.Event;
const { withText } = ui.preacti18n;
type MoreIconState = {
  toggle: boolean;
};
type SomeComponentProps = {
  developerName: string;
  greetingTxt?: string;
  eventManager?: EventManager;
};

@withEventManager
@withText({ greetingTxt: 'plugin-example.greeting' })
export class SomeComponent extends Component<SomeComponentProps, MoreIconState> {
  constructor() {
    super();
  }

  render(): ComponentChild {
    return (
      <div className={styles.someComponent}>
        <span>
          {this.props.greetingTxt} {this.props.developerName} !!!
        </span>
      </div>
    );
  }
}
