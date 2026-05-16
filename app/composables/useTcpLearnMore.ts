import { inject } from 'vue'
import { TCP_OPEN_LEARN_MORE } from '~/constants/the-case-process'

export function useTcpLearnMore() {
  return inject(TCP_OPEN_LEARN_MORE, null) as (() => void | Promise<void>) | null
}
