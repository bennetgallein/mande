import path from 'path'
import { addPlugin } from '@nuxt/kit'

const DEFAULT_OPTIONS = {
  callError: true,
  proxyHeadersIgnore: [
    'accept',
    'host',
    'cf-ray',
    'cf-connecting-ip',
    'content-length',
    'content-md5',
    'content-type',
  ],
}

/** @type {import('@nuxt/types').Module} */
export default function NuxtMandeModule(localOptions) {
  // TODO: merge arrays properly. There is probably a package to handle this
  const options = {
    ...DEFAULT_OPTIONS,
    ...localOptions,
  }

  addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'mande.js',
    // FIXME: figure out why options end up being undefined
    options,
  })
}

module.exports.meta = require('./../package.json')