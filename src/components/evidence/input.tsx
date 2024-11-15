"use client"

import { ChangeEventHandler, forwardRef, useState } from "react";

interface IInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    onChanges: ChangeEventHandler<HTMLInputElement>;
    type: string;
    placeHolder: string;
    value?: string;
    inputName: string;
}

export const CustomInput = forwardRef<HTMLInputElement, IInputProps>(
    ({ onChanges, inputName, type, placeHolder, value, ...props }, ref) => {
        return (
            <div className="mb-2">
                <p className="mb-2 text-[12px] text-[#666666]">{inputName}</p>
                <input
                    type={type}
                    className="w-full gap-2 p-3 border rounded-md border-[#5F437F]"
                    placeholder={placeHolder}
                    onChange={onChanges}
                    value={value}
                    ref={ref} // Attach the ref to the input element
                    {...props}
                />
            </div>
        );
    }
);

CustomInput.displayName = "CustomInput";

export const CustomInputDropdown = ({
    dropdownOptions, onSelect, dropDownTitle
}: {
    dropdownOptions: Array<string>,
    onSelect: (item: string) => void,
    dropDownTitle: string
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setItem] = useState<string | null>(null);

    const handleItemClick = (item: string) => {
        onSelect(item);
        setItem(item);
        setIsOpen(false);
    }

    return (
        <div>
            <p className="mb-2 text-[12px] text-[#666666]"> {dropDownTitle}</p>
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className={`w-full p-3 border ${isOpen ? "rounded-t-md " : "rounded-md"} border-[#5F437F] text-start text-[#3a3a3a69]`}>
                {selectedItem ?? "Select"}
            </button>
            {
                isOpen && (
                    <ul role="listbox" className="w-full">
                        <div className="absolute z-50 w-[92%] md:w-[27.6%]">
                            {
                            dropdownOptions.map((option, index) => (
                                <li
                                    key={`${dropDownTitle}-${index}`}
                                    onClick={() => handleItemClick(option)}
                                    className={`bg-white w-full p-3 cursor-pointer border ${index == (dropdownOptions.length - 1) ? "rounded-b-md " : ""} border-[#5F437F] hover:bg-[#5F437F] hover:text-white`}
                                    tabIndex={0}
                                    role="option"
                                    aria-selected={selectedItem == option}
                                >

                                    {option}
                                </li>))
                        }
                        </div>
                        
                    </ul>
                )
            }
        </div>
    );
};