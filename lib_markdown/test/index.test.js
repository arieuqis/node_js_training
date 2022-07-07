import getFileAsyncAwait from "../index.js";

const result = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('getFileAsyncAwait::', () =>{

    it('should be function', () => {
        expect(typeof getFileAsyncAwait).toBe('function')
    })

    it('should return array with results', async () => {
        const returned = await getFileAsyncAwait('/Users/arieuqis/Documents/projects/training/node_js/lib_markdown/test/files/texto1.md')
        expect(returned).toEqual(result)
    })

    it('should return "no links were found"', async () => {
        const returned = await getFileAsyncAwait('/Users/arieuqis/Documents/projects/training/node_js/lib_markdown/test/files/texto1_without_links.md')
        expect(returned).toEqual('no links were found')
    })

    it('should throw error when no file is found', async () => {
        await expect(getFileAsyncAwait('/Users/arieuqis/Documents/projects/training/node_js/lib_markdown/test/files/texto1_without_links11.md')).rejects.toThrow(/no such file/)
    })
})
