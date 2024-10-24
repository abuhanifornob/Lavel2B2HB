import { useForm } from "react-hook-form";
import cn from "../../utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const dubble = true;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "border border-green-200 rounded-lg shadow-lg w-full mx-auto p-5",
        {
          "max-w-5xl": dubble,
          "max-w-md": !dubble,
        }
      )}
    >
      <div
        className={cn(" grid grid-cols-1 justify-items-center gap-5", {
          "md:grid-cols-2": dubble,
        })}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input type="text" id="email" {...register("email")} />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Option Select
          </label>
          <select>
            <option>One</option>
            <option>One</option>
            <option>One</option>
            <option>One</option>
            <option>One</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            Message
          </label>
          <textarea></textarea>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="checkbox">
            CheckBox
          </label>
          <input type="checkbox" id="checkbox" {...register("checkbox")} />
        </div>
      </div>
      <div
        className={cn(" grid grid-cols-1 justify-items-center gap-5", {
          "md:grid-cols-2": dubble,
        })}
      >
        <div className="flex start-2">
          <button
            className=" w-full md:w-fit btn rounded-md px-3 py-2 bg-slate-700 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
