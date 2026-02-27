import React from "react";

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
    <div className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} id={label} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default CheckBox;
