import './App.css';
import Post from './components/Post';

/* images for posts */
import event from './images/event.png';
import impact from './images/impact.png';
import hacksprint from './images/hacksprint.png';

const posts = [
  {
    account: 'ACM at UCLA',
    image: event
  },
  {
    account: 'Eric Yang',
    image: hacksprint
  },
  {
    account: 'Nareh Agazaryan',
    image: impact
  }
];


function App() {
  return (
    <div className="App">
      {
        posts.map(post => {
          return <Post 
            account={post.account}
            image={post.image}
          />
        })
      }
    </div>);
  
}

export default App;
