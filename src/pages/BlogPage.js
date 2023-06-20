import Footer from "../components/Footer"
import Header from "../components/Header"
import NavigationMenu from "../components/NavigationMenu"
import * as bootstrap from 'react-bootstrap'

const Blog = () => {
    return (
        <div>
            <NavigationMenu />
            <Header />
            <bootstrap.Container>
                <bootstrap.Row>
                    <bootstrap.Col className="col-md-6">
                        <div>
                            <h2>Post</h2>
                            <img src="https://picsum.photos/200/300"  height={100} width={100} alt="imagen" />
                            <p>posteo 1 algo de texto</p>
                        </div>    
                    </bootstrap.Col>
                    <bootstrap.Col className="col-md-6">
                        <div>
                            <h2>Post</h2>
                            <img src="https://picsum.photos/200/300"  height={100} width={100} alt="imagen" />
                            <p>posteo 1 algo de texto</p>
                        </div>    
                    </bootstrap.Col>
                    <bootstrap.Col className="col-md-6">
                        <div>
                            <h2>Post</h2>
                            <img src="https://picsum.photos/200/300"  height={100} width={100} alt="imagen" />
                            <p>posteo 1 algo de texto</p>
                        </div>    
                    </bootstrap.Col>
                    <bootstrap.Col className="col-md-6">
                        <div>
                            <h2>Post</h2>
                            <img src="https://picsum.photos/200/300"  height={100} width={100} alt="imagen" />
                            <p>posteo 1 algo de texto</p>
                        </div>    
                    </bootstrap.Col>
                    <bootstrap.Col className="col-md-6">
                        <div>
                            <h2>Post</h2>
                            <img src="https://picsum.photos/200/300"  height={100} width={100} alt="imagen" />
                            <p>posteo 1 algo de texto</p>
                        </div>    
                    </bootstrap.Col>
                    <bootstrap.Col className="col-md-6">
                        <div>
                            <h2>Post</h2>
                            <img src="https://picsum.photos/200/300"  height={100} width={100} alt="imagen" />
                            <p>posteo 1 algo de texto</p>
                        </div>    
                    </bootstrap.Col>
                </bootstrap.Row>
            </bootstrap.Container>
            <Footer />
            
        </div>
    )
}

export default Blog