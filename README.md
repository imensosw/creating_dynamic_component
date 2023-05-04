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

The application has four different components (`component1`, `component2`, `component3`, and `component4`).These components are imported into the main `App.js` file. 

In the `App.js` file, there is a state variable called `records`. It is an array of objects that contain the following keys: `key`, `name`, and `data`. Each object represents a component that needs to be rendered dynamically.

The `componentNames` object is a map of all the components that can be rendered dynamically. It is used in the `handleDynamicComponent` function to dynamically render components based on the data in the `records` state.

In the `handleDynamicComponent` function, we use the `componentMap` object to map the `key` property of each record to the corresponding component. Then we add the resulting component to the `component` property of the record object.

In the `return` statement of the `App.js` file, the dynamically rendered components are displayed by mapping over the `records` array and accessing the `component` property of each record object.

Finally, we show dynamic component which is in record state.

## Usage

Once the application is running, you will see a list of four components rendered on the page. Each component is labeled with its `name` property as defined in the `records` array.

To add a new component to the list, simply add a new object to the `records` array with a `key` property that matches the name of the component you want to render, a `name` property that specifies the display name of the component, and a `data` property that contains any data that the component needs to render.

## Conclusion

That's it! This simple React application demonstrates how you can display dynamic components based on a set of records. 


