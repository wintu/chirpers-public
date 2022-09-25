module.exports = {
  sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec))
  }
}