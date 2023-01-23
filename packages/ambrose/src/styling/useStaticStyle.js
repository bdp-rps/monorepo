import { useFela } from 'react-fela'

export default function useStaticStyle() {
  const { staticStyle } = useFela()

  return staticStyle
}
