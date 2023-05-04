# Create Dynamic Component 

This is a simple React application that demonstrates how to dynamically render components based on a list of records. The list of records can be updated at runtime, and the components will be re-rendered automatically.

## Getting Started

To get started, clone the repository and navigate to the project directory. Then, install the dependencies using the following command:

```
npm install
```

Once the dependencies are installed, you can start the application using the following command:

```
npm start
```

The application will then be available at `http://localhost:3000/`.

## How it Works

The application defines four components - `component1`, `component2`, `component3`, and `component4`. 

The `App` component defines a state variable called `records`, which contains an array of objects representing each component that should be rendered. Each object contains a `key`, `name`, and `data` property.

In the `handleDynamicComponent` function, we use the `componentMap` object to map the `key` property of each record to the corresponding component. Then we add the resulting component to the `component` property of the record object.

Then we show dynamic component which is in record state.

The `useEffect` hook is used to update the `component` property of each record object whenever the `records` state variable changes.

## Usage

To add a new component to the list, simply add a new object to the `records` array with a `key` property that matches the name of the component you want to render, a `name` property that specifies the display name of the component, and a `data` property that contains any data that the component needs to render.

## Conclusion

That's it! This simple React application demonstrates how you can display dynamic components based on a set of records. 