export const getRealDataApi = async () => {
    const response = await fetch('https://run.mocky.io/v3/aa5436ed-9612-45b1-9bc0-7670113268d6');
    const result = await response.json();

    return result;
}

export function getSomeDataSomething() {
    return 'something'
}