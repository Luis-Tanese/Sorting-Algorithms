const bubbleSort = (arr) => {
    const n = arr.length;
    const sortedArray = [...arr];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                [sortedArray[j], sortedArray[j + 1]] = [
                    sortedArray[j + 1],
                    sortedArray[j],
                ];
            }
        }
    }
    return sortedArray;
};

const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = arr.filter((el) => el < pivot);
    const right = arr.filter((el) => el > pivot);
    const middle = arr.filter((el) => el === pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    const merge = (left, right) => {
        const result = [];
        while (left.length && right.length) {
            result.push(left[0] < right[0] ? left.shift() : right.shift());
        }
        return [...result, ...left, ...right];
    };

    return merge(left, right);
};

const countingSort = (arr) => {
    const max = Math.max(...arr);
    const count = Array(max + 1).fill(0);
    arr.forEach((num) => count[num]++);
    const result = [];
    count.forEach((freq, num) => {
        for (let i = 0; i < freq; i++) result.push(num);
    });
    return result;
};

const radixSort = (arr) => {
    const getMaxDigits = (nums) => Math.max(...nums).toString().length;
    const getDigit = (num, place) => Math.floor(num / Math.pow(10, place)) % 10;

    let sortedArray = [...arr];
    const maxDigits = getMaxDigits(sortedArray);

    for (let k = 0; k < maxDigits; k++) {
        const buckets = Array.from({ length: 10 }, () => []);
        sortedArray.forEach((num) => buckets[getDigit(num, k)].push(num));
        sortedArray = [].concat(...buckets);
    }

    return sortedArray;
};

const shellSort = (arr) => {
    const sortedArray = [...arr];
    let gap = Math.floor(sortedArray.length / 2);
    while (gap > 0) {
        for (let i = gap; i < sortedArray.length; i++) {
            const temp = sortedArray[i];
            let j = i;
            while (j >= gap && sortedArray[j - gap] > temp) {
                sortedArray[j] = sortedArray[j - gap];
                j -= gap;
            }
            sortedArray[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return sortedArray;
};

const bucketSort = (arr, bucketSize = 5) => {
    if (arr.length === 0) return arr;

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const bucketCount = Math.floor((max - min) / bucketSize) + 1;
    const buckets = Array.from({ length: bucketCount }, () => []);

    arr.forEach((num) => {
        const bucketIndex = Math.floor((num - min) / bucketSize);
        buckets[bucketIndex].push(num);
    });

    return buckets.reduce(
        (sortedArray, bucket) => sortedArray.concat(quickSort(bucket)),
        []
    );
};

const timSort = (arr) => {
    const MIN_RUN = 32;

    const insertionSortForTim = (arr, start, end) => {
        for (let i = start + 1; i <= end; i++) {
            const key = arr[i];
            let j = i - 1;
            while (j >= start && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    };

    const mergeForTim = (arr, start, mid, end) => {
        const left = arr.slice(start, mid + 1);
        const right = arr.slice(mid + 1, end + 1);
        let i = 0,
            j = 0,
            k = start;

        while (i < left.length && j < right.length) {
            arr[k++] = left[i] <= right[j] ? left[i++] : right[j++];
        }
        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];
    };

    const sortedArray = [...arr];
    for (let i = 0; i < sortedArray.length; i += MIN_RUN) {
        insertionSortForTim(
            sortedArray,
            i,
            Math.min(i + MIN_RUN - 1, sortedArray.length - 1)
        );
    }

    let size = MIN_RUN;
    while (size < sortedArray.length) {
        for (let start = 0; start < sortedArray.length; start += 2 * size) {
            const mid = Math.min(start + size - 1, sortedArray.length - 1);
            const end = Math.min(start + 2 * size - 1, sortedArray.length - 1);
            if (mid < end) mergeForTim(sortedArray, start, mid, end);
        }
        size *= 2;
    }

    return sortedArray;
};

const cocktailShakerSort = (arr) => {
    const sortedArray = [...arr];
    let start = 0;
    let end = sortedArray.length - 1;
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = start; i < end; i++) {
            if (sortedArray[i] > sortedArray[i + 1]) {
                [sortedArray[i], sortedArray[i + 1]] = [
                    sortedArray[i + 1],
                    sortedArray[i],
                ];
                swapped = true;
            }
        }

        if (!swapped) break;

        swapped = false;
        end--;

        for (let i = end - 1; i >= start; i--) {
            if (sortedArray[i] > sortedArray[i + 1]) {
                [sortedArray[i], sortedArray[i + 1]] = [
                    sortedArray[i + 1],
                    sortedArray[i],
                ];
                swapped = true;
            }
        }

        start++;
    }

    return sortedArray;
};

const pigeonholeSort = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const range = max - min + 1;
    const holes = Array(range).fill(0);

    arr.forEach((num) => holes[num - min]++);
    const sortedArray = [];
    holes.forEach((count, i) => {
        for (let j = 0; j < count; j++) {
            sortedArray.push(i + min);
        }
    });

    return sortedArray;
};

const combSort = (arr) => {
    const shrink = 1.3;
    let sortedArray = [...arr];
    let gap = sortedArray.length;
    let swapped = true;

    while (gap > 1 || swapped) {
        gap = Math.floor(gap / shrink) || 1;
        swapped = false;

        for (let i = 0; i + gap < sortedArray.length; i++) {
            if (sortedArray[i] > sortedArray[i + gap]) {
                [sortedArray[i], sortedArray[i + gap]] = [
                    sortedArray[i + gap],
                    sortedArray[i],
                ];
                swapped = true;
            }
        }
    }

    return sortedArray;
};

const gnomeSort = (arr) => {
    const sortedArray = [...arr];
    let i = 0;

    while (i < sortedArray.length) {
        if (i === 0 || sortedArray[i] >= sortedArray[i - 1]) {
            i++;
        } else {
            [sortedArray[i], sortedArray[i - 1]] = [
                sortedArray[i - 1],
                sortedArray[i],
            ];
            i--;
        }
    }

    return sortedArray;
};

const cycleSort = (arr) => {
    const sortedArray = [...arr];
    let writes = 0;

    for (
        let cycleStart = 0;
        cycleStart < sortedArray.length - 1;
        cycleStart++
    ) {
        let item = sortedArray[cycleStart];
        let pos = cycleStart;

        for (let i = cycleStart + 1; i < sortedArray.length; i++) {
            if (sortedArray[i] < item) pos++;
        }

        if (pos === cycleStart) continue;

        while (item === sortedArray[pos]) pos++;
        [sortedArray[pos], item] = [item, sortedArray[pos]];
        writes++;

        while (pos !== cycleStart) {
            pos = cycleStart;

            for (let i = cycleStart + 1; i < sortedArray.length; i++) {
                if (sortedArray[i] < item) pos++;
            }

            while (item === sortedArray[pos]) pos++;
            [sortedArray[pos], item] = [item, sortedArray[pos]];
            writes++;
        }
    }

    return sortedArray;
};

const sort = (array, algorithm = "quickSort") => {
    if (!Array.isArray(array)) throw new Error("Input must be an array.");
    const algorithms = {
        bubbleSort,
        quickSort,
        mergeSort,
        countingSort,
        radixSort,
        shellSort,
        bucketSort,
        timSort,
        cocktailShakerSort,
        pigeonholeSort,
        combSort,
        gnomeSort,
        cycleSort,
    };
    if (!algorithms[algorithm])
        throw new Error(`Algorithm ${algorithm} not supported.`);
    return algorithms[algorithm](array);
};

module.exports = sort;
