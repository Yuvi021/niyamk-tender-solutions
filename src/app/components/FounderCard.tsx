import Image from "next/image";
import Link from "next/link";

interface FounderProps {
  name: string;
  position: string;
  image: string;
  linkedin: string;
  description: string;
}

export default function FounderCard({
  name,
  position,
  image,
  linkedin,
  description,
}: FounderProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition text-center">
      <div className="flex justify-center mb-4">
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-600">{position}</p>
      <p className="mt-4 text-gray-700">{description}</p>
      <Link
        href={linkedin}
        target="_blank"
        className="mt-4 inline-block text-emerald-600 hover:underline"
      >
        View LinkedIn Profile →
      </Link>
    </div>
  );
}
