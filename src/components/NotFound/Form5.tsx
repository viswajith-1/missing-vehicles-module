
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

const Form5 = ({ onSubmit, onStepChange }: { onSubmit: () => void, onStepChange: (step: number) => void }) => {
    return (
        <Container className="mt-4">
      <Nav tabs className="mb-4">
        <NavItem>
          <NavLink onClick={() => onStepChange(1)} style={{ cursor: 'pointer' }}>
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
          <NavLink active className="fw-semibold"  onClick={() => onStepChange(5)} style={{ cursor: 'pointer' }}>
            Crime/Lost Property Details
          </NavLink>
        </NavItem>
      </Nav>
            <Form>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Case Number</Label>
                            <Input type="text" />
                        </FormGroup>
                    </Col>

                    <Col md={4}>
                        <FormGroup>
                            <Label>Case Category</Label>
                            <Input type="select" name="casecategory">
                                <option value="">Select Case</option>
                                <option>Case 1</option>
                                <option>Case 2</option>
                                <option>Case 3</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>GD Number</Label>
                            <Input type="text" />
                        </FormGroup>
                    </Col>
                </Row>

                <div className="text-end mt-3">
                    <Button color="primary" onClick={onSubmit}>
                        Submit
                    </Button>
                </div>
            </Form>


        </Container>
    );
};

export default Form5;