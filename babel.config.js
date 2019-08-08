module.exports = (api) => {
  api.cache(true)

  const presets = ['env', 'react']
  const plugins = [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
      }
    ]
  ]

  return {
    presets,
    plugins
  }
}