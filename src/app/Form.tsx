"use client";
import CheckBox from "@/components/CheckBox";
import Input from "@/components/Input";
import React from "react";
import styles from "./Page.module.css";

function Form() {
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "",
  });

  const disabled =
    !acceptedTerms ||
    !formData.fullName ||
    !formData.email ||
    !formData.phoneNumber ||
    !formData.country;

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form action="">
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h2>Begin Your Investment Journey</h2>
          <p>
            Schedule a consultation to explore multifamily investment
            opportunities structured for stability, income, and generational
            growth.
          </p>
        </div>
        <div className={styles.inputs}>
          <Input
            label="Full Name"
            placeholder="Enter your Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          <Input
            label="Email Address"
            placeholder="Enter your Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            label="Phone Number"
            placeholder="Enter your Phone number"
            type="phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <Input
            label="Country"
            placeholder="Select your Country"
            type="select"
            options={[
              { value: "nigeria", label: "Nigeria" },
              { value: "ghana", label: "Ghana" },
              { value: "cameroon", label: "Cameroon" },
            ]}
            defaultValue="Nigeria"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>
        <CheckBox
          label="I agree to the Policies and Terms"
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
        />
        <button type="submit" disabled={disabled}>
          Book a consultation
        </button>
      </div>
    </form>
  );
}

export default Form;
