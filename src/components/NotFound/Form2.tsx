
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

const Form2 = ({ onNext, onStepChange }: { onNext: () => void, onStepChange: (step: number) => void }) => {
  return (
    <Container className="mt-4">
      <Nav tabs className="mb-4">
        <NavItem>
          <NavLink onClick={() => onStepChange(1)} style={{ cursor: 'pointer' }}>
            Complainant Details
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink active className="fw-semibold" onClick={() => onStepChange(2)} style={{ cursor: 'pointer' }}>
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
        {/* Row 1 */}
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>House Name</Label>
              <Input type="text" />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>House No.</Label>
              <Input type="text" />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Street No.</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>Locality</Label>
              <Input type="text" />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Village/Town/City</Label>
              <Input type="text" />
            </FormGroup>
          </Col>

          <Col md={4}>
            <FormGroup>
              <Label>Pincode</Label>
              <Input type="text" />
            </FormGroup>
          </Col>
        </Row>

        {/* Next Button */}
        <div className="text-end mt-3">
          <Button color="primary" onClick={onNext}>
            Next
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Form2;