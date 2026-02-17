import { Row, Col, FormGroup, Label, Form, Input, Button } from "reactstrap"

const OfficerForm = (props:any) => {
  return (
    <Form className="recovery-form container">
      <Row className="form-row">
        <Col md={6}>
          <FormGroup>
            <Label>First Name</Label>
            <Input type="text" />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label>Last Name</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
      </Row>

      <Row className="form-row">
        <Col md={6}>
          <FormGroup>
            <Label>State</Label>
            <Input type="select" name="state">
              <option value="">Select State</option>
              <option value="kerala">Kerala</option>
              <option value="tamilnadu">Tamil Nadu</option>
              <option value="karnataka">Karnataka</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label>District</Label>
            <Input type="select" name="district">
              <option value="">Select District</option>
              <option value="tvm">Thiruvananthapuram</option>
              <option value="kollam">Kollam</option>
              <option value="kochi">Ernakulam</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Row className="form-row">
        <Col md={6}>
          <FormGroup>
            <Label>Station</Label>
            <Input type="select" name="station">
              <option value="">Select Station</option>
              <option value="station1">Station 1</option>
              <option value="station2">Station 2</option>
              <option value="station3">Station 3</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label>Contact</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
      </Row>

      <div className="form-actions">
        <Button color="primary" onClick={props.onNext}>Next</Button>
      </div>
    </Form>
  )
}

export default OfficerForm