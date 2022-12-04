import jwt from "jsonwebtoken";
import { readFileSync } from "fs";

const PRIVATE_KEY_FILENAME = "ecdsa_private_key.pem";
const PUBLIC_KEY_FILENAME = "ecdsa_public_key.pem";

const payload = {
  sub: "1234567890",
  name: "John Doe",
  admin: true,
};

function generateJWT() {
  // You can get this from private_key.pem above.
  const privateEcdsaKey = readFileSync(PRIVATE_KEY_FILENAME, {
    encoding: "utf8",
    flag: "r",
  });

  const signed = jwt.sign(payload, privateEcdsaKey, {
    algorithm: "ES256",
    expiresIn: "5s",
  });

  return signed;
}

function verifyJWT() {
  // You can get this from public_key.pem above.
  const publicEcdsaKey = readFileSync(PUBLIC_KEY_FILENAME, {
    encoding: "utf8",
    flag: "r",
  });

  const decoded = jwt.verify(signed, publicEcdsaKey, {
    // Never forget to make this explicit to prevent
    // signature stripping attacks.
    algorithms: ["ES256"],
  });

  return decoded;
}

const signed = generateJWT();
const decoded = verifyJWT();

console.log({ payload, signed, decoded });
