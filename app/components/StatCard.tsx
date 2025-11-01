import Image from "next/image";

type StatCardProps = {
  icon: string;
  title: string;
  value: string | undefined;
  subLabel: string;
};

export default function StatCard({
  icon,
  title,
  value,
  subLabel,
}: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg border-custom-color border-[0.5px]">
      <div className="flex items-center gap-2">
        <Image src={icon} alt="icon" width={16} height={16} />
        <h3 className="text-sm font-semibold text-gray-600 font-gabarito">
          {title}
        </h3>
      </div>
      <p className="text-4xl font-bold mt-3 text-center text-color-blue font-gabarito">
        {value}
      </p>
      <p className="text-sm text-color-primary font-medium mt-1">{subLabel}</p>
    </div>
  );
}
