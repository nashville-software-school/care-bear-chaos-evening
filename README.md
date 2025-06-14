# 🧸 Care Bear Chaos 🤼

This is a single session React workshop to demonstrate the basics of React functional components:
- useState
- useEffect
- jsx
- props
- event handlers
- **BONUS**: ternary statements

## Running the workshop

1. Click on **Use this template**
2. Check ☑️ **Include all branches**
3. Select your the cohort's organization as the owner
4. Clone the repo
5. Run `npm install`
6. Run the workshop from the `begin` branch
7. To start the project run `npm run dev`

### Walkthrough

#### Part 1: JSX and useState
1. Begin with the `App` component which returns a “container” `div` and a “story-block” `div` displaying the MadLib story 
2. Talk about basic JSX, rendering text, and how a component must only return one element
3. We want to capture the user’s input for each word and display them in the story text. Begin with a `div` with id “input-block” and in it a single input for one of the words
4. Talk about event listeners and capturing values from inputs. Console.log the event to see how to capture the value
5. Start by storing the input in a variable and rendering it. Then talk about why `useState` is important and how it triggers a re render of the component. Explain the anatomy of `useState`. Use console logs to show the component rendering
6. Explain the React devtools and how you can watch the state change
7. Finish creating state for each word, capturing it with input, and rendering on the story text

#### Part 2: Props
1. Point out how messy our App component is getting. Break  it up into two components: `Inputs` and `Story`
2. Talk about rendering function components
3. Explain props and pass them tot he components. Explain the prop object
4. Show the component tree in the React Devtools
5. Show the props in the components in React Devtools


#### Part 3: useEffect
1. We only want the story to appear once all the words have received a value
2. Ask if everyone understands what a ternary is. If they don’t show usage of ternaries in the `Story` component. Render a _______ if the word is blank
3. Once they understand ternaries, wrap the `Story` component in a ternary dependent on a variable called `showStory`
4. Create state for the `showStory` variable
5. Explain how we want to set the value of `showStory` to true once all the input state variables have received a value
6. Explain `useEffect` and its anatomy
7. Explain how `useEffect` can trigger an infinite loop
8. Use `useEffect` to set `showStory`
9. Use console logs to show how `useEffect` works


### Component Tree

To use the included styling, make sure the html structure is as follows after all components render:

```html
<div id="root">
  <div id="container">
    <div id="input-block">
      <label><input/><label>
      ...
    </div>
    <div id="story-block">
      <section></section>
      ...
    <div>
  </div>
</div>
```