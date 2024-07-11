import React from "react";

interface CustomSwitchProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  register: any;
  name: string;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  id,
  checked,
  onChange,
  register,
  name,
}) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        onClick={() => onChange(!checked)}
        className={`relative inline-block w-10 h-6 rounded-full transition duration-200 ease-in-out ${
          checked ? "bg-blue-600" : "bg-gray-400"
        }`}
      >
        <input
          type="checkbox"
          id={id}
          name={id}
          className="opacity-0 w-0 h-0"
          checked={checked}
          onChange={() => onChange(!checked)}
          {...register(name)}
        />
        <span
          className={`absolute left-0 top-0 bottom-0 w-6 h-6 bg-white rounded-full shadow transform transition duration-200 ease-in-out ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
      {/* <label htmlFor={id} className="text-gray-700">
        {id}
      </label> */}
    </div>
  );
};

export default CustomSwitch;
