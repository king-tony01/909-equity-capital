import React from "react";
import styles from "./styles/Component.module.css";

function CheckBox({
  checked = false,
  onChange,
  label,
}: Readonly<{
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}>) {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" checked={checked} onChange={onChange} id={label} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default CheckBox;
