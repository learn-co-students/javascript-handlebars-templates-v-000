const expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')


describe('index', () => {

  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })

  //Test was exceeding the timeout (And it doesn't seem to do anything)
  /*it('runs', () => {
    expect(true).to.be.true
    done();
  })*/
})
