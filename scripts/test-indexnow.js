// scripts/test-indexnow.js
const { submitToIndexNow } = require("../src/app/lib/indexnow");

async function main() {
  const result = await submitToIndexNow(["https://eammu.com/"]);
  console.log(result);
}

main();