function asyncFunctionWithCallback(arg, callback) {
    setTimeout(() => {
        if (arg) {
            callback(null, "Success!");
        } else {
            callback("Error: No argument provided");
        }
    }, 1000);
}

function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

// Преобразуем нашу функцию
const asyncFunctionWithPromise = promisify(asyncFunctionWithCallback);

// Используем преобразованную функцию
asyncFunctionWithPromise(true)
    .then(result => {
        console.log(result); // "Success!"
    })
    .catch(error => {
        console.error(error);
    });

asyncFunctionWithPromise(false)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error); // "Error: No argument provided"
    });