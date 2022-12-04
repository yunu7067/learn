import jwt from "jsonwebtoken";

const payload = {
  sub: "1234567890",
  name: "John Doe",
  admin: true,
};

const secret = "my-secret";

const signed = jwt.sign(payload, secret, {
  algorithm: "HS256",
  expiresIn: "1s", // if ommited, the token will not expire
});

console.log("\npayload: ");
console.log(payload);

console.log("\nsecret: ");
console.log(secret);

console.log("\nsigned: ");
console.log(signed);

jwt.verify(
  signed,
  secret,
  {
    // Never forget to make this explicit to prevent
    // signature stripping attacks
    algorithms: ["HS256"],
  },
  (err, decoded) => {
    if (!err) {
      console.log("\ndecoded: ");
      console.log(decoded);
    } else {
      console.error(err.message);
      console.error(err.expiredAt);
    }
  }
);

console.log("\nwait just 1 second......\n");
setTimeout(() => {
  jwt.verify(
    signed,
    secret,
    {
      // Never forget to make this explicit to prevent
      // signature stripping attacks
      algorithms: ["HS256"],
    },
    (err, decoded) => {
      if (!err) {
        console.log("\ndecoded: ");
        console.log(decoded);
      } else {
        console.error(err.message);
        console.error(err.expiredAt);
      }
    }
  );
}, 1000);
