/* eslint-disable no-undef */
describe('CCPAStringBuilder', () => {
  const ccpaStringBuilder = CCPAStringBuilder

  it('is a function', () => {
    expect(typeof ccpaStringBuilder).toBe('function')
  })

  it('should return correct values', () => {
    expect(ccpaStringBuilder({})).toBe('1---')
    expect(ccpaStringBuilder({ explicitOptOut: true })).toBe('1Y--')
    expect(ccpaStringBuilder({ explicitOptOut: false })).toBe('1N--')
    expect(ccpaStringBuilder({ optOutSale: true })).toBe('1-Y-')
    expect(ccpaStringBuilder({ optOutSale: false })).toBe('1-N-')
    expect(ccpaStringBuilder({ lspa: true })).toBe('1--Y')
    expect(ccpaStringBuilder({ lspa: false })).toBe('1--N')
    expect(ccpaStringBuilder({ explicitOptOut: true, lspa: false })).toBe('1Y-N')
    expect(ccpaStringBuilder({ explicitOptOut: false, lspa: false })).toBe('1N-N')
    expect(ccpaStringBuilder({ explicitOptOut: false, optOutSale: true })).toBe('1NY-')
    expect(ccpaStringBuilder({ explicitOptOut: false, optOutSale: false })).toBe('1NN-')
    expect(ccpaStringBuilder({ explicitOptOut: false, optOutSale: false, lspa: false })).toBe('1NNN')
    expect(ccpaStringBuilder({ explicitOptOut: true, optOutSale: true, lspa: true })).toBe('1YYY')
  })
})
