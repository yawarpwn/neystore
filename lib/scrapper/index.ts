// curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_d10e5a7a-zone-neystore:gupn2ixr10h1 -k https://lumtest.com/myip.json
import { load } from 'cheerio'
import fs from 'node:fs'
import {
  extractDetails,
  extractFeatures,
  extractImages,
  extractPrice,
  extractVideo,
} from './utils'
const html = fs.readFileSync('data/amazon-page.html', 'utf8')

export async function scrapperAmazonProduct() {
  // Brigth Data Config
  const username = 'brd-customer-hl_d10e5a7a-zone-neystore'
  const password = 'gupn2ixr10h1'
  const port = 22225
  const session_id = (10000 * Math.random()) | 0

  const options = {
    auth: `${username}-session-${session_id}`,
    password,
    port,
    host: 'brd.superproxy.io',
    rejectUnauthorized: false,
  }

  try {
    // Fetch the product page
    // const response = await axios.get(url, options)
    const $ = load(html)

    const title = $('#productTitle').text().trim()
    const features = extractFeatures(
      $(
        '#featurebullets_feature_div > #feature-bullets ul li span.a-list-item',
      ),
    )

    const details = extractDetails($('#productOverview_feature_div table tr'))

    const images = extractImages(
      $('#leftCol #imageBlock_feature_div script').text().trim(),
    )

    const video = extractVideo(
      $('#imageBlockVariations_feature_div script').text().trim(),
    )
    const amazonPrice = extractPrice(
      $('.priceToPay span.a-price-whole:first'),
      $('a.size-base.a-color-price'),
      $('.a-button-selected .a-color-base'),
    )

    // const originalPrice = extractPrice(
    //   $('#priceblock_ourprice'),
    //   $('.a-price.a-text-price span.a-offscreen'),
    //   $('#listPrice'),
    //   $('#priceblock_deadline'),
    //   $('.a-size-base.a-color-price'),
    // )

    // console.log({ originalPrice, amazonPrice })

    const [titleForSlugify] = title.split(', ')
    const starts = Number(
      $('#averageCustomerReviews a>span.a-size-base.a-color-base:first')
        .text()
        .trim(),
    )

    const data = {
      title,
      features,
      images,
      details,
      video,
      ranking: starts,
      cost: 1865,
      price: 2100,
      category: 'Tecnologia',
    }

    console.log(data)
    return data
  } catch (error) {
    console.log('error scrapiing amazon product: ', error)
    return {
      error: ' Error Scraping Product',
      data: null,
    }
  }
}

scrapperAmazonProduct()
