const { conn, User } = require('../../src/db.js');
const app = require('../../index.js'); // Importo el archivo de entrada del server de express.

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
  } = require('sequelize-test-helpers')

  const userModel = require('../../src/models/User')
  describe('src/models/User', async () => {
    const Model = await userModel(sequelize, dataTypes)
    const instance = new Model()
    checkModelName(Model)('User')
    context('properties', () => {
      ;['name', 'surname', 'admin', 'passwprd', 'username' ,'email'].forEach(checkPropertyExists(instance))
    })
    context('associations', () => {
        const Product = 'productoUno'
     
        before(() => {
          User.associate({ Product })
        })
     
        it('defined a belongsTo association with Company', () => {
          expect(User.belongsToMany).to.have.been.calledWith(Company)
        })
      })
  })