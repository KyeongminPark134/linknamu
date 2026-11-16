import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-gradient-to-br from-white to-orange-100 p-1 shadow-[0_12px_32px_-10px_rgba(120,72,40,0.35)]">
        <div className="relative h-28 w-28 overflow-hidden rounded-full bg-orange-100 ring-1 ring-black/5 sm:h-32 sm:w-32">
          {image ? (
            <Image src={image} alt={`${name} 프로필 사진`} fill sizes="128px" className="object-cover" priority />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-4xl font-bold text-orange-700">
              {name.charAt(0)}
            </span>
          )}
        </div>
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-900">{name}</h1>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-600 sm:text-[15px]">{bio}</p>
    </header>
  );
}
