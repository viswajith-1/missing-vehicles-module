import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const searchValidation = Yup.object({
  choice: Yup.string().required("Choose the search type!"),
  search: Yup.string().required("Enter the search!")
});

const SearchCard = () => {

  const formik = useFormik({
    initialValues: {
      choice: "",
      search: ""
    },
    validationSchema: searchValidation,
    onSubmit: (values) => {
      console.log("values:", values);
    }
  });

  return (
    <div className="search-card">
      <div className='search-card-head'>
        <h6 className='table-card-title'>SEARCH MISSING VEHICLE HERE</h6>
      </div>
      <Form onSubmit={formik.handleSubmit} className="form">
        <FormGroup tag="fieldset">
          <div className="radio-group">

            <FormGroup check>
              <Input
                type="radio"
                name="choice"
                value="vehicleNumber"
                onChange={formik.handleChange}
                checked={formik.values.choice === "vehicleNumber"}
              />
              <Label check>Vehicle Number</Label>
            </FormGroup>

            <FormGroup check>
              <Input
                type="radio"
                name="choice"
                value="engineNumber"
                onChange={formik.handleChange}
                checked={formik.values.choice === "engineNumber"}
              />
              <Label check>Engine Number</Label>
            </FormGroup>

            <FormGroup check>
              <Input
                type="radio"
                name="choice"
                value="chassisNumber"
                onChange={formik.handleChange}
                checked={formik.values.choice === "chassisNumber"}
              />
              <Label check>Chassis Number</Label>
            </FormGroup>

          </div>

          {formik.touched.choice && formik.errors.choice && (
            <div className="text-danger">{formik.errors.choice}</div>
          )}
        </FormGroup>

        {/* SEARCH BAR + SUBMIT (PARALLEL) */}
        <div className="d-flex gap-2 align-items-start search-bar">

          <Input
            type="text"
            name="search"
            placeholder="Enter search value..."
            value={formik.values.search}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Button color="primary" type="submit">
            Search
          </Button>

        </div>

        {formik.touched.search && formik.errors.search && (
          <div className="text-danger mt-1">
            {formik.errors.search}
          </div>
        )}

      </Form>
    </div>

  );
};

export default SearchCard;