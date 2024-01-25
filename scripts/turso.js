import products from "@/data/products.json";
import { scrapperAmazonProduct } from "@/lib/scrapper";
import { createClient } from "@libsql/client";
const token =
  `eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDI0LTAxLTIyVDAxOjAyOjA0Ljc0OTY5NzE3NloiLCJpZCI6Ijc4MmY5ODViLWI4YjctMTFlZS1iMTg5LWE2MDMzNTNjNjBiMyJ9.3X3y3x8AejmpMduoI99_Hr6khsPoiQpkFAMThjugn3hIQTyKvfEX6H_lXC164q5KrS1MBawbTG3wVUMYeXiEBA`;
const db = createClient({
  url: "libsql://neystore-yawarpwn.turso.io",
  authToken: token,
});

// const product = await scrapperAmazonProduct();

const product = {
  title:
    "Lenovo-auriculares inalámbricos LP40 Pro TWS, cascos deportivos con Bluetooth 5,1, reducción de ruido, Control táctil, 250mAH, originales",
  features: [
    "Auriculares inalámbricos Lenovo LP40",
    "5 Colores disponibles",
  ],
  category: "Tecnologia",
  cost: 33,
  details: {
    "Marca": "Lenovo",
    "Material": "Plástico",
    "Micrófonos incorporados": "Si",
    "Imperneable": "Si",
    "Sensibilidad": "102dB",
    "Control de Volumen": "Si",
    "Tipo ina ": "Bluetooth",
    "Origen": "China",
  },
  price: 65,
  images: [
    {
      url:
        "https://ae01.alicdn.com/kf/S14cae74bebb4477d9a0c5a5a6e87c0fb8/Lenovo-auriculares-inal-mbricos-LP40-Pro-TWS-cascos-deportivos-con-Bluetooth-5-1-reducci-n-de.jpg_.webp",
      thumb:
        "https://ae01.alicdn.com/kf/S14cae74bebb4477d9a0c5a5a6e87c0fb8/Lenovo-auriculares-inal-mbricos-LP40-Pro-TWS-cascos-deportivos-con-Bluetooth-5-1-reducci-n-de.jpg_80x80.jpg_.webp",
    },
    {
      url:
        "https://ae01.alicdn.com/kf/Sf1ee08e24c1a469caad908568bce42bfC/Lenovo-auriculares-inal-mbricos-LP40-Pro-TWS-cascos-deportivos-con-Bluetooth-5-1-reducci-n-de.jpg_.webp",
      thumb:
        "https://ae01.alicdn.com/kf/Sf1ee08e24c1a469caad908568bce42bfC/Lenovo-auriculares-inal-mbricos-LP40-Pro-TWS-cascos-deportivos-con-Bluetooth-5-1-reducci-n-de.jpg_80x80.jpg_.webp",
    },
    {
      url:
        "https://ae01.alicdn.com/kf/Sd11d6f34c22b4e3a844cfce57c533cb7N/Lenovo-auriculares-inal-mbricos-LP40-Pro-TWS-cascos-deportivos-con-Bluetooth-5-1-reducci-n-de.jpg_.webp",
      thumb:
        "https://ae01.alicdn.com/kf/Sd11d6f34c22b4e3a844cfce57c533cb7N/Lenovo-auriculares-inal-mbricos-LP40-Pro-TWS-cascos-deportivos-con-Bluetooth-5-1-reducci-n-de.jpg_80x80.jpg_.webp",
    },
    {
      url:
        "https://ae01.alicdn.com/kf/Sae16c97f5db3453c8031b60f6792e15cq/Lenovo-auriculares-inal-mbricos-LP40-Pro-TWS-cascos-deportivos-con-Bluetooth-5-1-reducci-n-de.jpg_.webp",
      thumb:
        "https://ae01.alicdn.com/kf/Sae16c97f5db3453c8031b60f6792e15cq/Lenovo-auriculares-inal-mbricos-LP40-Pro-TWS-cascos-deportivos-con-Bluetooth-5-1-reducci-n-de.jpg_80x80.jpg_.webp",
    },
  ],
  video: null,
  ranking: 4,
};

export async function insertProductToDb(productToInsert) {
  const id = crypto.randomUUID();
  try {
    await insertProduct(productToInsert, id);
    if (Boolean(productToInsert.video)) {
      await insertVideo(productToInsert.video, id);
    }
    for (const image of productToInsert.images) {
      await insertImage(image, id);
    }
    console.log("seed all products sucess");
  } catch (err) {
    console.log(err);
    console.log("error inserting product");
  }
}

async function insertProduct(product, id) {
  const details = product?.details ? JSON.stringify(product.details) : null;
  await db.execute({
    sql: "INSERT INTO products(id, title, price, cost, ranking, category, details, features ) values(?,?,?,?,?,?,?,?)",
    args: [
      id,
      product.title,
      product.price,
      product.cost,
      product.ranking,
      product.category,
      details,
      JSON.stringify(product.features),
    ],
  });
  console.log("inserted product");
}

async function getProducts() {
  const { rows: products } = await db.execute(`
SELECT
  p.title,
  p.category,
  p.price,
  p.cost,
  p.ranking,
  p.details,
  p.features,
  json_group_array(json_object('url', i.url, 'thumb', i.thumb)) AS images,
  json_object('url', v.url, 'title', v.title, 'cover', v.cover) AS video
FROM
  products p
INNER JOIN
  images i ON (i.product_id = p.id)
LEFT JOIN 
  videos v ON (v.product_id = p.id)
GROUP BY
  p.id, p.title, p.category, p.price, p.cost, p.ranking;

`);

  console.log(products);
}

async function insertImage(image, id) {
  await db.execute({
    sql: "INSERT INTO images(id, url, thumb, product_id ) values(?,?,?,?)",
    args: [crypto.randomUUID(), image.url, image.thumb, id],
  });
  console.log("inserted image");
}

async function insertVideo(video, id) {
  await db.execute({
    sql: "INSERT INTO videos(id, url, title, cover, product_id ) values(?,?,?,?,?)",
    args: [crypto.randomUUID(), video.url, video.title, video.cover, id],
  });
  console.log("inserted video");
}

// for (const product of products) {
//   seedProducts(product);
// }

// async function main() {
//   await seedProducts(product);
//   // await getProducts()
// }
// main();
