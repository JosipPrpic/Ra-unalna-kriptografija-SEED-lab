const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// Read CA's public key from file
const publicKeyPath = path.join(__dirname, 'issuer_public_key.pem');
const publicKey = fs.readFileSync(publicKeyPath, 'utf8');

// Read the body of the certificate from file
const certBodyPath = path.join(__dirname, 'issuer_cert_body.bin');
const certBody = fs.readFileSync(certBodyPath);

// Signature
const signatureHex = '52d942dded318ffd413f3e17508545de2e36f4c69f14136f24cd6139c43cc629b7c6827ad3d91970e602c8c7efdc355ada77ffffe32ba53a69325c6ae7d02c5d8656df145ab2bbe48c67cd477bedff544097c888df594684883a75f217e4de1eb0b92b41e37c1e2c87287ea4866e3deba224555b67c73e428143ea1189f8790fb879e112ad606102a5da8afec746fa6c7702d87a40219eb946a62a19fc22484f63d34f17fe18733a72e52736a754cdfbeb42003c92dd7f0125f1da877f33e73c9e526aac6cf6f65ac9bde24e484317d1cfedb34d9686c7cc86461ae97ba35192e6bd1d44ab4f2be3cfc467897eb792f8c2dd0357c55a3dbb04045d44385a73fd84b61fa992c1c15a3496e762aa891c8be6dcf2c91e41661282d7455ad05dd093fb7c2005f814ea1782579098073fd892b756112eed8a24fcb15503a97995953b1b891362c8bb366e6116585525efa8d58882688397e89e012a3778cb2064c6fe65eb253d54cb29887286e7206adbc30455cff9a9150a34bc16088b59364e1561d03c7cf016c5f5888ff3875df05927e706c4e85c57609dbceea7d14e09a178f79c3dcef762bced6a975172c2951a43a96932093ff97e9401d12d9c64fdd52dc8df791bef9b39242a9ce0a954f69b50697613f384c85ae9229c20bb62ff589725bddea0f9903f89690b48c729c56feb97e9006abc3';

// Convert signature from hex to Buffer
const signature = Buffer.from(signatureHex, 'hex');

// Hash the body of the certificate
const hash = crypto.createHash('sha256');
hash.update(certBody);
const hashOfBody = hash.digest();

// Create a verifier
const verify = crypto.createVerify('sha256');

// Update the verifier with the hash of the body
verify.update(hashOfBody);

// Verify the signature using the public key
const isVerified = verify.verify(publicKey, signature);

console.log('Signature is valid:', isVerified);