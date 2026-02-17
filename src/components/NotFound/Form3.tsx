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

const Form3 = ({ onNext, onStepChange }: { onNext: () => void, onStepChange: (step: number) => void }) => {
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
          <NavLink active className="fw-semibold" onClick={() => onStepChange(3)} style={{ cursor: 'pointer' }}>
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
            <Label>Country</Label>
            <Input type="select" name="country">
              <option value="">Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label>State</Label>
            <Input type="select" name="state">
              <option value="">Select State</option>
              <option>Kerala</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={4}>
          <FormGroup>
            <Label>District</Label>
            <Input type="select" name="district">
              <option value="">Select District</option>
              <option>Thiruvananthapuram</option>
              <option>Kollam</option>
              <option>Ernakulam</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label>Police Station</Label>
            <Input type="select" name="policeStation">
              <option value="">Select Police Station</option>
              <option>Station 1</option>
              <option>Station 2</option>
              <option>Station 3</option>
            </Input>
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

export default Form3;