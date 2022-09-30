import Model from './Model'

export default class Carts extends Model {
  resource () {
    return 'carts'
  }

  primaryKey () {
    return 'id'
  }
}
