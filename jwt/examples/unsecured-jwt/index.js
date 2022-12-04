// URL-safe variant of Base64
function b64(str) {
  return btoa(str).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function encode(h, p) {
  const headerEnc = b64(JSON.stringify(h));
  const payloadEnc = b64(JSON.stringify(p));
  return `${headerEnc}.${payloadEnc}`;
}

function decode(jwt) {
  const [headerB64, payloadB64] = jwt.split(".");
  // These supports parsing the URL safe variant of Base64 as well.
  const headerStr = atob(headerB64);
  const payloadStr = atob(payloadB64);
  return {
    header: JSON.parse(headerStr),
    payload: JSON.parse(payloadStr),
  };
}

const header = {
  alg: "none",
};
const payload = {
  sub: "user123",
  session: "ch72gsb320000udocl363eofy",
  name: "Pretty Name",
  lastpage: "/views/settings",
};

const src = { header, payload };
const token = encode(header, payload);
const decoded = decode(token);

console.log({ src, token, decoded });
