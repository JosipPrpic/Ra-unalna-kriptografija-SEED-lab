const BigInteger = require('jsbn').BigInteger;

// Function to convert a string to a hexadecimal representation
function stringToHex(str) {
    return Buffer.from(str, 'utf8').toString('hex');
}

// Function to convert a hexadecimal string to a string
function hexToString(hex) {
    return Buffer.from(hex, 'hex').toString('utf8');
}

// Function to sign a message
function sign(message, d, n) {
    const m = new BigInteger(message, 16);
    return m.modPow(d, n);
}

// Function to verify a signature
function verify(signature, e, n) {
    return signature.modPow(e, n);
}

// Define the public and private keys
const nHex = "DCBFFE3E51F62E09CE7032E2677A78946A849DC4CDDE3A4D0CB81629242FB1A5";
const eHex = "010001";
const dHex = "74D806F9F3A62BAE331FFE3F0A68AFE35B3D2E4794148AACBC26AA381CD7D30D";

// Convert hexadecimal values to big integers
const n = new BigInteger(nHex, 16);
const e = new BigInteger(eHex, 16);
const d = new BigInteger(dHex, 16);

// Original message
const messageOriginal = "I owe you $2000.";
// Modified message
const messageModified = "I owe you $3000.";

// Convert messages to hexadecimal strings
const messageOriginalHex = stringToHex(messageOriginal);
const messageModifiedHex = stringToHex(messageModified);

// Sign the messages
const signatureOriginal = sign(messageOriginalHex, d, n);
const signatureModified = sign(messageModifiedHex, d, n);

// Verify the signatures
const verifiedOriginal = verify(signatureOriginal, e, n);
const verifiedModified = verify(signatureModified, e, n);

// Print the results
console.log("Original message:", messageOriginal);
console.log("Original message (hex):", messageOriginalHex);
console.log("Original signature:", signatureOriginal.toString(16));
console.log("Verified original signature (hex):", verifiedOriginal.toString(16));
console.log("Verified original message:", hexToString(verifiedOriginal.toString(16)));

console.log("\nModified message:", messageModified);
console.log("Modified message (hex):", messageModifiedHex);
console.log("Modified signature:", signatureModified.toString(16));
console.log("Verified modified signature (hex):", verifiedModified.toString(16));
console.log("Verified modified message:", hexToString(verifiedModified.toString(16)));

// Compare both signatures
console.log("\nComparison of original and modified signatures:");
console.log("Are the signatures equal?", signatureOriginal.equals(signatureModified));

// NOTES: 
// The original message and its hexadecimal representation.
// The signature of the original message.
// The verification of the original signature.
// The modified message and its hexadecimal representation.
// The signature of the modified message.
// The verification of the modified signature.
// A comparison of the original and modified signatures.