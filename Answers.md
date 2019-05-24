1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  .map(), .filter(), Object.assign()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  actions: it an object with a string indicating its type and an optional payload (a value to be used in a reducer, usually for updates). It is related to instructions to be used by reducers.

  reducers: It is a function without side effects that is essentially a representation of the state. In effect, they take in the current state and an action, and return a new state Object with the updated values.

  store: It is essentially a container for the immutable state object to be used by the entire application, along with the corresponding set of actions and reducers.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

  An application state is global, and a component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.

  Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

4.  What is middleware?

  It is a software tool used for intercepting processes inside a given program, manipulating its behavior in some form.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  It's a middleware tool that allows for the utilization of thunks in Redux. It does not exactly change what the action creators do; rather, it makes them behave asynchronously (not in sequence - earlier/later than other code, depending on connection & processing time).

6.  Which `react-redux` method links up our `components` with our `redux store`?

is a function (Higher Order Component like) used to link up a component to the redux store. This effectively copies over actions and state values - not all of them though, but just the ones that are needed.  
