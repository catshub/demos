import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'

import demoStore from 'page/Demo/ecology/store'

export function useStores<T = Stores>() {
  return useContext<T>(MobXProviderContext as any)
}

export default { demoStore: new demoStore() }
