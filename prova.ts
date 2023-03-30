function populationDifference(population1: number, population2: number): number {
    if (population1 > population2) {
        return population1 - population2
    }

    return population2 - population1
}

const chinaPop = 10000;
const usaPop = 1000;

const difference = populationDifference(chinaPop, usaPop)

console.log(`Pop difference : ${difference}`)