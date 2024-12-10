import { User } from "@supabase/supabase-js";
import Image from "next/image";

function UserAvatar({ user }: { user: User | null }) {
  const { fullName, avatar } = user!.user_metadata || {};

  return (
    <div className="flex items-center gap-5 text-2xl text-gray-600 dark:text-slate-300">
      <span className="text-xl text-slate-400 ">{fullName}</span>
      <Image
        className="block w-16 h-14 aspect-square object-cover object-center rounded-full outline-2 outline-gray-200"
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
        width={24}
        height={24}
        // fill
      />
    </div>
  );
}

export default UserAvatar;
