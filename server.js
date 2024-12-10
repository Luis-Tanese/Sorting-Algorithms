const sort = require("./sortTan");
const datasets = require("./dataSets");

const algorithms = [
    "bubbleSort",
    "quickSort",
    "mergeSort",
    "countingSort",
    "radixSort",
    "shellSort",
    "bucketSort",
    "timSort",
    "cocktailShakerSort",
    "pigeonholeSort",
    "combSort",
    "gnomeSort",
    "cycleSort",
];

const results = {};

Object.entries(datasets).forEach(([datasetName, data]) => {
    console.log(`Dataset: ${datasetName}`);
    results[datasetName] = {};
    algorithms.forEach((algorithm) => {
        const dataCopy = [...data];
        console.time(algorithm);
        try {
            sort(dataCopy, algorithm);
        } catch (err) {
            console.error(`Error in ${algorithm}:`, err.message);
        }
        console.timeEnd(algorithm);
    });
});

console.log("Results recorded. Update performance.md with the data.");