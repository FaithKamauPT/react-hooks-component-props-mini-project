import React from "react";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
// import Article from './Article';


const App = () => {
  const blogName = "Underreacted";
  const blogAbout = "A blog about learning React";
  const blogPosts = [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    }
  ];

  return (
    <div>
      <Header name={blogName} />
      A blog about learning React
      <About about={blogAbout} />
      <ArticleList posts={blogPosts} />
    </div>
  );
};

export default App;



  


// const App = () => {
//   const blogName = "My Blog";
//   const blogAbout = "Welcome to my blog! This is a place where I share my thoughts and ideas.";
//   const blogPosts = [
//     { id: 1, title: "First Post", date: "June 1, 2023", preview: "This is the preview of the first post." },
//     { id: 2, title: "Second Post", date: "June 5, 2023", preview: "This is the preview of the second post." },
//     { id: 3, title: "Third Post", preview: "This is the preview of the third post." }
//   ];

//   return (
//     <div>
//       <Header name={blogName} />
//       <About about={blogAbout} />
//       <ArticleList posts={blogPosts} />
//       {/* Rest of your app content */}
//     </div>
//   );
// };

// export default App;






  