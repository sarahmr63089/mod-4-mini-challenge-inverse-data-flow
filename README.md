# React Mini Challenge: Inverse Data Flow

## Instructions

Fork this repo, then run `git clone` to download it locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

To get started, run:

```
npm install
npm start
```

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

## Assignment

We're going to refactor our Spice Store app to better isolate out separate components, and understand how to pass data from a child to a parent using **inverse data flow**.

The started code should feel similar to the State & Events Mini Challenge. We introduced a couple new components:
- `Filter` as a child of the `SpiceList` component
- `NewSpice` as a child of the `App` component

Complete these deliverables:

<!-- - [ ] When a user types in the search bar, the list of spices displayed should be filtered to match based on the text in the input field and the *notes* property of the spice. For example, if the user types 'warm', the list should show Allspice, Cardamom Pods, and Garam Masala. -->
<!-- - [ ] When the user clicks the checkbox next to '4 Star Only', the list of spices should be filtered to only display the spices with a *rating* of 4 or higher. -->
<!-- - [ ] When a user submits the New Spice form, that new spice should be added to the list of spices in our app. Some starter code is already in place, but you will need to find a way to use the `addNewSpice` function from the App component when the NewSpice form submits. You'll also need to make the NewSpice form inputs controlled to keep the form in sync with state. -->

For both these deliverables, you'll need to set state in the `SpiceList` component after an event occurs in the `Filter` component.

## Tips
You will need to find a way to pass data up from a child to a parent component, instead of the normal flow of a parent passing down data to a child. Refer to the [Thinking In React - Inverse Data Flow](https://reactjs.org/docs/thinking-in-react.html#step-5-add-inverse-data-flow) section for an example.

Make sure you are comfortable passing callbacks around and understand the difference between a function *definition* and a function *invocation*.

For the form, you'll need to set up each input field as a [controlled component](https://reactjs.org/docs/forms.html#controlled-components). Check the React docs if you're not sure how! You'll also need to use inverse data flow to pass data up from the form to the App component so you can use the `addNewSpice` function in App to add the new spice to state.
