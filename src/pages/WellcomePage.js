
import * as bootstrap from "react-bootstrap"
import { useNavigate, useRoutes } from "react-router-dom"

const  WelcomePage = () => {

    const navigate = useNavigate()

    return (
        <bootstrap.Stack gap={2} >
            <bootstrap.Container>
                <bootstrap.Row>
                    <bootstrap.Col className="d-flex justify-content-center align-items-center" > 
                        <h1>Bienvenido a mi blog</h1>
                    </bootstrap.Col>
                    <bootstrap.Col>
                        <img src="https://picsum.photos/200/300" height={300} width={300} alt="imagen" />
                    </bootstrap.Col>
                </bootstrap.Row>
                
            </bootstrap.Container>
            <div className=" mt-5 d-flex justify-content-center align-items-center">
                <bootstrap.Button variant="primary" onClick={() => {navigate('/blog')}}>Primary</bootstrap.Button>
            </div>
        </bootstrap.Stack>
    )
}

export default WelcomePage