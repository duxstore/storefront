class StoreTheme {
  constructor () {
    this.theme = {}
  }

  get () {
    this.theme = {
      primaryColor: '#005C6E',
      secondaryColor: '#EFF0E8',
      textSolidColor: '',
      textSecondaryColor: '#7f8361',
      font: 'Robot'
    }
  }
}

const theme = new StoreTheme()
theme.get()

export default theme.theme
