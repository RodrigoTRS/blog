import { generateSlug } from "../utils/generate-slug.js"
import { faker } from "@faker-js/faker"
import fs from "fs"

const numberOfPosts = 10
const numberOfCategories = 10

function generateCategoriesObject(count) {
    const categories = []

    for (let i=0;i<count;i++) {
        const title = faker.music.genre()

        const categorie = {
            title,
            slug: generateSlug(title)
        }
        
        categories.push(categorie)
    }

    return categories
}

function createRandomPost() {
    const postFields = {
        title: faker.word.words(5),
        categories: [
            categories[faker.number.int({ min: 0, max: numberOfCategories - 1})],
            categories[faker.number.int({ min: 0, max: numberOfCategories - 1})]
        ],
        content: faker.word.words(500),
        createdAt: new Date(faker.date.past())
    }
    
    const post = {
        ...postFields,
        slug: generateSlug(postFields.title),
        isMain: false
    }
    
    return post
}


function generatePostsObject(count) {
    const posts = []

    for (let i=0;i<count;i++) {
        posts.push(createRandomPost())
    }

    return posts
}

const categories = generateCategoriesObject(numberOfCategories)
const posts = generatePostsObject(numberOfPosts)

posts[0].isMain = true

const apiObject = {
    posts,
    categories
}

const apiJSON = JSON.stringify(apiObject, null, 2)

fs.writeFile("./db.json", apiJSON, (err) => {
    if (err) {
        console.log('Error writing file', err);
    }
});
