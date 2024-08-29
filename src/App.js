import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Home } from "./pages/Home";
import { BlogSinglePage } from "./components/common/BlogSinglePage";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";
import Contact from './pages/Contact';
import { Login } from "./pages/Login"; 
import Dashboard from './pages/Dashboard';
import CourseDetail from "./pages/CourseDetail";
import { UserProvider } from './pages/UserContext';





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/about'
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path='/courses'
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path='/courses/:courseId'
            element={
              <Layout>
                <CourseDetail />
              </Layout>
            }
          />
          <Route
            path='/contact'
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path='/blog'
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path='/single-blog'
            element={
              <Layout>
                <BlogSinglePage />
              </Layout>
            }
          />
          <Route
            path='/login'
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path='/Dashboard'
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />

<Route
            path='/Dashboard'
            element={
              <Layout>
              <UserProvider>
                
              <CourseDetail />
            </UserProvider>
            </Layout>
            }
    />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;