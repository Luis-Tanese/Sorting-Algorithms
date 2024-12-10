const generateDataset = (size, type = "random") => {
    const dataset = Array.from({ length: size }, (_, i) => i + 1);
    switch (type) {
        case "sorted":
            return dataset;
        case "reverse":
            return dataset.reverse();
        case "random":
        default:
            return dataset.sort(() => Math.random() - 0.5);
    }
};

const datasets = {
    smallRandom: generateDataset(100, "random"),
    smallSorted: generateDataset(100, "sorted"),
    smallReverse: generateDataset(100, "reverse"),
    mediumRandom: generateDataset(1000, "random"),
    largeRandom: generateDataset(10000, "random"),
};

module.exports = datasets;