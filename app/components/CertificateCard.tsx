import { PhotoIcon } from "@heroicons/react/24/outline";
import { Certificate } from "@/types";
import Image from "next/image";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Placeholder Gambar */}
      <div className="relative h-48 bg-gray-200">
        <Image
          src={certificate.image_url}
          alt={certificate.title}
          fill
          className="object-contain bg-gray-200"
        />
      </div>
      {/* Judul */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-color-primary">
          {certificate.title}
        </h3>
      </div>
    </div>
  );
};

export default CertificateCard;
