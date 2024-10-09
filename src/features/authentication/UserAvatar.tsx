import useUser from "./useUser";

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user!.user_metadata || {};

  return (
    <div className="flex items-center gap-5 text-2xl text-gray-600 dark:text-slate-300">
      <img
        className="block w-16 h-14 aspect-square object-cover object-center rounded-full outline-2 outline-gray-200"
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </div>
  );
}

export default UserAvatar;
