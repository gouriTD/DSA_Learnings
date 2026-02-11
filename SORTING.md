## Comparison between Selection and Bubble sort.
| sl. | Selection Sort | Bubble Sort|
:---|:---|:---
| 1 | Time complexity = O(n^2) | Time complexity = O(n^2), but best case when we have a sorted array its O(n)
| 2 | Swap of elements = O(n) as swap happens once in outer loop | Swap of elements = O(n2), carried out in each inner iteration |
| 3 | Comparison = O(n^2) as each element is compared with its adjacent element. Also eventhough the array is sorted the elements would be still compared. | Comparison = O(n^2) as each element is compared with its adjacent element. Also eventhough the array is sorted the elements would be still compared. |
| 4 | Not stable | Stable |
| 5 | Performant when used with small data size of <20| Used when we have a dataset <20|
| 6 | Not used in real world applications | Not used in real world applications |

> NOTE: For real world use we make use of the following algorithms for sorting:
- Merge sort.
- Tim sort.
- Quick sort.
- Insertion sort for small arrays.