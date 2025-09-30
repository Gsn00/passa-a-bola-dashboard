export default function Textarea(props) {
  return (
    <textarea
      className="w-full min-h-[100px] border text-[#757575] border-[#ccc] bg-white py-3 px-5 outline-0 rounded-lg font-semibold"
      name=""
      id=""
      {...props}
    >
      {props.children}
    </textarea>
  );
}
