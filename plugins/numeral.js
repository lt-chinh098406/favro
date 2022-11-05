import numeralFormat from 'numeral'

const numeral = (_context, inject) => {
  inject('numeral', numeralFormat)
}

export default numeral
