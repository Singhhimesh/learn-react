import { Navbar } from 'flowbite-react';

function Nav() {
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bagisto</span>
                </Navbar.Brand>
                
                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                    
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Nav;
