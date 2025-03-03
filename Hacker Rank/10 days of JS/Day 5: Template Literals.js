
function sides(literals, ...expressions) {
    let A = expressions[0]
    let P = expressions[1]
    let s1 = (P + (Math.sqrt((P ** 2) - (16 * A)))) / 4
    let s2 = (P - (Math.sqrt((P ** 2) - (16 * A)))) / 4
    // console.log(s1)
    return [s1, s2].sort()
}

s1 = 10
s2 = 14
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
// console.log(sides("", [140, 48]))
console.log(x)
// sides("", [140, 48])
