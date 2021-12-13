import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useScrollBlockingOverlay as useBaseScrollBlockingOverlay } from 'ambrose'

export default function useScrollBlockingOverlay(defaultVisible, maxWidth) {
  const [visible, setVisible] = useBaseScrollBlockingOverlay(
    defaultVisible,
    maxWidth
  )

  const router = useRouter()
  useEffect(() => {
    function handleRouteChange(url) {
      setVisible(false)
    }

    router.events.on('beforeHistoryChange', handleRouteChange)

    return () => {
      router.events.off('beforeHistoryChange', handleRouteChange)
    }
  }, [])

  return [visible, setVisible]
}
