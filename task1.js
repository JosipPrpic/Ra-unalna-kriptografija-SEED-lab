const BigInteger = require('jsbn').BigInteger;

// Function to calculate modular multiplicative inverse using Extended Euclidean Algorithm
function modInverse(a, m) {
    let m0 = m.clone();
    let x0 = new BigInteger('0');
    let x1 = new BigInteger('1');

    if (m.equals(BigInteger.ONE)) {
        return BigInteger.ZERO;
    }

    while (a.compareTo(BigInteger.ONE) > 0) {
        let q = a.divide(m);
        let t = m;

        m = a.mod(m);
        a = t;

        t = x0;
        x0 = x1.subtract(q.multiply(x0));
        x1 = t;
    }

    if (x1.compareTo(BigInteger.ZERO) < 0) {
        x1 = x1.add(m0);
    }

    return x1;
}

// Define the given hexadecimal values
const pHex = "F7E75FDC469067FFDC4E847C51F452DF";
const qHex = "E85CED54AF57E53E092113E62F436F4F";
const eHex = "0D88C3";

// Convert hexadecimal values to big integers
const p = new BigInteger(pHex, 16);
const q = new BigInteger(qHex, 16);
const e = new BigInteger(eHex, 16);

// Calculate n
const n = p.multiply(q);

// Calculate phi(n)
const pMinus1 = p.subtract(BigInteger.ONE);
const qMinus1 = q.subtract(BigInteger.ONE);
const phiN = pMinus1.multiply(qMinus1);

// Calculate d, the modular multiplicative inverse of e mod phi(n)
const d = modInverse(e, phiN);

// Print the results
console.log("p (decimal):", p.toString());
console.log("q (decimal):", q.toString());
console.log("e (decimal):", e.toString());
console.log("n (decimal):", n.toString());
console.log("phi(n) (decimal):", phiN.toString());
console.log("d (decimal):", d.toString());
