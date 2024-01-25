# Jokes

## Overview
The Joke App is a fun and interactive web application that fetches and displays jokes from various categories. The app uses the JokeAPI to fetch jokes and displays them in a user-friendly interface.

## Features
- **Category Selection**: Users can select a category of jokes they are interested in. The categories include 'any', 'programming', 'misc', 'dark', 'pun', 'spooky', and 'christmas'.
- **Joke Display**: The selected joke is displayed in a content box. If the joke has a setup and delivery, both are displayed. Otherwise, only the joke is displayed.
- **Navigation**: Users can navigate through the jokes using the 'Previous' and 'Next' buttons.

## How to Use
1. Select a category from the dropdown menu.
2. Click the 'Search' button to fetch a joke from the selected category.
3. The joke will be displayed in the content box.
4. Use the 'Previous' and 'Next' buttons to navigate through the jokes.

## Error Handling
If there is an error in fetching the data, an alert message "Failed to fetch data" will be displayed.

## Dependencies
- The app uses the JokeAPI to fetch jokes. The API key is `https://v2.jokeapi.dev/joke`.

## Future Improvements
- Add more categories for jokes.
- Improve error handling by providing more specific error messages.
- Enhance the user interface for a better user experience.
