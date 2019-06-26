/* global describe,it */

const dotgit = require('./')()
const path = require('path')

require('chai').should()

describe('dotgitignore', () => {
  describe('ignore', () => {
    it('should return true for ignored files', () => {
      dotgit.ignore('.DS_Store').should.equal(true)
    })

    it('should return false for files that are not ignored', () => {
      dotgit.ignore('README.md').should.equal(false)
    })

    it('should return false for comments', () => {
      dotgit.ignore('package.json').should.equal(false)
    })

    it('should return false for matched negated lines', () => {
      dotgit.ignore('lib').should.equal(false)
    })

    it('should return false for matched partial folders in absolute path', () => {
      dotgit.ignore(process.cwd() + path.sep + 'no_to_be_ignored').should.equal(false)
    })

    it('should return true for ignored files with absolute path', () => {
      dotgit.ignore(process.cwd() + path.sep + 'dotgitignore').should.equal(true)
    })
  })
})
