// Intersection of 2 arrays

// intersect([1,2,2,3,4,4], [2,2,4,5,5,6,2000]) => [2,2,4]

function intersect(arr1, arr2) {
    let freq1 = {};
    let freq2 = {};

    for(let i = 0; i < arr1.length; i++) {
        if (freq1[arr1[i]]) {
            freq1[arr1[i]]++;
        } else {
            freq1[arr1[i]] = 1;
        }
    }

    for(let i = 0; i < arr2.length; i++) {
        if (freq2[arr2[i]]) {
            freq2[arr2[i]]++;
        } else {
            freq2[arr2[i]] = 1;
        }
    }

    let intersection = [];
    for (let key in freq1) {
        if (freq2[key]) {
            let minCount = Math.min(freq1[key], freq2[key]);
            for (let i = 0; i < minCount; i++) {
                intersection.push(parseInt(key));
            }
        }
    }

    return intersection;
}

console.log(intersect([1,2,2,3,4,4], [2,2,4,5,5,6,2000]));