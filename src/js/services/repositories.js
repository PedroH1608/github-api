import { baseUrl, maxQuantity } from '/src/js/variables.js'

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${maxQuantity}`)
    return await response.json()
}

export { getRepositories }