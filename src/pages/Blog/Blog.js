import React from "react";

const Blog = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="my-10 sm:my-12 md:my-16 lg:my-20 ">
        <div className="mb-16 text-center flex justify-center ">
          <h1 className=" text-3xl font-bold  italic">Blog</h1>
          <hr className="border-2 w-7 border-[#149777]" />
        </div>

        <div className="mb-8">
          <h1 className="text-2xl mb-3">
            1. What are the different ways to manage a state in a React
            application?
          </h1>
          <div className="text-gray-600">
            <p className="mb-2">
              There are four main types of state you need to properly manage in
              React apps:
            </p>
            <p className="mb-2">
              <strong> Local (UI) state –</strong> Local state is data we manage
              in one or another component. Local state is most often managed in
              React using the useState hook.
            </p>
            <p className="mb-2">
              <strong>Global (UI) state –</strong> Global state is data we
              manage across multiple components. Global state is necessary when
              we want to get and update data anywhere in our app, or in multiple
              components at least. A common example of a global state is
              authenticated user state.
            </p>
            <p className="mb-2">
              <strong> Server state – </strong>Data that comes from an external
              server must be integrated with our UI state. Server state is a
              simple concept but can be hard to manage alongside all of our
              local and global UI state. There are several pieces of state that
              must be managed every time you fetch or update data from an
              external server, including loading and error state. React Query
              that makes managing server state much easier.
            </p>
            <p className="mb-2">
              <strong>URL state –</strong> Data that exists on our URLs,
              including the pathname and query parameters. URL state is often
              missing as a category of state, but it is an important one. In
              many cases, a lot of major parts of our application rely upon
              accessing the URL state. Try to imagine building a blog without
              being able to fetch a post based on its slug or id that is located
              in the URL!
            </p>
            <p>
              There are undoubtedly more pieces of state that we could identify,
              but these are the major categories worth focusing on for most
              applications you build.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl mb-3">
            1. How does prototypical inheritance work?
          </h1>
          <div className="text-gray-600">
            <p className="mb-2">
              Prototype inheritance in javascript is the linking of prototypes
              of a parent object to a child object to share and utilize the
              properties of a parent class using a child class.
            </p>
            <p className="">
              Prototypes are hidden objects that are used to share the
              properties and methods of a parent class with child classes.
              Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the Prototype of an object,
              we use an Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl mb-3">
            1. What is a unit test? Why should we write unit tests?
          </h1>
          <div className="text-gray-600">
            <p className="mb-2">
              Unit Testing is a type of software testing where individual units
              or components of the software are tested. The purpose is to
              validate that each unit of the software code performs as expected.
              Unit Testing is done during the development (coding phase) of an
              application by the developers. Unit Tests isolate a section of
              code and verify its correctness. A unit may be an individual
              function, method, procedure, module, or object.
            </p>
            <p className="">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h1 className="text-2xl mb-3">1. React vs. Angular vs. Vue?</h1>
          <div className="text-gray-600">
            <h1 className="text-xl mb-3">React JS</h1>
            <p className="mb-2">
              One of the biggest of them is that React.js uses a virtual DOM
              that only compares the previous HTML code differences and only
              loads the different parts. This significantly impacts the loading
              times. In a positive way, of course. With React.js, you handle the
              markup and the logic in the same file, which means you can output
              variables in a view component (JSX).
            </p>
            <p className="mb-2">
              Fast loading of new data. One file contains both markup and logic
              (JSX). Enables the separation of data and presentation. It’s
              simple to get started and doesn’t take much practice. As a
              library, it doesn’t have that many presets, so it’s easy to learn.
              Smooth work of the app, even with complex underlying operations or
              database queries.
            </p>
            <h1 className="text-xl mt-4 mb-3">Angular JS</h1>
            <p className="mb-2">
              Angular.js is an MVC framework. A major disadvantage of Angular is
              that it uses a regular DOM, and thus, the entire tree structure of
              the HTML tags is updated, which massively impacts the loading
              time. Angular.js has its Ionic framework for mobile applications.
            </p>
            <p className="mb-2">
              Allows MVC architecture. Good maintainability. Web applications
              built with Angular perform very well. Projects may now be
              developed, expanded, and generated more quickly thanks to
              technologies like the Angular-CLI command-line tool. Angular
              provides a basic framework for developing web applications and
              manages them without additional libraries. Easy unit and
              end-to-end testing.
            </p>
            <h1 className="text-xl mt-4 mb-3">Vue JS</h1>
            <p className="mb-2">
              Vue.js is a JavaScript-based progressive framework for creating
              single-page applications. It was created with scalability and
              incrementality in mind, as well as ease of integration with other
              view layer frameworks.
            </p>
            <p className="mb-2">
              A list of tools and libraries (Vue.js official CLI, Development
              Tools, Vue Loader, Vue Router). Flexibility and simplicity in the
              utilization. Thorough documentation. Reusable in the terms of
              adding numerous reactive components to the existing code. The
              possibility of Component-Based Architecture (CBA)
            </p>
          </div>
        </div>
      </div>
      <hr className="border-2 mb-9" />
    </div>
  );
};

export default Blog;
