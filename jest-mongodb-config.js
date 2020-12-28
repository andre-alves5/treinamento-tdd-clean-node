module.exports = {
  mongodbMemoryServer: {
    version: '6.6.7'
  },
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.0.14',
      skipMD5: true
    },
    autoStart: false
  }
}
