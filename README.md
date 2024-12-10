# Research on Sorting Algorithms and Their Performance

## Introduction

Sorting algorithms are important in computer science, serving as the basis for many applications. This silly research evaluates the performance of many sorting algorithms on datasets of different sizes and characteristics. The study has both classical and modern algorithms, analyzing their efficiency in terms of execution time under different conditions. I used Node.js to run it in my console, so the source code needs that.

---

## Methodology

To evaluate the performance of sorting algorithms, the following methodology was employed:

1. **Algorithms Tested**: 
   - **Bubble Sort**
   - **Quick Sort**
   - **Merge Sort**
   - **Counting Sort**
   - **Radix Sort**
   - **Shell Sort**
   - **Bucket Sort**
   - **Tim Sort**
   - **Cocktail Shaker Sort**
   - **Pigeonhole Sort**
   - **Comb Sort**
   - **Gnome Sort**
   - **Cycle Sort**

2. **Datasets**: 
   - Five datasets were generated for testing each algorithm:
     - **Small Random**: 100 randomly ordered integers.
     - **Small Sorted**: 100 integers in ascending order.
     - **Small Reverse**: 100 integers in descending order.
     - **Medium Random**: 1,000 randomly ordered integers.
     - **Large Random**: 10,000 randomly ordered integers.

3. **Testing Environment**:
   - Each algorithm was tested in isolation using the JavaScript runtime on Node.js.
   - The datasets were generated programmatically to ensure uniformity.
   - Execution times were measured using high-resolution timers (`console.time` and `console.timeEnd`).

4. **Performance Metrics**:
   - The execution time of each algorithm was recorded in milliseconds.
   - Each dataset was tested five times, and the average time was calculated for consistency.

5. **Data Presentation**:
   - Performance data is presented in tables. **Refer to the tables in the section [Performance Data](https://github.com/Luis-Tanese/Sorting-Algorithms/edit/main/README.md#performance-data)**.

---

## Sorting Algorithm Descriptions

### 1. **Bubble Sort**
Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

**Time Complexity**:
- Best Case: O(n) (already sorted)
- Average and Worst Case: O(n²)

---

### 2. **Quick Sort**
Quick Sort is a divide-and-conquer algorithm. It selects a "pivot" element and partitions the array into two sub-arrays: one with elements less than the pivot and the other with elements greater than the pivot. It recursively sorts the sub-arrays.

**Time Complexity**:
- Best and Average Case: O(n log n)
- Worst Case: O(n²) (poor pivot selection)

---

### 3. **Merge Sort**
Merge Sort is another divide-and-conquer algorithm. It splits the array into halves, recursively sorts each half, and merges them back together in sorted order.

**Time Complexity**:
- Best, Average, and Worst Case: O(n log n)

---

### 4. **Counting Sort**
Counting Sort is a non-comparison-based algorithm. It counts the occurrences of each element and uses that information to place elements in the correct position.

**Time Complexity**:
- Best, Average, and Worst Case: O(n + k), where `k` is the range of the input values.

---

### 5. **Radix Sort**
Radix Sort processes the digits of numbers one at a time, sorting them using a stable sorting algorithm like Counting Sort. It starts with the least significant digit and moves to the most significant digit.

**Time Complexity**:
- Best, Average, and Worst Case: O(nk), where `k` is the number of digits.

---

### 6. **Shell Sort**
Shell Sort is an optimization of Insertion Sort. It sorts elements far apart from each other and reduces the gap between elements to be compared as the algorithm progresses.

**Time Complexity**:
- Best Case: O(n log n)
- Average and Worst Case: O(n²)

---

### 7. **Bucket Sort**
Bucket Sort distributes elements into a number of buckets, sorts each bucket individually (often with Quick Sort), and concatenates the results.

**Time Complexity**:
- Best and Average Case: O(n + k), where `k` is the number of buckets.
- Worst Case: O(n²)

---

### 8. **Tim Sort**
Tim Sort is a hybrid algorithm combining Merge Sort and Insertion Sort. It identifies small runs of sorted data and merges them to form the sorted array.

**Time Complexity**:
- Best Case: O(n)
- Average and Worst Case: O(n log n)

---

### 9. **Cocktail Shaker Sort**
Cocktail Shaker Sort is a bidirectional variant of Bubble Sort. It alternates between forward and backward passes through the list.

**Time Complexity**:
- Best Case: O(n)
- Average and Worst Case: O(n²)

---

### 10. **Pigeonhole Sort**
Pigeonhole Sort is a counting-based algorithm. It places elements into holes corresponding to their values and constructs the sorted array from the holes.

**Time Complexity**:
- Best, Average, and Worst Case: O(n + k), where `k` is the range of values.

---

### 11. **Comb Sort**
Comb Sort is an improvement over Bubble Sort. It uses a shrinking gap to compare and swap elements, starting with a large gap and reducing it incrementally.

**Time Complexity**:
- Best Case: O(n log n)
- Average and Worst Case: O(n²)

---

### 12. **Gnome Sort**
Gnome Sort is a simple algorithm similar to Insertion Sort. It swaps elements until the entire list is sorted, "gnome-style" (moving back to fix order).

**Time Complexity**:
- Best Case: O(n)
- Average and Worst Case: O(n²)

---

### 13. **Cycle Sort**
Cycle Sort is an in-place sorting algorithm. It determines the correct position of each element and places it there, minimizing the number of writes.

**Time Complexity**:
- Best, Average, and Worst Case: O(n²)

---

## Performance Data

## Test 1

| Algorithm         | Small Random | Small Sorted | Small Reverse | Medium Random | Large Random |
|-------------------|--------------|--------------|---------------|---------------|--------------|
| Bubble Sort       | 1.044ms      | 0.046ms      | 0.012ms       | 0.944ms       | 96.358ms     |
| Quick Sort        | 0.205ms      | 0.476ms      | 0.614ms       | 1.252ms       | 4.920ms      |
| Merge Sort        | 0.237ms      | 0.087ms      | 0.569ms       | 1.582ms       | 10.181ms     |
| Counting Sort     | 0.221ms      | 0.021ms      | 0.023ms       | 0.102ms       | 1.071ms      |
| Radix Sort        | 0.207ms      | 0.064ms      | 0.076ms       | 0.667ms       | 2.839ms      |
| Shell Sort        | 0.131ms      | 0.028ms      | 0.044ms       | 0.929ms       | 1.408ms      |
| Bucket Sort       | 0.192ms      | 0.084ms      | 0.086ms       | 1.297ms       | 20.501ms     |
| Tim Sort          | 0.340ms      | 0.023ms      | 0.086ms       | 0.699ms       | 0.735ms      |
| Cocktail Shaker   | 1.004ms      | 0.092ms      | 1.219ms       | 0.797ms       | 86.416ms     |
| Pigeonhole Sort   | 0.188ms      | 0.021ms      | 0.028ms       | 0.123ms       | 1.074ms      |
| Comb Sort         | 0.232ms      | 0.037ms      | 0.061ms       | 1.764ms       | 1.357ms      |
| Gnome Sort        | 0.660ms      | 0.081ms      | 0.020ms       | 0.748ms       | 67.332ms     |
| Cycle Sort        | 0.452ms      | 0.131ms      | 0.012ms       | 2.130ms       | 225.121ms    |

---

## Test 2

| Algorithm         | Small Random | Small Sorted | Small Reverse | Medium Random | Large Random |
|-------------------|--------------|--------------|---------------|---------------|--------------|
| Bubble Sort       | 1.162ms      | 0.105ms      | 0.012ms       | 0.828ms       | 95.384ms     |
| Quick Sort        | 0.208ms      | 0.231ms      | 1.016ms       | 1.056ms       | 4.675ms      |
| Merge Sort        | 0.235ms      | 0.088ms      | 0.091ms       | 1.729ms       | 10.322ms     |
| Counting Sort     | 0.230ms      | 0.025ms      | 0.029ms       | 0.100ms       | 1.000ms      |
| Radix Sort        | 0.193ms      | 0.063ms      | 0.074ms       | 0.693ms       | 3.896ms      |
| Shell Sort        | 0.128ms      | 0.028ms      | 0.034ms       | 0.774ms       | 1.451ms      |
| Bucket Sort       | 0.179ms      | 0.080ms      | 0.086ms       | 0.988ms       | 19.406ms     |
| Tim Sort          | 0.329ms      | 0.027ms      | 0.081ms       | 0.977ms       | 0.753ms      |
| Cocktail Shaker   | 1.038ms      | 0.105ms      | 1.052ms       | 0.766ms       | 85.485ms     |
| Pigeonhole Sort   | 0.139ms      | 0.019ms      | 0.025ms       | 0.122ms       | 2.094ms      |
| Comb Sort         | 0.235ms      | 0.037ms      | 0.060ms       | 1.697ms       | 1.156ms      |
| Gnome Sort        | 0.924ms      | 0.037ms      | 0.021ms       | 0.739ms       | 74.330ms     |
| Cycle Sort        | 0.507ms      | 0.095ms      | 0.185ms       | 9.646ms       | 226.462ms    |

---

## Test 3

| Algorithm         | Small Random | Small Sorted | Small Reverse | Medium Random | Large Random |
|-------------------|--------------|--------------|---------------|---------------|--------------|
| Bubble Sort       | 1.267ms      | 0.054ms      | 0.014ms       | 0.817ms       | 97.768ms     |
| Quick Sort        | 0.229ms      | 0.397ms      | 1.448ms       | 1.708ms       | 4.985ms      |
| Merge Sort        | 0.267ms      | 0.105ms      | 0.191ms       | 1.557ms       | 9.637ms      |
| Counting Sort     | 0.253ms      | 0.030ms      | 0.024ms       | 0.115ms       | 1.138ms      |
| Radix Sort        | 1.040ms      | 0.086ms      | 0.077ms       | 0.921ms       | 3.404ms      |
| Shell Sort        | 0.177ms      | 0.030ms      | 0.035ms       | 0.981ms       | 1.345ms      |
| Bucket Sort       | 0.197ms      | 0.091ms      | 0.111ms       | 0.727ms       | 18.996ms     |
| Tim Sort          | 0.362ms      | 0.022ms      | 0.090ms       | 0.723ms       | 1.067ms      |
| Cocktail Shaker   | 1.032ms      | 0.063ms      | 0.013ms       | 0.832ms       | 85.483ms     |
| Pigeonhole Sort   | 0.181ms      | 0.019ms      | 0.019ms       | 0.130ms       | 1.045ms      |
| Comb Sort         | 0.273ms      | 0.040ms      | 0.064ms       | 1.779ms       | 1.292ms      |
| Gnome Sort        | 1.065ms      | 0.035ms      | 0.017ms       | 0.629ms       | 68.139ms     |
| Cycle Sort        | 0.609ms      | 0.097ms      | 0.189ms       | 11.254ms      | 225.079ms    |

---

## Test 4

| Algorithm         | Small Random | Small Sorted | Small Reverse | Medium Random | Large Random |
|-------------------|--------------|--------------|---------------|---------------|--------------|
| Bubble Sort       | 1.099ms      | 0.058ms      | 0.012ms       | 0.806ms       | 102.874ms    |
| Quick Sort        | 0.237ms      | 0.244ms      | 0.935ms       | 1.067ms       | 5.070ms      |
| Merge Sort        | 0.248ms      | 0.278ms      | 0.135ms       | 1.731ms       | 10.101ms     |
| Counting Sort     | 0.225ms      | 0.029ms      | 0.033ms       | 0.119ms       | 1.088ms      |
| Radix Sort        | 0.198ms      | 0.073ms      | 0.168ms       | 0.755ms       | 3.353ms      |
| Shell Sort        | 0.132ms      | 0.030ms      | 0.088ms       | 0.839ms       | 1.408ms      |
| Bucket Sort       | 0.234ms      | 0.082ms      | 0.243ms       | 1.091ms       | 20.451ms     |
| Tim Sort          | 0.347ms      | 0.029ms      | 0.097ms       | 0.704ms       | 0.775ms      |
| Cocktail Shaker   | 1.025ms      | 0.055ms      | 1.203ms       | 0.764ms       | 86.760ms     |
| Pigeonhole Sort   | 0.138ms      | 0.024ms      | 0.026ms       | 0.112ms       | 1.660ms      |
| Comb Sort         | 0.232ms      | 0.042ms      | 0.060ms       | 1.835ms       | 1.277ms      |
| Gnome Sort        | 1.242ms      | 0.052ms      | 0.018ms       | 0.848ms       | 66.142ms     |
| Cycle Sort        | 0.592ms      | 0.149ms      | 0.011ms       | 2.129ms       | 223.119ms    |

---

## Test 5

| Algorithm         | Small Random | Small Sorted | Small Reverse | Medium Random | Large Random |
|-------------------|--------------|--------------|---------------|---------------|--------------|
| Bubble Sort       | 1.285ms      | 0.223ms      | 0.012ms       | 0.862ms       | 96.035ms     |
| Quick Sort        | 0.271ms      | 0.247ms      | 0.756ms       | 1.602ms       | 5.594ms      |
| Merge Sort        | 0.309ms      | 0.288ms      | 0.094ms       | 1.631ms       | 10.378ms     |
| Counting Sort     | 0.339ms      | 0.021ms      | 0.021ms       | 0.111ms       | 1.645ms      |
| Radix Sort        | 0.364ms      | 0.062ms      | 0.074ms       | 1.003ms       | 2.970ms      |
| Shell Sort        | 0.160ms      | 0.034ms      | 0.035ms       | 0.852ms       | 1.417ms      |
| Bucket Sort       | 0.254ms      | 0.078ms      | 0.416ms       | 1.130ms       | 18.037ms     |
| Tim Sort          | 0.386ms      | 0.023ms      | 0.106ms       | 0.788ms       | 1.736ms      |
| Cocktail Shaker   | 0.885ms      | 0.069ms      | 1.342ms       | 0.747ms       | 83.884ms     |
| Pigeonhole Sort   | 0.136ms      | 0.018ms      | 0.026ms       | 0.121ms       | 1.021ms      |
| Comb Sort         | 0.229ms      | 0.035ms      | 0.254ms       | 1.770ms       | 1.175ms      |
| Gnome Sort        | 0.645ms      | 0.058ms      | 0.017ms       | 0.666ms       | 68.308ms     |
| Cycle Sort        | 0.472ms      | 0.095ms      | 0.184ms       | 10.112ms      | 226.341ms    |

---

## Average Performance

| Algorithm         | Small Random | Small Sorted | Small Reverse | Medium Random | Large Random |
|-------------------|--------------|--------------|---------------|---------------|--------------|
| Bubble Sort       | 1.171ms      | 0.097ms      | 0.012ms       | 0.851ms       | 97.684ms     |
| Quick Sort        | 0.230ms      | 0.319ms      | 0.754ms       | 1.337ms       | 5.029ms      |
| Merge Sort        | 0.259ms      | 0.169ms      | 0.216ms       | 1.646ms       | 10.124ms     |
| Counting Sort     | 0.254ms      | 0.025ms      | 0.026ms       | 0.109ms       | 1.189ms      |
| Radix Sort        | 0.400ms      | 0.070ms      | 0.094ms       | 0.808ms       | 3.292ms      |
| Shell Sort        | 0.146ms      | 0.030ms      | 0.047ms       | 0.875ms       | 1.406ms      |
| Bucket Sort       | 0.211ms      | 0.083ms      | 0.188ms       | 1.046ms       | 19.078ms     |
| Tim Sort          | 0.353ms      | 0.025ms      | 0.092ms       | 0.778ms       | 0.813ms      |
| Cocktail Shaker   | 0.997ms      | 0.077ms      | 1.165ms       | 0.781ms       | 85.806ms     |
| Pigeonhole Sort   | 0.156ms      | 0.020ms      | 0.025ms       | 0.122ms       | 1.379ms      |
| Comb Sort         | 0.240ms      | 0.038ms      | 0.099ms       | 1.769ms       | 1.251ms      |
| Gnome Sort        | 0.907ms      | 0.053ms      | 0.019ms       | 0.726ms       | 68.050ms     |
| Cycle Sort        | 0.526ms      | 0.113ms      | 0.116ms       | 7.454ms       | 225.224ms    |

---

## Conclusion

The performance of sorting algorithms varies significantly depending on the dataset characteristics. Quick Sort, Merge Sort, and Tim Sort consistently perform well on large datasets, while simpler algorithms like Bubble Sort and Cocktail Shaker Sort struggle with larger inputs due to their higher time complexity. Counting-based algorithms like Counting Sort and Radix Sort are efficient for datasets with limited ranges.

---

## Notes

1. **Repository Structure**:
   - All the source code used for this research is available in the accompanying repository.
     - **`sortTan.js`**: Contains the implementation of all sorting algorithms.
     - **`datasets.js`**: Contains the code for generating datasets used for testing.
     - **`server.js`**: Contains the logic to start the performance tests and log the results.

2. **How to Run**:
   - Clone the repository.
   - Use Node.js to execute the tests:
     - Run `server.js` to start the performance evaluation
