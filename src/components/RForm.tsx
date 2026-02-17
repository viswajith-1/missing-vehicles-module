import { Row, Col, FormGroup, Label, Form, Input, Button } from "reactstrap"

const RForm = () => {
    return (
        <Form className="recovery-form container">
            <Row className="form-row">
                <Col md={6}>
                    <FormGroup>
                        <Label>Recovery Purpose</Label>
                        <Input type="text" />
                    </FormGroup>
                </Col>

                <Col md={6}>
                    <FormGroup>
                        <Label>Case Category</Label>
                        <Input type="select" name="station">
                            <option value="">Select Case</option>
                            <option value="case1">Case 1</option>
                            <option value="case2">Case 2</option>
                            <option value="case3">Case 3</option>
                        </Input>
                    </FormGroup>
                </Col>
            </Row>

            <Row className="form-row">
                <Col md={12}>
                    <FormGroup>
                        <Label>Remarks</Label>
                        <Input type="textarea" />
                    </FormGroup>
                </Col>
            </Row>

            <div className="form-actions">
                <Button>Submit</Button>
            </div>
        </Form>
    )
}

export default RForm