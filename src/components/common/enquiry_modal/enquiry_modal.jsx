import React, { useEffect, useState } from "react";
import { Modal, Form, Button, InputGroup, Image } from "react-bootstrap";
import styles from "./enquiry_modal.module.scss";
import { CaretDownFill, CheckCircleFill } from "react-bootstrap-icons";
import { log } from "firebase/firestore/lite/pipelines";
import { toast } from "react-toastify";

const EnquiryModal = ({ show, setShow }) => {
  const initialValues = {
    name: "",
    city: "",
    email: "",
    phoneNumber: "",
    destination: "",
    dateOfTravel: "",
    type: "",
  };

  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const enqRes = await res.json();
      setIsSuccess(enqRes.success);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    } finally {
      setIsLoading(false);
    }
  };

  const onHide = () => {
    setValues(initialValues);
    setIsSuccess(false);
    setIsLoading(false);
    setShow(false);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className={styles.enquiryModal}
      size="md"
    >
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle}>Enquire Now</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        {isSuccess ? (
          <div className={styles.success}>
            <CheckCircleFill />
            <h2>THANK YOU!</h2>
            <p>Your enquiry was successfully submitted</p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name *"
                required
                className={styles.formControl}
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, name: e.target.value }));
                }}
                value={values.name}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="City of Residence *"
                required
                className={styles.formControl}
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, city: e.target.value }));
                }}
                value={values.city}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email *"
                required
                className={styles.formControl}
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, email: e.target.value }));
                }}
                value={values.email}
              />
            </Form.Group>

            <InputGroup className={`mb-3 ${styles.phoneInputGroup}`}>
              <InputGroup.Text className={styles.flagAddon}>
                <Image
                  src="https://flagcdn.com/w20/in.png"
                  alt="India Flag"
                  className={styles.flagIcon}
                />
                <CaretDownFill className={styles.caretIcon} />
              </InputGroup.Text>
              <Form.Control
                type="tel"
                placeholder="Phone Number *"
                required
                className={styles.formControl}
                onChange={(e) => {
                  setValues((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }));
                }}
                value={values.phoneNumber}
              />
            </InputGroup>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Travel Destination *"
                required
                className={styles.formControl}
                onChange={(e) => {
                  setValues((prev) => ({
                    ...prev,
                    destination: e.target.value,
                  }));
                }}
                value={values.destination}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Date of Travel *"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
                required
                className={styles.formControl}
                onChange={(e) => {
                  setValues((prev) => ({
                    ...prev,
                    dateOfTravel: e.target.value,
                  }));
                }}
                value={values.dateOfTravel}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Select
                required
                className={styles.formControl}
                defaultValue=""
                onChange={(e) => {
                  setValues((prev) => ({
                    ...prev,
                    type: e.target.value,
                  }));
                }}
                value={values.type}
              >
                <option value="" disabled hidden>
                  Vacation Type *
                </option>
                <option value="leisure">Leisure</option>
                <option value="business">Business</option>
                <option value="honeymoon">Honeymoon</option>
                <option value="family">Family</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" className={styles.submitBtn}>
              {isLoading ? "Please Wait..." : "Submit Enquiry"}
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default EnquiryModal;
