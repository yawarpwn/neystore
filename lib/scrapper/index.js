// curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_d10e5a7a-zone-neystore:gupn2ixr10h1 -k https://lumtest.com/myip.json
//
import axios from 'axios'
import { load } from 'cheerio'
import { extractPrice, extractFeatures, extractDetails } from './utils'

import fs from 'node:fs'
import { features } from 'node:process'
const html = fs.readFileSync('data/amazon.html', 'utf8')

function extractImages(stringScript) {
  console.log(stringScript)
  // const regex = /'colorImages': (\{[\s\S]*?\})/
  // const match = stringScript.match(regex)
  //
  // if (match && match.length === 2) {
  //   return JSON.parse(match[1])
  // }
  return ''
}

export async function scrapperAmazonProduct(url) {
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
    //Fetch the product page
    // const response = await axios.get(url, options)
    // fs.writeFileSync('data/amazon.html', response.data)
    // console.log(response.data)
    const $ = load(html)

    const title = $('#productTitle').text().trim()
    const features = extractFeatures(
      $(
        '#featurebullets_feature_div > #feature-bullets ul li span.a-list-item',
      ),
    )

    const details = extractDetails($('#poExpander table tr '))

    const images = extractImages(
      $('#leftCol #imageBlock_feature_div script').text(),
    )

    console.log({ title, features, details, images })
  } catch (error) {
    throw new Error('Error Scraping Product')
  }
}
