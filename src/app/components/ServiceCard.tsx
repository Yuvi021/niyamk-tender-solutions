import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-center justify-center mb-4">
        <Image src={icon} alt={title} width={60} height={60} />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
