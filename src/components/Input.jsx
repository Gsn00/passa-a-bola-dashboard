export default function Input(props) {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="font-bold text-[#585757]">{props.title}</p>
      <input
        type={props.type || "text"}
        placeholder={props.placeholder || ""}
        className="w-full border border-[#ccc] bg-white py-3 px-5 outline-0 rounded-lg font-semibold"
        value={props.value}
        onChange={props.onChange}
        {...props}
      />
    </div>
  );
}
