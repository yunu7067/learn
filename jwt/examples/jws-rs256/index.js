import jwt from "jsonwebtoken";
import { readFileSync } from "fs";

const PRIVATE_KEY_FILENAME = "private_key.pem";
const PUBLIC_KEY_FILENAME = "public_key.pem";

const payload = {
  sub: "1234567890",
  name: "John Doe",
  admin: true,
};

function generateJWT() {
  // You can get this from private_key.pem above.
  const privateRsaKey = readFileSync(PRIVATE_KEY_FILENAME, {
    encoding: "utf8",
    flag: "r",
  });

  const signed = jwt.sign(payload, privateRsaKey, {
    algorithm: "RS256",
    expiresIn: "5s",
  });

  return signed;
}

function verifyJWT(key) {
  const decoded = jwt.verify(signed, key, {
    // Never forget to make this explicit to prevent
    // signature stripping attacks.
    algorithms: ["RS256"],
  });

  return decoded;
}
function verifyUsingPublicKey() {
  // You can get this from public_key.pem above.
  const publicRsaKey = readFileSync(PUBLIC_KEY_FILENAME, {
    encoding: "utf8",
    flag: "r",
  });

  const decoded = verifyJWT(publicRsaKey);

  return decoded;
}
function verifyUsingPrivateKey() {
  // You can get this from private_key.pem above.
  const privateRsaKey = readFileSync(PUBLIC_KEY_FILENAME, {
    encoding: "utf8",
    flag: "r",
  });

  const decoded = verifyJWT(privateRsaKey);

  return decoded;
}

const signed = generateJWT();
const decoded_public = verifyUsingPublicKey();
const decoded_private = verifyUsingPrivateKey();

console.log({ payload, signed, decoded_public, decoded_private });
console.log(JSON.stringify(decoded_public) == JSON.stringify(decoded_private));
