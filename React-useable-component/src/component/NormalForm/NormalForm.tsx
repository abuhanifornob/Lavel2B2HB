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
      className={cn("border border-red-300 w-full mx-auto p-5", {
        "max-w-5xl": dubble,
        "max-w-md": !dubble,
      })}
    >
      <div
        className={cn(
          "border border-green-600 grid grid-cols-1 justify-items-center gap-5",
          {
            "md:grid-cols-2": dubble,
          }
        )}
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
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NormalForm;
