import Font from '../src/font'
import * as emoji from '../src/utils/emoji'
import * as imageUtils from '../src/utils/image'

jest.mock('../src/font')

describe('emoji utils', () => {
  beforeEach(() => {
    imageUtils.resolveImage = jest.fn(() =>
      Promise.resolve({ data: 'image_data' })
    )
  })

  test('Should fetch the right emojis when they have a length > 1 and only 1 part', async () => {
    const testString = 'I ❤️ react-pdf. ✈️ and 🛰️ now render properly.'

    Font.getEmojiSource = jest.fn(() => ({
      format: 'png',
      url: 'https://twemoji.maxcdn.com/2/72x72/',
    }))

    await emoji.fetchEmojis(testString)

    const expectedUrls = [
      'https://twemoji.maxcdn.com/2/72x72/2764.png', // ❤️
      'https://twemoji.maxcdn.com/2/72x72/2708.png', // ✈️
      'https://twemoji.maxcdn.com/2/72x72/1f6f0.png', // 🛰️
    ]

    const calls = imageUtils.resolveImage.mock.calls
    expect(calls[0][0]).toEqual({ uri: expectedUrls[0] })
    expect(calls[1][0]).toEqual({ uri: expectedUrls[1] })
    expect(calls[2][0]).toEqual({ uri: expectedUrls[2] })
  })

  test('Should fetch the right emoji, when it has two parts', async () => {
    const testString = 'This 👍🏿 should be properly fetched.'

    await emoji.fetchEmojis(testString)

    const expectedUrls = [
      'https://twemoji.maxcdn.com/2/72x72/1f44d-1f3ff.png', // 👍🏿
    ]

    const calls = imageUtils.resolveImage.mock.calls
    expect(calls[0][0]).toEqual({ uri: expectedUrls[0] })
  })
})
