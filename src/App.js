import Comments from "./comments/Comments";
import Home from "./Components/home";
import Footer from "./Components/footer";

const App = () => {
  return (
    <div>
      {/* <h1>Hello monsterlessons</h1> */}
      <Home />
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
      <Footer />
      
    </div>
  );
};

export default App;