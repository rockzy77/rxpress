import { NavBar } from "../../components/NavBar";


const NotFoundPage = () => {
    return <section>
        <NavBar />
        <div style={{
            height: 70
        }}></div>
        
        <div style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <h1 style={{
            fontSize: 40
        }}>404! Page Not Found</h1>
        </div>
    </section>
}

export default NotFoundPage;