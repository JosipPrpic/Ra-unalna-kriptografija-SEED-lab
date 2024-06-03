const BigInteger = require('jsbn').BigInteger;

// Signature parameters
const M = "Launch a missile.";
const S = "643D6F34902D9C7EC90CB0B2BCA36C47FA37165C0005CAB026C0542CBDB6802F";
const e = "010001";
const n = "AE1CD4DC432798D933779FBD46C6E1247F0CF1233595113AA51B450F18116115";

// Convert signature from hexadecimal to BigInt
const signature = new BigInteger(S, 16);

// Create RSA key object
const rsaKey = new RSAKey();
rsaKey.setPublic(n, e);

// Verify the signature
function verifySignature() {
    const hash = hex_sha256(M);
    return rsaKey.verifyString(hash, signature);
}

// Call the verifySignature function and log the result
const isSignatureValid = verifySignature();
console.log("Signature is valid:", isSignatureValid);
