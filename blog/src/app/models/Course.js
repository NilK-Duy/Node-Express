const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema

const Course = new Schema({
  name: { type: String, required: true },
  description: { type: String, maxLenth: 666 },
  image: { type: String, maxLength: 255 },
  videoId: { type: String, required: true },
  level: { type: String, required: true},
  slug: { type: String, slug: 'name' }
}, {
  timestamps: true
})

module.exports = mongoose.model('Course', Course)