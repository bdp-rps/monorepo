import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { songId } = router.query

  const songData = require('@bdp-rps/liedgut/lib/songs/' + songId)

  if (!songData) {
    return <div>Something went wrong.</div>
  }

  return (
    <div>
      <pre>{JSON.stringify(songData.default, null, 2)}</pre>
      <br />
      <pre>{songData.default.content}</pre>
    </div>
  )
}

Page.getInitialProps = () => ({})
