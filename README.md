# StickyNotes App

![Preview Image](https://user-images.githubusercontent.com/11996508/193679530-35abf198-5fbf-43de-8148-337ee0c8c5d4.png)

## 1. Requirements

From the above document, we can extract the following requirements.

- [x] 1. Create a new note of the specified size at the specified position.
- [x] 2. Change note size by dragging.
- [x] 3. Move a note by dragging.
- [x] 4. Remove a note by dragging it over a predefined "trash" zone.
- [x] 5. Entering/Editing note text.
- [x] 6. Moving notes to front
- [x] 7. Saving notes to local storage
- [x] 8. Different note colors
- [x] 9. Saving notes via async API

Using the above Requirements, we can come up with a [Formal User Requirement Specification](./specs/) using Gherkin syntax.

## 2. Design and Prototyping

See [Figma](https://www.figma.com/file/Gu3kf4IjUVi306ZvLoSfCT/Sticky-Notes?node-id=1%3A59).

## 3. How to use

To setup, run `npm install`.

To view Storybook, run `npm run storybook`.

To start the app, run `npm start`.

## 4. Testing

Frontend tests use snapshot testing via Jest and Storybook.



