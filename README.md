# Yummly search web client

> Based on ReactJs, [Redux][redux] and Webpack

## Demo

[yummly.surge.sh](http://yummly.surge.sh)

## API endpoints

 - http://api.yummly.com/v1/api/recipes?q={search+string}( + additional query parameters)
 - http://api.yummly.com/v1/api/recipe/:id

 More on [documentation][yummly-api-docs] page.

## TODO

 - A text input box and a Search button. The user enters arbitrary text and clicks the button.
 - The app makes the Search Recipes API call to Yummly and presents the user with a grid display of recipe pictures and titles.
 - The user may click one of the recipes. The app then makes a Get Recipe API call and shows recipe details: the picture, the title, and the list of ingredients.

[redux]: http://redux.js.org/docs/introduction/
[yummly-api-docs]: https://developer.yummly.com/documentation

