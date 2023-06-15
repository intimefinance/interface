import { AddressMap } from '@uniswap/smart-order-router'
import { UNIVERSAL_ROUTER_ADDRESS as _UNIVERSAL_ROUTER_ADDRESS } from '@uniswap/universal-router-sdk'

import { SupportedChainId } from './chains'

const CORE_UNIVERSAL_ROUTER_ADDRESS: AddressMap = {
  [SupportedChainId.CORE_TEST]: '0xfb2e508c69fe2c2c7de33952008fa75420fa5448',
}

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  try {
    return _UNIVERSAL_ROUTER_ADDRESS(chainId)
  } catch {
    return CORE_UNIVERSAL_ROUTER_ADDRESS[chainId]
  }
}
