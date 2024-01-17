import { h, Component, VNode } from 'preact';
import * as styles from './some-component.component.scss';
import { withText } from 'preact-i18n';
import { EventManager } from "@playkit-js/playkit-js";
import { Event } from "@playkit-js/playkit-js-ui";

const { withEventManager } = Event;

type SomeComponentProps = {
  someTitle: string;
  greetingTxt?: string;
  eventManager?: EventManager;
};

@withEventManager
@withText({ greetingTxt: 'plugin-example.greeting' })
export class SomeComponent extends Component<SomeComponentProps, any> {
  render(): VNode<SomeComponentProps> {
    return (
      <div className={styles.someComponent}>
        <span>
          {this.props.greetingTxt} {this.props.someTitle}
        </span>
      </div>
    );
  }
}
