/* eslint-env detox/detox, jest, jasmine */

const detox = require('detox')
const config = require('../package.json').detox
const adapter = require('detox/runners/jest/adapter')
const { setupJestScreenshot } = require('jest-screenshot')

setupJestScreenshot()

jest.setTimeout(300000)
jasmine.getEnv().addReporter(adapter)

beforeAll(async () => {
  await detox.init(config)
})

beforeEach(async () => {
  await adapter.beforeEach()
})

afterAll(async () => {
  await adapter.afterAll()
  await detox.cleanup()
})
