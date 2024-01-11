import { h, Component, ComponentChild } from 'preact';
import { ui } from '@playkit-js/kaltura-player-js';
import { EventManager } from '@playkit-js/playkit-js';
import * as styles from './some-component.component.scss';

// import { h, Component, ComponentChild } from 'preact';
// // import { ui } from '@playkit-js/kaltura-player-js';
// import { EventManager } from '@playkit-js/playkit-js';
// import { Event, preacti18n } from '@playkit-js/playkit-js-ui';
// import * as styles from './some-component.component.scss';

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
