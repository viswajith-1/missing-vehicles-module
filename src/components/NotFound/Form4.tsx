import {
    Container,

    Form,
    Label,
    Input,
    Row,
    Col,
    Button,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

const Form4 = ({ onNext, onStepChange }: { onNext: () => void, onStepChange: (step: number) => void }) => {
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
          <NavLink active className="fw-semibold" onClick={() => onStepChange(4)} style={{ cursor: 'pointer' }}>
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
                <Row className="mb-3">
                    <Col md={4}>
                        <Label>Last Seen Place</Label>
                        <Input type="text" placeholder="Enter last seen place" />
                    </Col>

                    <Col md={4}>
                        <Label>Last Seen Date</Label>
                        <Input type="date" />
                    </Col>

                    <Col md={4}>
                        <Label>Status</Label>
                        <Input type="select">
                            <option>Select status</option>
                            <option>Missing</option>
                            <option>Recovered</option>
                            <option>Under Investigation</option>
                        </Input>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={12}>
                        <Label>Remarks</Label>
                        <Input
                            type="textarea"
                            rows="1"
                            placeholder="Enter remarks"
                        />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={6}>
                        <Label>Upload Images</Label>
                        <Input type="file" multiple />
                    </Col>
                </Row>

                <div className="d-flex justify-content-end">
                    <Button color="primary" className="px-4 mb-2" onClick={onNext}>
                        Next
                    </Button>
                </div>
            </Form>


        </Container>
    );
};

export default Form4;