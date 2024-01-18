const Handlebars = require('handlebars')

module.exports = {
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    const sortType = field === sort.column ? sort.type : 'default'
    const icons = {
      default: 'chevron-expand-outline',
      asc: 'caret-down-outline',
      desc: 'caret-up-outline',
    }

    const types = {
      default: 'desc',
      asc: 'desc',
      desc: 'asc',
    }

    const icon = icons[sortType]
    const type = types[sortType]

    const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)

    const output = `<a href="${href}">
      <ion-icon src="/vender/icon/${icon}.svg"></ion-icon>
    </a>`
    return new Handlebars.SafeString(output)
  }
}