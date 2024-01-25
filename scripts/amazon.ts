import { CATEGORIES } from "@/const";
import { extractDetails, extractFeatures, extractImages, extractVideo } from "@/lib/scrapper/utils";
import { insertProductToDb } from "@/scripts/turso";
import type { Product } from "@/types";
import { load } from "cheerio";
import readline from "node:readline/promises";

type ProductFromScrap = Omit<Product, "price, ranking, cost, category, id">;
export async function scrapperAmazonProduct(): Promise<ProductFromScrap[]> {
  //   // Brigth Data Config
  try {
    const html = await Bun.file("data/amazon-page.html").text();
    // Fetch the product page
    const $ = load(html);

    const title = $("#productTitle").text().trim();
    const features = extractFeatures(
      $(
        "#featurebullets_feature_div > #feature-bullets ul li span.a-list-item",
      ),
    );

    const details = extractDetails($("#productOverview_feature_div table tr"));

    const images = extractImages(
      $("#leftCol #imageBlock_feature_div script").text().trim(),
    );

    const video = extractVideo(
      $("#imageBlockVariations_feature_div script").text().trim(),
    );

    const starts = Number(
      $("#averageCustomerReviews a>span.a-size-base.a-color-base:first")
        .text()
        .trim(),
    );

    const data: ProductFromScrap = {
      title,
      features,
      images,
      details,
      video,
      ranking: starts,
    };

    return data;
  } catch (error) {
    console.log("error scrapiing amazon product: ", error);
    return {
      error: " Error Scraping Product",
      data: null,
    };
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isValidNumber(str: string) {
  if (!str) return false;

  if (isNaN(Number(str))) return false;

  return true;
}

function isValidCategory(str: string) {
  if (!str) return false;

  if (Object.values(CATEGORIES).includes(str)) return true;

  return false;
}
async function main() {
  const productFromScrap = await scrapperAmazonProduct();

  console.log("-----------------------------------------------------------------------");
  console.log("Producto Scrapeado:\n" + productFromScrap.title);
  console.log("-----------------------------------------------------------------------");

  let cost = await rl.question("Ingresa el costo \n");
  while (!isValidNumber(cost)) {
    cost = await rl.question("Ingresa un costo valido \n");
  }

  let price = await rl.question("Ingresa el precio \n");
  while (!isValidNumber(price)) {
    price = await rl.question("Ingresa un precio valido \n");
  }

  let category = await rl.question("Ingresa la categoria \n");
  while (!isValidCategory(category)) {
    category = await rl.question("Ingresa una categoria valida \n");
  }

  const product = {
    ...productFromScrap,
    cost: Number(cost),
    price: Number(price),
    category,
  };

  console.log(product);
  await insertProductToDb(product);
  rl.close();
}

main();
