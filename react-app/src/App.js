import './App.css';
import Post from './components/Post';

/* images for posts */
import image from './images/event.png';
import hacksprint from './images/hacksprint.png';
import impact from './images/impact.png';

const posts = [
  {
    account: 'ACM at UCLA',
    image: image
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
        posts.map( post => {
          return <Post 
            account={post.account}
            image={post.image}
            key={post.account}
          />
        })
      }
    </div>);
  
}

export default App;