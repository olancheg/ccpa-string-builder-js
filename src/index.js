const SPEC_VERSION = 1
const NA = '-'
const YES = 'Y'
const NO = 'N'

const _convert = (value) => {
  switch (value) {
    case true:
      return YES
    case false:
      return NO
    default:
      return NA
  }
}

const _validate = ({ explicitOptOut, outOutSale, lspa }) => {
  if (!(explicitOptOut === undefined || typeof explicitOptOut === 'boolean')) {
    throw new Error('Explicit Notice/Opportunity to Opt Out value must be either undefined or boolean')
  }

  if (!(outOutSale === undefined || typeof outOutSale === 'boolean')) {
    throw new Error('Opt-Out Sale value must be either undefined or boolean')
  }

  if (!(lspa === undefined || typeof lspa === 'boolean')) {
    throw new Error('LSPA Covered Transaction value must be either undefined or boolean')
  }
}

const _formatString = ({ explicitOptOut, outOutSale, lspa }) => {
  return [SPEC_VERSION, explicitOptOut, outOutSale, lspa].join('')
}

const CCPAStringBuilder = ({ explicitOptOut = undefined, outOutSale = undefined, lspa = undefined }) => {
  _validate({ explicitOptOut, outOutSale, lspa })
  return _formatString({
    explicitOptOut: _convert(explicitOptOut),
    outOutSale: _convert(outOutSale),
    lspa: _convert(lspa),
  })
}

module.exports = CCPAStringBuilder
