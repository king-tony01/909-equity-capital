"use client";
import ChevronDown from "@/icons/ChevronDown";
import { useState } from "react";
import styles from "./styles/Component.module.css";

function Input({
  label,
  placeholder,
  type = "text",
  onChange,
  defaultValue,
  options,
}: Readonly<{
  label: string;
  placeholder: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  options?: Array<{ value: string; label: string }>;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const toggleOptions = () => setIsOpen((prev) => !prev);
  const togglePhoneOptions = () => setIsPhoneOpen((prev) => !prev);
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("+1");

  const countryCodes = ["+1", "+234", "+44"];

  const handleCountryCodeSelect = (code: string) => {
    setSelectedCountryCode(code);
    setIsPhoneOpen(false);
  };

  const handleSelectOption = (value: string, label: string) => {
    setSelectedOption({ value, label });
    setIsOpen(false);
    // Trigger onChange if provided, simulating a change event
    if (onChange) {
      const syntheticEvent = {
        target: { value },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  return type === "select" ? (
    <div className={`${styles.input} ${styles.select} `}>
      <label htmlFor={label}>{label}</label>
      <div
        onClick={toggleOptions}
        className={`${styles.multiple} ${styles.selectInput}`}
      >
        <span>
          {selectedOption?.label ?? defaultValue ?? "Select an option"}
        </span>
        <ChevronDown />
        {isOpen && (
          <div className={styles.options}>
            {options?.map((option) => (
              <span
                key={option.value}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectOption(option.value, option.label);
                }}
              >
                {option.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  ) : type === "phone" ? (
    <div className={`${styles.input} ${styles.phone}`}>
      <label htmlFor={label}>{label}</label>
      <div className={styles.multiple}>
        <span className={styles.countryCode} onClick={togglePhoneOptions}>
          {selectedCountryCode}
          {isPhoneOpen && (
            <div>
              {countryCodes.map((code) => (
                <span
                  key={code}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCountryCodeSelect(code);
                  }}
                >
                  {code}
                </span>
              ))}
            </div>
          )}
        </span>
        <input
          type="tel"
          placeholder={placeholder}
          id={label}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  ) : (
    <div className={styles.input}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default Input;
