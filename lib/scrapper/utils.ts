import { load } from 'cheerio'

const $ = load('')

const TIPO_DE_CAMBIO = 3.8

// Funcion para extraer el precio del producto
export function extractPrice(...elements) {
  for (const element of elements) {
    const priceText = element.text().trim()
    if (priceText) {
      const price = Number(priceText.replace(/[^\d.]/g, '')) + 1
      const priceFormated = Math.round(price * TIPO_DE_CAMBIO)
      return priceFormated
    }
  }

  return 0
}

// Funcion para extraer las features del producto
export function extractFeatures(elements) {
  const arrayFeatures = elements
    .map((index, element) => $(element).text().trim())
    .get()
  return arrayFeatures
}

// Funcion para extraer los detalles del producto
export function extractDetails(elements) {
  const details = {}
  elements.each((index, element) => {
    const name = $(element).find('td.a-span3 span.a-size-base').text().trim()
    const value = $(element).find('td.a-span9 span.a-size-base').text().trim()
    details[name] = value
  })

  return details
}

// Funcion para extraer las imagenes del producto
export function extractImages(stringScript) {
  const regex = /initial': \[.*\]/
  const match = stringScript.match(regex)

  if (match) {
    const cleanJson = match[0].replace(/initial':/, '')
    const images = JSON.parse(cleanJson)
    const mappedImages = images.map(img => ({
      url: img.hiRes,
      thumb: img.thumb,
    }))
    return mappedImages
  } else {
    throw new Error('Error al parsear el JSON')
  }
}

export function extractVideo(str) {
  if (!str) return null

  const regex = /'\{([^']*)\}'/
  // const regex = /\{'\{([^]*)\}'\}/
  const match = str.match(regex)

  if (match) {
    const result = match[1]
    const validJSon = `{${result}}`
    const productInfo = JSON.parse(validJSon)
    const videos = productInfo.videos
    const mappedVideos = videos.map(video => ({
      url: video.url,
      title: video.title,
      cover: video.slateUrl,
    }))
    return mappedVideos[0]
  } else {
    return null
  }
}
