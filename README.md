# Hack Off The Hill 8: Intro to React

In this workshop, you will learn what React.js is, why we use React to create amazing websites, and dive into how to start your own React application!

**Teachers**: [Nareh Agazaryan](https://github.com/nareha), [Eric Yang](https://github.com/eric8yang)

## Resources
- <a href="https://tinyurl.com/hoth8-react-slides" target="_blank">Slides</a>

## What we'll be learning today

- [Background]()
  - [What is React?]()
  - [Why use React?]()
- [Setting Up React Apps]()
- [Working with React Apps]()
  - [Syntax]()
- [Components]()
- [Props]()
- [*array*.map()]()
- [Finished Demo](./react-app)

## Background
### What is React?
React is a Javascript framework founded and maintained by Facebook. It's currently one of the most important skills to have if trying to go into web/app development. React allows for users to build interactive user interfaces easily with the help of real-time updates. You can learn more about React here: 
- <a href="https://reactjs.org" target="_blank">React Website</a>
### Why use React?
React is the top Javascript extension that recruiters are looking for. Many of the top tech companies (including Facebook, Netflix, Twitter, Reddit, etc.) use React to design their webpages. The framework is best known for its ability to create **components** that break down a page into smaller sections. These components can also be reused and customized to display repeated features with different information (think of a Facebook feed where every post is slightly different).
## Setting Up React Apps
One of the first steps to working with React is installing Node.js, which can be found here:
- <a href="https://nodejs.org/en/" target="_blank">Node Website</a>

Node allows for users to create a development server where changes in the code you are working on can be displayed in real-time. The next step is to open up Terminal(Mac) or Powershell(Windows). VSCode, which is used in this workshop, provides a convenient terminal within the editor itself. The line you'll need to run in your terminal to set up React is `npx create-react-app <app_name>`. After doing this, you run `npm start` for Node to begin your development server.

## Working with React Apps
The first thing you'll notice when working with React apps is that the default page will just show some random React information. However, you'll be able to edit this through changing things in your `App.js` file, which is the main Javascript file that is "rendered." What this means is that React will go ahead and insert the code you write into the HTML in your `index.html` file at the `div` element with `id="root"`. When you first create your app, feel free to explore around to better understand this concept. 

When creating components, you will need to create a new `.js` file and utilize imports and exports. Essentially, at the end of your components, you will want to include a line that says `export default <component_name>` with the component name filled in. Your component will be defined by a `function <component_name>()` that returns the elements that you want rendered. In your `App.js` file, you can import your component by writing `import <component_name> from '<path_to_component>'`. You will then be able to create elements of this type within your file. For example, if we are creating a **Post** component, after importing it into `App.js` we will be able to write: `<Post />` to display a post.

### Syntax
React takes advantage of a new type of syntax called JSX. JSX is code that looks like HTML but in reality defines a React element. An example of this would be:
`const elem = <h1>I love Hack</h1>;`

JSX elements are what you will return from your functions and are also what is "replacing" the "root" in `index.html`. On top of just looking like HTML though, JSX elements are able to evaluate whatever you put in curly braces. An example of this would look something along these lines:
```js
const committee = ‘Hack’;
const elem = <h1>I love {committee}</h1>;
```
Result: I love Hack

## Props
We have an idea of components and how to create our own, but so far we've been hard coding the information we want to have within the component. How do we customize the infomation within the component to have different info without repeating the code over again?

That's where **props** come into play. Props is a parameter we can pass into our component function in order to use the same framework (the same component), but have different information displayed.

Take the following `Song` component, for example.

```js
function Song(props) {
    // the code for your component
}
```

If we want to make some `Song` objects we can do the following.

```js
<Song name="Toxic" artist="Britney Spears" />
<Song name="DNA." artist="Kendrick Lamar"  />
<Song name="90’s Love" artist="NCT U"  />
```

Now we have three song components. Remember that components are reusable, so we can make multiple songs easily! But where do props come in in this code? Well, the `name` and `artist` part of our component will be taken as a prop in the code. Let's see a more direct example.

As a formal definition, props is a *parameter* of our component function that is an *object* containing all the information we give the component.

That means, instead of hardcoding songs in the following manner,

```js
function Song() {

    return (
    <div>
        <p>Artist: Kendrick Lamar </p>
        <p>Name: DNA. </p>
    </div>
    );
    
}
```

We may pass props and reuse this component! If I wanted to pass one of the earlier `Song` objects I made, our `Song` component function could look like this!

```js
function Song(props) {

    return (
    <div>
        <p>Artist: {props.artist} </p>
        <p>Name: {props.name} </p>
    </div>
    );
    
}
```

As we see here, `props.artist` will display the artist attribute of the props object that we pass, and `props.name` will display the name attribute of the props object that we pass. We use the curly brace to allow for JSX expressions and variables inside of our code. If we didn't put the curly brace, our `Song` component would just render:

```
Artist: props.artist
Name: props.name
```

But now, we will see

```
Artist: Kendrick Lamar
Name: DNA.
```

Props are extremely useful and play in important part in reusable components in React!

## *array*.map()
Before we get into `*array*.map()`, let's define arrays!

Arrays are a collection of items of the same type. You make have an array of number `[1, 2, 3, 4, 5]`, or an array of strings `[“hello”, “this”, “is”, “an”, “array”]`, or really any data type! Arrays are very convenient for storing items of the same data type.

What if we wanted to process the array and modify the array or use it within our code? In JavaScript, we have a handy function called `.map()`. What this allows us to do is to run a for loop on an array.

Specifically what `*array*.map()` does is take every item in the array, perform a specific operation (as defined by the function we give), and return a new array that is the result of that operation.

That sounds like... a lot. But we can break it down with some basic examples! Take some imaginary array of fruits for example. We have an apple, orange, and a banana.

![Array Map Example with Fruits](./images/arraymap.png)

We will go through the array, so for each fruit, we will do something to it. I've decided that I like eating sliced fruit, so we're going to slice all the fruit in the array (this will be our operation for each element in the array). Once we cut every fruit in the array, I will be able to give back a new "array" of fruits consisted of apple slices, orange slices, and banana slices! I'm getting hungry... but now we must see this in action with actual code.

Let's take an array of the first 5 positive even numbers.

```js
const evens = [ 2, 4, 6, 8, 10 ];
```

I've decided I want to divide all my even numbers by 2. We can call `*array*.map()` to help us accomplish this!

```js
const evens = [ 2, 4, 6, 8, 10 ];
const newNumbers = evens.map( num => { return num / 2 });
```

We call the `*array*.map()` function for evens to loop through the entire array of even numbers. The function inside of the parantheses of map takes each number (which we call num) and returns that number divided by 2.

Now we should have an array with all of our original numbers divided by 2! If we go into our browser console and run `console.log(newNumbers);` after entering the previous two lines, we will get the desired output of `[ 1, 2, 3, 4, 5 ]`!

## Finished Fakebook
