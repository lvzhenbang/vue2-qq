// 单组件加载

// 加载基础样式
import 'muse-components/styles/base.less'
import appBar from 'muse-components/appBar'
import avatar from 'muse-components/avatar'
import badge from 'muse-components/badge'
import * as bottomNav from 'muse-components/bottomNav'
import flatButton from 'muse-components/flatButton'
import iconButton from 'muse-components/iconButton'
import chip from 'muse-components/chip'
import drawer from 'muse-components/drawer'
import icon from 'muse-components/icon'
import * as list from 'muse-components/list'
import textField from 'muse-components/textField'
import * as tabs from 'muse-components/tabs'
import divider from 'muse-components/divider'
import subHeader from 'muse-components/subHeader'
// 高分辨率屏的处理
import {retina} from 'muse-components/utils'

const components = {
  appBar,
  avatar,
  badge,
  ...bottomNav,
  flatButton,
  iconButton,
  chip,
  drawer,
  icon,
  ...list,
  textField,
  ...tabs,
  divider,
  subHeader
}

export default {
  install (Vue) {
    Object.keys(components).forEach((key) => {
      Vue.component(components[key].name, components[key])
    })
    retina()
  }
}
