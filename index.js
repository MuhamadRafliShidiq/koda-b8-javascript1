// Membuat program hitung luas dan keliling lingkaran
let r = 7;
if (typeof r !== "number") {
    console.log(error = "r must be a number");
    return
}
if (r % 7 == 0) {
    phi = 22 / 7;
} else {
    phi = 3.14;
}
// console.log(phi);
const k = 2 * phi * r;
const l = phi * r * r;
console.log(k);
console.log(l);
