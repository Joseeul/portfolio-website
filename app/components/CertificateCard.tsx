import { PhotoIcon } from '@heroicons/react/24/outline';

type CertificateCardProps = {
  title: string;
};

export default function CertificateCard({ title }: CertificateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Placeholder Gambar */}
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <PhotoIcon className="w-12 h-12 text-gray-400" />
      </div>
      {/* Judul */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-color-primary">
          {title}
        </h3>
      </div>
    </div>
  );
}