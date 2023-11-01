function longestCommonPrefix(strings: string[]): string {
    if (strings.length === 0) {
        return "";
    }

    // Находим строку с минимальной длиной в массиве
    const minLength = Math.min(...strings.map((str) => str.length));
    let commonPrefix = "";

    for (let i = 0; i < minLength; i++) {
        const char = strings[0][i]; // Получаем символ из первой строки

        // Проверяем, содержат ли остальные строки символ char на той же позиции
        if (strings.every((str) => str[i] === char)) {
            commonPrefix += char;
        } else {
            break; // Если символы не совпадают, завершаем поиск
        }
    }

    return commonPrefix;
}

const example1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(example1));

const example2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(example2));