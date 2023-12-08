'use server'

import { scrapperAmazonProduct } from '@/lib/scrapper/index'

export async function createProduct(formData) {
  const url = formData.get('url')
  scrapperAmazonProduct(url)
}
