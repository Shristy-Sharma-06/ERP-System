const Input = ({ label, type = "text", name, value, onChange, placeholder }) => {
    return (
      <div className="flex flex-col mb-4">
        {label && <label className="mb-1 text-sm font-medium">{label}</label>}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default Input;
  