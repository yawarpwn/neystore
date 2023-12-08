import { load } from 'cheerio'

const $ = load('')
export function extractPrice(...elements) {
  for (const element of elements) {
    const priceText = element.text().trim()
    if (priceText) return priceText.replace(/\D/g, '')
  }
}

export function extractFeatures(elements) {
  const arrayFeatures = elements
    .map((index, element) => $(element).text().trim())
    .get()
  return arrayFeatures
}

export function extractDetails(elements) {
  const details = {}
  elements.each((index, element) => {
    const name = $(element).find('td.a-span3 span.a-size-base').text().trim()
    const value = $(element).find('td.a-span9 span.a-size-base').text().trim()
    details[name] = value
  })

  return details
}
