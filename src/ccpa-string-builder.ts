const SPEC_VERSION = 1
const NA = '-'
const YES = 'Y'
const NO = 'N'

const _convert = (value: boolean): string => {
  switch (value) {
    case true:
      return YES
    case false:
      return NO
    default:
      return NA
  }
}

interface Arguments {
  explicitOptOut?: boolean
  outOutSale?: boolean
  lspa?: boolean
}

const CCPAStringBuilder = (args: Arguments) => {
  return [SPEC_VERSION, _convert(args.explicitOptOut), _convert(args.outOutSale), _convert(args.lspa)].join('')
}

module.exports = CCPAStringBuilder
