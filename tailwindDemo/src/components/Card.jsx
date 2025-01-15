export default function Card({
  username,
  details = { info: "No information" },
  hobbies = [],
}) {
  return (
    <div className=" max-w-xs p-6 rounded-md  bg-black">
      <img
        src="./public/vite.svg"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <h2 className="text-xl font-semibold text-white tracking-wide">
          {username}
        </h2>
      </div>
      <p className="text-gray-300">{details.info}</p>
      <p className="text-gray-300">{hobbies.join(",")}</p>
    </div>
  );
}
