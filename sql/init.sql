DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  cost INTEGER NOT NULL,
  price INTEGER NOT NULL,
  ranking REAL NOT NULL,
  details JSONB NOT NULL,
  features JSON
);


DROP TABLE IF EXISTS images;
CREATE TABLE IF NOT EXISTS images (
  id TEXT PRIMARY KEY,
  product_id TEXT,
  url TEXT NOT NULL,
  thumb TEXT,
  FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE IF EXISTS videos;
CREATE TABLE IF NOT EXISTS videos (
  id TEXT PRIMARY KEY,
  product_id TEXT,
  url TEXT NOT NULL,
  title TEXT,
  cover TEXT,
  FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE
);


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

