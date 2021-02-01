import './App.css';
import Post from './components/Post';

/* images for posts */
import event from './images/event.png';
import impact from './images/impact.png';
import hacksprint from './images/hacksprint.png';

function App() {
  return (
    <div className="App">
      <Post 
        account = "ACM at UCLA"
        image={event}
      />
      <Post 
        account = "Eric Yang"
        image={hacksprint}
      />
      <Post 
        account = "Nareh Agazaryan"
        image={impact}
      />
    </div>);
  
}

export default App;
