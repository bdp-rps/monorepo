module.exports = {
  filenameCase: 'kebab',
  dimensions: false,
  template: function(
    { template },
    opts,
    { imports, interfaces, componentName, props, jsx, exports }
  ) {
    const plugins = ['jsx']

    componentName.name = componentName.name.replace('Svg', 'Icon')

    const typeScriptTpl = template.smart({ plugins })
    return typeScriptTpl.ast`${imports}
import Icon from "../Icon"
  ${interfaces}
function ${componentName}(${props}) {
  return ${jsx};
}
export default props => <Icon icon={${componentName}} {...props} />`
  },
}
