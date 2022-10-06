import { h, Component, ComponentChild, createRef, RefObject } from "preact";
import { PlaykitUI, ui } from "kaltura-player-js";
import * as styles from "./some-component.component.scss";

import EventManager = PlaykitUI.EventManager;

const { Icon, Tooltip } = ui.Components;
const { withEventManager } = ui.Event;
const { withText } = ui.preacti18n;
type MoreIconState = {
  toggle: boolean;
};
type SomeComponentProps = {
  developerName: string;
  moreIconTxt?: string;
  eventManager?: EventManager;
};

@withEventManager
@withText({ moreIconTxt: "controls.moreIcon" })
export class SomeComponent extends Component<SomeComponentProps, MoreIconState> {
  constructor() {
    super();
  }

  render(): ComponentChild {
    return <div className={styles.someComponent}>
      <span>{this.props.moreIconTxt} {this.props.developerName} !!!</span>
    </div>;
  }
}
