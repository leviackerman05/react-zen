# Package.Json

- package.json is a config for npm

- there are 2 types of dependencies we can install
- once is dev depedency and one is normal
- dev dependency-> it is generally required in development phase
- normal dependency -> required in prod also
  caret and tilde in package.json

- package-lock json file keeps a record (exact version) of all the dependencies which are installed while package json keeps an average record of the versions installed for each dependency

# Parcel (Imp. for system design interview)

- Dev Build
- Host on a local server
- HMR -> Hot Module Replacement
- File Watching Algorithm which is written in C++
- Caching for Faster Builds
- Image Optimisation
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling -> Support older browsers
- Diagnostics (better looking errors)
- Error Handling
- HTTPs
- Tree Shaking (removed unused code)
- Different dev and prod bundles

# React and JSX

- const heading = React.createElement("h1", {id: "heading"}, "Namaste React")
- const jsxheading = <h1 id="heading">Namaste React</h1>
- the 1st and 2nd points here are equivalent, they are the same thing. You can log both these variables to confirm that.
- babel converts jsx to a code that react or browsers can understand (transpile)
- JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)

# React Components

- There are 2 types ----------- 1. Class Based Components (OLD) 2. Functional Components (NEW)
- done upto video 3

# FE System Design Interview

- Swiggy has config driven UI

# Rendering Components

- Every same level component needs to have a unique key otherwise let's say a new component is added react will not know where to add that component and hence react will clean the parent container and re-render all the other components also. So to optimise this we need to pass a unique key so react would know where to insert the new component and hence not only render that one and not re-render all the others as well.

- You should'nt use index as keys since the order or items might change. (Mentioned in the React Docs). Only use index if you don't have any actual keys.

# React Hooks

- Hooks are nothing but javascript utility functions which gives us access to super powerful state variables inside of react.

- useState, React will find a difference in virtual DOM and re-render the component is the state variable changes.

- Reconciliation Algorithm aka (React Fiber)

- Virtual DOM is a javascript representation of the actual DOM.

- React basically creates a virtual dom anytime the state variable changes and then the Diff Algorith(Reconciliation Algoritm aka React Fiber) finds out the difference between updated virtual DOM and the older virtual dom.
  Example: Say you have 7 Restaurant Card (Old Virtual DOM) and then you pressed the show top restaurants so now the UI has 3 Restaurant Card (Updated Virtual DOM), the diff algorithm will find the difference between the 2 virtual DOM's, what's the difference here from 7 Cards to 3 Cards so the total difference is of 4 nodes, it'll then actually update the DOM on every render cycle.

- Finding out the difference between 2 HTML files is tough and slow, and finding out the difference between 2 objects is fast and hence react is fast and optimised.

# Why React is Fast

- Because it has a virtual dom, it has a diff algoritm that looks for changes in the virtual dom.
- because it can manipulate the dom efficiently, it can find out the difference and update the UI.
