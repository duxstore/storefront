import Vue from 'vue'

const naira = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  minimumFractionDigits: 2
})

Vue.filter('money', function (value) {
  return naira.format(value)
})
