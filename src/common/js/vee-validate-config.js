const VeeValidateConfig = {
  errorBagName: 'errors',
  fieldsBagName: 'fieldBags',
  delay: 0,
  strict: true,
  enableAutoClasses: false,
  locale: 'zh_CN',
  classNames: {
    touched: 'touched',
    untouched: 'untouched',
    valid: 'valid',
    invalid: 'invalid',
    pristine: 'pristine',
    dirty: 'dirty'
  },
  events: 'input',
  inject: true
}

export default VeeValidateConfig
