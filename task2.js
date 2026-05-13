// Membuat program untuk memunculkan string "Koda" ketika mengakses objek we.are.the.best

const we = {
    are: {
        the: {
            name: "Rafli",
            best: "Koda"
        }
    }
}
console.log(we.are.the.best);

// Membuat program untuk memunculkan string "Hello World" ketika mengakses objek hello.world

const hello = {
    world: "Hello World"
}
console.log(hello.world);

// Membuat program untuk memunculkan string "Tech Academy" ketika mengakses objek obj.str[3][1][2].man[0].tech.academy

const obj = {
    str: [
        1, 2, 3,
        [
            1, [
                1, 2,
                {
                    man: [
                        {
                            tech: {
                                academy: "Tech Academy"
                            }
                        }
                    ]
                }
            ]
        ]
    ]
}
console.log(obj.str[3][1][2].man[0].tech.academy);

// Membuat program untuk memunculkan string "Apple" ketika mengakses array my[0].favourite[3].fruit.is

const my = [
    {
        favourite: [
            1, 2, 3, {
                fruit: {
                    is: "Apple"
                }
            }
        ]
    }
]
console.log(my[0].favourite[3].fruit.is)

// Memunculkan number 32 ketika kalkulasi num.first[1] + num.second[2]

const num = {
    first: [1, 30, 3],
    second: [4, 5, 2]
}
console.log(num.first[1] + num.second[2]);