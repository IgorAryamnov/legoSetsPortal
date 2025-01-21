let url = new URL("https://api.materialsproject.org/materials/summary/");
url.searchParams.set("elements", "H,O");
url.searchParams.set("deprecated", "false");
url.searchParams.set("_per_page", "100");
url.searchParams.set("_skip", "0");
url.searchParams.set("_limit", "100");
url.searchParams.set("_all_fields", "false");
url.searchParams.set("license", "BY-C");

let response = await fetch(url.href, {
  method: "GET",
  mode: "no-cors",
  headers: {
    accept: "application/json",
    "X-API-KEY": "saSDpXVqYUdOarY0E0AOSLXTDniZlGRO",
  },
});

const reader = response.body.getReader();

const contentLength = +response.headers.get("Content-Length");

let receivedLength = 0;
let chunks = [];
while (true) {
  const { done, value } = await reader.read();

  if (done) {
    break;
  }

  chunks.push(value);
  receivedLength += value.length;

  console.log(`Получено ${receivedLength} из ${contentLength}`);
}

let chunksAll = new Uint8Array(receivedLength);
let position = 0;
for (let chunk of chunks) {
  chunksAll.set(chunk, position);
  position += chunk.length;
}

let result = new TextDecoder("utf-8").decode(chunksAll);
let commits = JSON.parse(result);

console.log(commits);

fetch("https://rebrickable.com/api/v3/lego/sets/?page_size=10", {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "key e08b80bfe721a67e045e83e0884bd97b",
  },
})
  .then((r) => r.json())
  .then((r) => console.log(r));
