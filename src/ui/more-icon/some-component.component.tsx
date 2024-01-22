import { h, Component, VNode } from 'preact';
import * as styles from './some-component.component.scss';
import { withText } from 'preact-i18n';
import { EventManager } from '@playkit-js/playkit-js';

type SomeComponentProps = {
  someTitle: string;
  greetingTxt?: string;
  eventManager?: EventManager;
};

function SomeComponent({greetingTxt, someTitle}: SomeComponentProps) {
  return (
    <div className={styles.someComponent}>
      <span>
        {greetingTxt} {someTitle}
      </span>
    </div>
  );
}

const SomeWrappedComponent = withText({ greetingTxt: 'plugin-example.greeting' })(SomeComponent);

export { SomeWrappedComponent };
