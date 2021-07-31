let body = JSON.parse($response.body.replace(/while.{7}\n/, ""));
body.entitlement.status = "subscriber";
body.current_subs = {
  "product_id": "lightroom",
  "store": "adobe",
  "purchase_date": "2021-07-10T16:32:10.254954Z",
  "sao": {
    "inpkg_CCES": "0",
    "inpkg_CCLE": "1",
    "inpkg_CCSN": "0",
    "inpkg_CCSV": "0",
    "inpkg_LCCC": "0",
    "inpkg_LPES": "0",
    "inpkg_LRBRL": "0",
    "inpkg_LRMAC": "0",
    "inpkg_LRMC": "0",
    "inpkg_LRMP": "0",
    "inpkg_LRTB": "0",
    "inpkg_PHLT": "0",
    "inpkg_PHLT2": "0",
    "inpkg_PLES": "0",
    "storage_quota": "100"
  }
};
body.entitlement.storage = {
  "used": 0,
  "limit": 1154487209165,
  "display_limit": 1099511627776,
  "warn": 992137445376
};
body.avatar.placeholder = true;

$done({
  body: JSON.stringify(body)
});
