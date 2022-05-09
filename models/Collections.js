import Model from './Model'

export default class Collections extends Model {
  resource () {
    return 'collections'
  }

  primaryKey () {
    return 'id'
  }
}
