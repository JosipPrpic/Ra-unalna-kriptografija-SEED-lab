const BigInteger = require('jsbn').BigInteger;

// Function to convert a string to a hexadecimal representation
function stringToHex(str) {
    return Buffer.from(str, 'utf8').toString('hex');
}

// Function to convert a hexadecimal string to a string
function hexToString(hex) {
    return Buffer.from(hex, 'hex').toString('utf8');
}

// Function to encrypt a message
function encrypt(message, e, n) {
    const m = new BigInteger(message, 16);
    return m.modPow(e, n);
}

// Function to decrypt a message
function decrypt(ciphertext, d, n) {
    return ciphertext.modPow(d, n);
}

// Define the public and private keys
const nHex = "DCBFFE3E51F62E09CE7032E2677A78946A849DC4CDDE3A4D0CB81629242FB1A5";
const eHex = "010001";
const dHex = "74D806F9F3A62BAE331FFE3F0A68AFE35B3D2E4794148AACBC26AA381CD7D30D";

// Convert hexadecimal values to big integers
const n = new BigInteger(nHex, 16);
const e = new BigInteger(eHex, 16);
const d = new BigInteger(dHex, 16);

// Message to be encrypted
const message = "A top secret!";

// Convert the message to a hexadecimal string
const messageHex = stringToHex(message);

// Encrypt the message
const ciphertext = encrypt(messageHex, e, n);

// Decrypt the message to verify
const decryptedHex = decrypt(ciphertext, d, n);
const decryptedMessage = hexToString(decryptedHex.toString(16));

// Print the results
console.log("Message:", message);
console.log("Message (hex):", messageHex);
console.log("Ciphertext:", ciphertext.toString(16));
console.log("Decrypted message (hex):", decryptedHex.toString(16));
console.log("Decrypted message:", decryptedMessage);
