import './index.css'
import numeral from 'numeral'

const testValue = numeral(1000).format('$0,0.00')
console.log(`I would pay ${testValue} for this course...NOT `)