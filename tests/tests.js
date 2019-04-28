const sinon = require('sinon');
const mocha = require('mocha')
const { expect } = require('chai')
const db = require('../app/db')()

describe('Create new user', function () {

    it('should be a function', () => {
        expect(typeof db.users.create).to.equal('function')
    })
    it('should call create function', () => {
        let result = false;
        sinon.stub(db.users, "create").callsFake(() => {
            result = true;
        })
        db.users.create();
        expect(result).to.be.true;
    })
})

describe('Get users information', function () {

    it('should be a function', () => {
        expect(typeof db.users.list).to.equal('function')
    })

    it('should call list function', () => {
        let result = false;
        sinon.stub(db.users, "list").callsFake(() => {
            result = true;
        })
        db.users.list();
        expect(result).to.be.true;
    })
})

describe('Update users information', function () {

    it('should be a function', () => {
        expect(typeof db.users.update).to.equal('function')
    })
    it('should call update function', () => {
        let result = false;
        sinon.stub(db.users, "update").callsFake(() => {
            result = true;
        })
        db.users.update();
        expect(result).to.be.true;
    })
})

describe('Delete users information', function () {

    it('should be a function', () => {
        expect(typeof db.users.delete).to.equal('function')
    })
    it('should call delete function', () => {
        let result = false;
        sinon.stub(db.users, "delete").callsFake(() => {
            result = true;
        })
        db.users.delete();
        expect(result).to.be.true;
    })
})