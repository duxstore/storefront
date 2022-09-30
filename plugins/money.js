import Vue from 'vue'

const naira = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  minimumFractionDigits: 2
})

const formatter = Intl.NumberFormat('en', {
  notation: 'compact'
})

Vue.filter('money', function (value) {
  return naira.format(value)
})

Vue.filter('count', function (value) {
  return formatter.format(value)
})
