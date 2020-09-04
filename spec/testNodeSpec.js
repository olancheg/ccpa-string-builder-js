/* eslint-disable no-undef */
describe('CCPAStringBuilder', () => {
  const ccpaStringBuilder = require('../dist/ccpa-string-builder')

  it('is a function', () => {
    expect(typeof ccpaStringBuilder).toBe('function')
  })

  it('should return correct values', () => {
    expect(ccpaStringBuilder({})).toBe('1---')
    expect(ccpaStringBuilder({ explicitOptOut: true })).toBe('1Y--')
    expect(ccpaStringBuilder({ explicitOptOut: false })).toBe('1N--')
    expect(ccpaStringBuilder({ outOutSale: true })).toBe('1-Y-')
    expect(ccpaStringBuilder({ outOutSale: false })).toBe('1-N-')
    expect(ccpaStringBuilder({ lspa: true })).toBe('1--Y')
    expect(ccpaStringBuilder({ lspa: false })).toBe('1--N')
    expect(ccpaStringBuilder({ explicitOptOut: true, lspa: false })).toBe('1Y-N')
    expect(ccpaStringBuilder({ explicitOptOut: false, lspa: false })).toBe('1N-N')
    expect(ccpaStringBuilder({ explicitOptOut: false, outOutSale: true })).toBe('1NY-')
    expect(ccpaStringBuilder({ explicitOptOut: false, outOutSale: false })).toBe('1NN-')
    expect(ccpaStringBuilder({ explicitOptOut: false, outOutSale: false, lspa: false })).toBe('1NNN')
    expect(ccpaStringBuilder({ explicitOptOut: true, outOutSale: true, lspa: true })).toBe('1YYY')
  })
})
