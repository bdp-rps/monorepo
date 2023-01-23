import { useFela } from 'react-fela'

export default function useRenderer() {
  const { renderer } = useFela()

  return renderer
}
