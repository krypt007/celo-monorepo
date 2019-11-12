import { privateToAddress, toChecksumAddress } from 'ethereumjs-util'

export type Address = string

export function eqAddress(a: Address, b: Address) {
  return trimLeading0x(a).toLowerCase() === trimLeading0x(b).toLowerCase()
}

export function trimLeading0x(input: string) {
  return input.startsWith('0x') ? input.slice(2) : input
}

export function prependLeading0x(input: string) {
  return input.startsWith('0x') ? input : `0x${input}`
}

export const privateKeyToAddress = (privateKey: string) => {
  return toChecksumAddress(
    '0x' + privateToAddress(Buffer.from(trimLeading0x(privateKey), 'hex')).toString('hex')
  )
}
