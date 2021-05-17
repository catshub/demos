import React from 'react'
import { inject, observer } from 'mobx-react'
import CSSModules from 'react-css-modules'
import styles from './index.less'

@inject('demoStore')
@observer
@CSSModules(styles)
export default class Main extends React.Component<PropsMobx<'demoStore'>> {
  render() {
    return <div styleName="demo">DEMO</div>
  }
}
