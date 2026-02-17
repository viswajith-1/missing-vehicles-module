import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

const Form1 = ({ onNext, onStepChange }: { onNext: () => void, onStepChange: (step: number) => void }) => {
    return (
        <Container className="mt-4">
            <Nav tabs className="mb-4">
                <NavItem>
                    <NavLink active className="fw-semibold" onClick={() => onStepChange(1)} style={{ cursor: 'pointer' }}>
                        Complainant Details
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink onClick={() => onStepChange(2)} style={{ cursor: 'pointer' }}>
                        Address Details
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink onClick={() => onStepChange(3)} style={{ cursor: 'pointer' }}>
                        Unit Details
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink onClick={() => onStepChange(4)} style={{ cursor: 'pointer' }}>
                        Vehicle Loss & Status Details
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink onClick={() => onStepChange(5)} style={{ cursor: 'pointer' }}>
                        Crime/Lost Property Details
                    </NavLink>
                </NavItem>
            </Nav>

            <Form>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input type="text" placeholder="Enter first name" />
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label>Middle Name</Label>
                            <Input type="text" placeholder="Enter middle name" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input type="text" placeholder="Enter last name" />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Gender</Label>
                            <Input type="select">
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </Input>
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label>Father's Name</Label>
                            <Input type="text" placeholder="Enter father's name" />
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label>Contact</Label>
                            <Input type="tel" placeholder="Enter contact number" />
                        </FormGroup>
                    </Col>
                </Row>

                <div className="text-end mt-3">
                    <Button color="primary" onClick={onNext}>
                        Next
                    </Button>
                </div>
            </Form>


        </Container>
    );
};

export default Form1;