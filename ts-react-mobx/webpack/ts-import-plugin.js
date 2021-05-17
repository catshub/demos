/** import plugin  */
const tsImportPluginFactory = require('ts-import-plugin')
const getCustomTransformers = () => ({
  before: [
    tsImportPluginFactory([
      { libraryName: 'antd', style: 'css' },
      { libraryName: 'lodash', libraryDirectory: null, camel2DashComponentName: false, style: false },
    ]),
  ],
})
module.exports = getCustomTransformers
