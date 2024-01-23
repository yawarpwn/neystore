const mappedProducts = products.map(product => {
  const { id, features, category, amazon_price, price, title, images, details, videos, starts } = product

  function mapImage(image) {
    const { thumb, hiRes } = image
    return {
      url: hiRes,
      thumb: thumb,
    }
  }

  function mapVideo(video) {
    const { url, slateUrl, title } = video
    return {
      url,
      title,
      cover: slateUrl
    }
  }

  const mappedImages = images.map(mapImage)
  const mappedVideos = videos && videos.length > 0 ? videos.map(mapVideo)[0] : null

  return {
    id,
    features,
    category,
    cost: amazon_price,
    details,
    price,
    title,
    images: mappedImages,
    video: mappedVideos,
    ranking: Number(starts)
  }
})

await Bun.write('data/products.json', JSON.stringify(mappedProducts))
