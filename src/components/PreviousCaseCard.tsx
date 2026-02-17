import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody
} from "reactstrap";

const PreviousCaseCard = () => {
  const [open, setOpen] = useState("");

  const toggle = (id:any) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="previous-case-card">
      <div className="search-card-head">
        <h6 className="table-card-title">REGISTERED CASES</h6>
      </div>

      <div className="accordion-wrapper">
        <Accordion open={open} toggle={toggle}>

          <AccordionItem>
            <AccordionHeader targetId="1">
              Case #1023 - Crime
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <p>Station Reported: Alappuzha</p>
              <p>Date: 24 Jan 2025</p>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="2">
              Case #1018 - Crime
            </AccordionHeader>
            <AccordionBody accordionId="2">
              <p>Station Reported: Alappuzha</p>
              <p>Date: 12 Jan 2025</p>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="3">
              Case #1009 - Missing
            </AccordionHeader>
            <AccordionBody accordionId="3">
              <p>Station Reported: Kollam</p>
              <p>Date: 25 Dec 2024</p>
            </AccordionBody>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
};

export default PreviousCaseCard;