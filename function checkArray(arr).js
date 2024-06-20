function checkArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Не является массивом");
    }
    if (arr.length === 0) {
        throw new Error('Массив пуст');
    }
}

try {
    checkArray([]);
} catch (e) {
    console.error(e.message);
}

try {
    checkArray([1, 2, 3]);
    console.log('Массив не пуст');
} catch (e) {
    console.error(e.message);
}