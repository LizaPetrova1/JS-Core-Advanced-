async function fetchUserData(userId) {
    const url = `https://web.telegram.org/k/#@outcastSI`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error fetching user data: ${response.statusText}`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Fetch user data failed', error);
        throw error; // Проброс ошибки для обработки в вызывающем коде
    }
}

// Пример использования
fetchUserData(1)
    .then(userData => {
        console.log(userData);
    })
    .catch(error => {
        console.error('Error:', error);
    });