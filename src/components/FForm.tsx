import { Row, Col, FormGroup, Label, Form, Input, Button } from "reactstrap"

const FForm = () => {
  return (
    <Form className="recovery-form container">
  <Row>

    <Col md={6}>
      <FormGroup>
        <Label className="form-label">Located Time</Label>
        <Input type="time" className="form-input" />
      </FormGroup>
    </Col>

    <Col md={6}>
      <FormGroup>
        <Label className="form-label">Located Date</Label>
        <Input type="date" className="form-input" />
      </FormGroup>
    </Col>

    <Col md={6}>
      <FormGroup>
        <Label className="form-label">Location</Label>
        <Input type="text" className="form-input" />
      </FormGroup>
    </Col>

    <Col md={6}>
      <FormGroup>
        <Label className="form-label">Case Category</Label>
        <Input type="select" className="form-input">
          <option value="">Select Case</option>
          <option>Crime Theft</option>
          <option>Missing</option>
          <option>Recovered</option>
        </Input>
      </FormGroup>
    </Col>

    <Col md={12}>
      <FormGroup>
        <Label className="form-label">Images</Label>
        <Input type="file" className="form-input" />
      </FormGroup>
    </Col>

  </Row>

  <div className="form-actions">
    <Button className="submit-btn">Submit</Button>
  </div>
</Form>
  )
}

export default FForm