import './App.css';
import Post from './components/Post';

/* images for posts */
import image from './images/event.png';
import spooky from './images/spooky.png';
import secureTheBag from './images/secure-the-bag.png';

const posts = [
  {
    account: 'queer_hack',
    image: image
  },
  {
    account: 'Michael Chen',
    image: spooky
  },
  {
    account: 'Lindsay Greene',
    image: secureTheBag
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
            key={post.account}
          />
        })
      }
    </div>
  );
  
}

export default App;