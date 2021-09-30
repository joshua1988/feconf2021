import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  theme: {
    extend: {
      // 폰트 변경 - https://sli.dev/custom/config-windicss.html
      // fontFamily: {},
      colors: {
        vgreen: '#41B883',
        vblue: '#34495E',
      },
    },
  },
  extract: {
    include: [resolve(__dirname, '../**/*.{vue,ts}')],
  },
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
}))
