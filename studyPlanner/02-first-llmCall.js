import { ai, model } from './01-sdk-client.js'


async function main() {
    try {

        const prompt = "Explain Closures in JS in an Easy Way"

        const response = await ai.models.generateContent({ model, contents: prompt })

        console.log(response.text)
 } catch (error) {
      console.log(error)
    }
}


main()