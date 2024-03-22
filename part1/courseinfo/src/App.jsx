const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ task }) => {
  return (
    <p>
      {task.name} {task.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  const parts = course.parts;
  return (
    <>
      {parts.map((part, id) => {
        return <Part key={id} task={part} />;
      })}
    </>
  );
};

const Total = ({ course }) => {
  const parts = course.parts;
  return (
    <>
      <p>
        Total number of exercises is:{" "}
        {parts.reduce((acc, item) => acc + item.exercises, 0)}
      </p>
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Display = ({ text }) => {
  return <div>{text}</div>;
};

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>The app is used by clicking the buttons</div>;
  }

  return <div>{allClicks.join(" ")}</div>;
};

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
