import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center my-5 ">
          <Col md={6} xs={12}>
            <h4 className="text-secondary">
              1.How will you improve the performance of a React Application?
            </h4>
            <p className="border border-primary p-3">
              <strong className="text-success">Answer: </strong>
              Keeping component state local where necessary. ... Memoizing React
              components to prevent unnecessary re-renders. ... Code-splitting
              in React using dynamic import() ... Windowing or list
              virtualization in React applications. ... Lazy loading images in
              React.virtual DOM, React can make UI updates more efficient than
              ever.
            </p>
          </Col>
          <Col md={6} xs={12}>
            <h4 className="text-secondary">
              2.What are the different ways to manage a state in a React
              application?
            </h4>
            <p className="border border-primary p-3 ">
              <strong className="text-success">Answer: </strong>React
              applications are built using components and they manage their
              state internally and it works well for applications with few
              components, but when the application grows bigger, the complexity
              of managing states shared across components becomes
              difficult..React components have a built-in state object. The
              state is encapsulated data where you store assets that are
              persistent between component renderings.There are four main types
              of state you need to properly manage in your React apps: Local
              state. Global state. Server state. URL state.
            </p>
          </Col>
          <Col md={6} xs={12}>
            <h4 className="text-secondary">
              3.How does prototypical inheritance work?
            </h4>
            <p className="border border-primary p-3 ">
              <strong className="text-success">Answer: </strong>Every object
              with its methods and properties contains an internal and hidden
              property known as Prototype. The Prototypal Inheritance is a
              feature in javascript used to add methods and properties in
              objects. It is a method by which an object can inherit the
              properties and methods of another object. Traditionally, in order
              to get and set the Prototype of an object, we use
              Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in
              modern language, it is being set using
            </p>
          </Col>
          <Col md={6} xs={12}>
            <h4 className="text-secondary">
              4. Why you do not set the state directly in React?
            </h4>
            <p className="border border-primary p-3 ">
              <strong className="text-success">Answer: </strong>One should never
              update the state directly because of the following reasons: If you
              update it directly, calling the setState() afterward may just
              replace the update you made. When you directly update the state,
              it does not change this.
            </p>
          </Col>

          <Col md={6} xs={12}>
            <h4 className="text-secondary">
              5.What is a unit test? Why should write unit tests?
            </h4>
            <p className="border border-primary p-3 ">
              <strong className="text-success">Answer: </strong>Unit tests are
              typically automated tests written and run by software developers
              to ensure that a section of an application (known as the "unit")
              meets its design and behaves as intended. In procedural
              programming, a unit could be an entire module, but it is more
              commonly an individual function or procedure.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
