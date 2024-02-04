import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import CreateJob from './pages/CreateJobs';
import UpdateJobs from './pages/UpdateJobs';
import CreateCustomer from './pages/CreateCustomer';
import CreateAppointment from './pages/CreateAppointment';
import UpdateCustomer from './pages/UpdateCustomer';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/create-job' element={<CreateJob />} />
          <Route path='/create-customer' element={<CreateCustomer />} />


          <Route path='/update-customer/:userId' element={<UpdateCustomer />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
          <Route path='/update-jobs/:jobId' element={<UpdateJobs />} />
        </Route>
        <Route path='/create-appointment' element={<CreateAppointment />} />

        <Route path='/jobs' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
