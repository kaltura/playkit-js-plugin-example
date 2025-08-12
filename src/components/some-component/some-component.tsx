import { h, Component, VNode } from 'preact';
import * as styles from './some-component.scss';
import { withText } from 'preact-i18n';
import { EventManager } from '@playkit-js/playkit-js';

type SomeComponentProps = {
  someTitle: string;
  greetingTxt?: string;
  eventManager?: EventManager;
};

function _SomeComponent({ greetingTxt, someTitle }: SomeComponentProps) {
  return (
    <div data-testid="some-component" className={styles.someComponent}>
      <span>
        {greetingTxt} {someTitle}
      </span>
    </div>
  );
}

const SomeComponent = withText({ greetingTxt: 'plugin-example.greeting' })(_SomeComponent);

export { SomeComponent };
