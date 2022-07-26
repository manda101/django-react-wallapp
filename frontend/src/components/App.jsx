// App
import { AuthProvider } from '../context/AuthContext';
import Navbar from './Navbar';
import PostForm from './PostForm';
import Timeline from './Timeline';
import Footer from './Footer';
import '../css/App.css';

function App() {

  return (
    <div className='content'>
      <AuthProvider>
        <Navbar />
        <div className='timeline'>
          <div className='app'>
              <PostForm />
              <div className='separator'></div>
              <Timeline />   
          </div>
        </div>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
