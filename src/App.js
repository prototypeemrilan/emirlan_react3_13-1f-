import './App.css';
import AboutUs from './pages/aboutUs/aboutUs';
import UsersPage from './pages/usersPage/usersPage';
import BlogPage from "./pages/blogPage/BlogPage";
import ClassPage from "./pages/ClassPage/ClassPage";
import PageClass from "./pages/ClassPage/PageClass";



function App() {
    const product = {
        name: "IT-Academy",
        address: "Максима Горького 18",
        number: "+996558153587"
    }

    return (
        <div className="container">
            {/*App js*/}
            {/*<UsersPage/>*/}
            {/*<BlogPage/>*/}
            {/*<mainPage/>  */}
            {/*<AboutUs text="There You can show information about our company" product={product}/>*/}
            <ClassPage/>
            <PageClass/>

        </div>
);
}

export default App;
