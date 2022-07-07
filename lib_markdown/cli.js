import getFileAsyncAwait from './index.js'
import chalk from "chalk"

const path = process.argv

const processText = async (filePath) => {
    const result = await getFileAsyncAwait(filePath[2])
    console.log(chalk.yellow('links'), result)
}

processText(path)