import {Container, Row, Col} from 'react-bootstrap';

export default function Navbar({darkMode, onDarkModeClick}) {
    return (
        <div style={{backgroundColor: darkMode ? 'hsl(211deg 21% 22%)' : 'white'}}>
            <Container style={{paddingTop: 15, paddingBottom: 15}}>
                <Row>
                    <Col><span style={{fontWeight: 'bold', fontSize: 20, color: !darkMode ? '#000' : 'hsl(180deg 100% 100%)'}}>Where in the world?</span></Col>
                    <Col onClick={onDarkModeClick}
                         style={{display: 'flex', justifyContent: 'flex-end', cursor: 'pointer'}}><span
                        style={{fontWeight: 'bold', color: !darkMode ? '#000' : 'white'}}>Dark Mode</span></Col>
                </Row>
            </Container>
        </div>
    )
}