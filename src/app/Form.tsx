import CheckBox from "@/components/CheckBox";
import Input from "@/components/Input";
import React from "react";
import styles from "./Page.module.css";

function Form() {
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
          <Input label="Full Name" placeholder="Enter your Name" type="text" />
          <Input
            label="Email Address"
            placeholder="Enter your Email Address"
            type="email"
          />
          <Input
            label="Phone Number"
            placeholder="Enter your Phone number"
            type="phone"
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
          />
        </div>
        <CheckBox
          label="I agree to the Policies and Terms"
          checked
          onChange={(e) => {}}
        />
        <button type="submit">Book a consultation</button>
      </div>
    </form>
  );
}

export default Form;
