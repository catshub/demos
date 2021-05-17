import React from 'react'

import Demo from 'page/Demo'

const Routes: Array<{ component: React.ComponentType<any>; path: string | string[] }> = [
  { path: '/demo', component: Demo },
]

export default Routes
