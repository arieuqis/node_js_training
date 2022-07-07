import getFileAsyncAwait from './index.js'
import validateUrls from './http.validation.js'
import chalk from "chalk"

const path = process.argv

const processText = async (filePath) => {
    const result = await getFileAsyncAwait(filePath[2])
    if(filePath[3] === 'validar') {
        console.log(chalk.yellow('valid links'), await validateUrls(result))
    }else{
        console.log(chalk.yellow('links'), result)
    }
}

processText(path)