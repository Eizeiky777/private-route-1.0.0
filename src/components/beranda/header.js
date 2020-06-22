import React, { Component } from 'react';
import { Nav, Navbar, Button, Form, Image, Modal, Dropdown, DropdownButton } from 'react-bootstrap';
import logoImage from './data/logo.png';


// Modal function 
// const Banner = ({ ids=3, genres, statusX, getDetailTv, film:{ data: dataTv}}) => {}

const LoginUser = ({ handleLogin, onHide, show }) => {

    // const [ formData, setFormData ] = useState({
	// 	email: 'ekky@gmail.com',
	// 	password: 'admin'
    // });
    //const { email, password } = formData;

	// const onChange = (e) => {
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// };

	const onSubmit = (e) => {
		e.preventDefault();
		handleLogin(true);
	};

    return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
    >

        <Modal.Body className="bg-dark rounded pb-4">
            <h1 className="bg-dark text-light d-flex justify-content-center" >Login</h1>
            <Form style={{width:"50%", margin:"auto"}} onSubmit={onSubmit} >
                <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        className="bg-light"
                        name="email"
                        
                    />
                    <Form.Text className="text-light">
                        * We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        
                    />
                </Form.Group>
                
                <Button type="submit" variant="danger" block className="text-light" onClick={onHide}>
                    Login
                </Button>
                <p className="text-light">don't have an account ? just <a href="#test">click here</a></p>
                <div className="text-right mt-2">
                <Button onClick={onHide} className="btn btn-outline-dark bg-dark" >x</Button>
                </div>
            </Form>
        </Modal.Body>
        
    </Modal>
    );
}


const Registered = ({ handleLogin, onHide, show }) => {

    // const [ formData, setFormData ] = useState({
	// 	email: 'ekky@gmail.com',
	// 	password: 'admin'
    // });
    //const { email, password } = formData;

	// const onChange = (e) => {
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// };

	const onSubmit = (e) => {
		e.preventDefault();
		handleLogin(true);
	};
    
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            >
        
            <Modal.Body className="bg-dark rounded pb-4" >
                <h1 className="bg-dark text-light d-flex justify-content-center" >Register</h1>
                <Form style={{width:"50%", margin:"auto"}} onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="text-light">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="bg-light"/>
                        <Form.Text className="text-light">
                        * We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text-light">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicName">
                        <Form.Label className="text-light">Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label className="text-light">Gender</Form.Label>
                        <Form.Control as="select" custom>
                        <option>Male</option>
                        <option>Female</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label className="text-light">Phone</Form.Label>
                        <Form.Control type="text" placeholder="Phone" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicAddress">
                        <Form.Label className="text-light">Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
                    
                    <Button onClick={onHide} type="submit" variant="light" size="lg" className="text-danger" block>
                        Register
                    </Button>
                    <p className="text-light">don't have an account ? just <a href="#test">click here</a></p>
                    <div className="text-right mt-2">
                    <Button onClick={onHide} >Close</Button>
                    </div>
                </Form>
            </Modal.Body>
        
        </Modal>

        
    );
}
// END of Modal function

class Header extends Component {

    constructor(){
        super()
        this.state = {
            modalShow: false, modalRegister: false
        }
    }

    render(){   

        const { modalShow, modalRegister } = this.state;
        const { handleLogin, isLogin } = this.props;
    
        return (
        <>
            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#" ><span className="text-light">Home</span></Nav.Link>
                <Nav.Link href="#" ><span className="text-light">TV Shows</span></Nav.Link>
                <Nav.Link href="#" ><span className="text-light">Movies</span></Nav.Link>
                </Nav>
                
                <Nav style={dumbFlix}>
                <Image src={logoImage} fluid />
                </Nav>
                
                <Form inline>

                    { !isLogin && (<div>
                        <Button variant="btn btn-light mr-3 text-danger" style={{width:100}} onClick={() => this.setState({modalRegister:true})}>Register</Button>
                        <Button variant="btn btn-danger" style={{width:100}} onClick={() => this.setState({modalShow:true})}>Login</Button>
                    </div>)}
                    { isLogin && (
                        <div>
                        <DropdownButton
                        alignRight
                        title="user"
                        id="dropdown-menu-align-right"
                        variant="dark"
                        >
                            <Dropdown.Item eventKey="3" > <i className='fas fa-file-video' style={{width: 20}}></i> List Film </Dropdown.Item>
                            <Dropdown.Item eventKey="4" > <i className='fas fa-coins' style={{width: 20}}></i> Transaction </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="5" href="/"> <i className='fas fa-sign-out-alt pr-2' style={{color: 'red'}}></i> Logout</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    )}

                </Form>
            </Navbar.Collapse>
            </Navbar>

            <LoginUser
                show={modalShow}
                onHide={() => this.setState({modalShow: false})}
                handleLogin={handleLogin}
            />

            <Registered
                show={modalRegister}
                onHide={() => this.setState({modalRegister: false})}
                handleLogin={handleLogin}
            />
        </>
        );
    }
}


const dumbFlix = {
    marginRight: 'auto'
};


export default Header;
