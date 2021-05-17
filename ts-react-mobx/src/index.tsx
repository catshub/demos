import React from 'react'
import { Provider } from 'mobx-react'
import App from 'App'
import store from 'store'

// 其他资源
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

export default function () {
  return (
    <Provider {...store}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Provider>
  )
}
