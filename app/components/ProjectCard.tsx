import { PhotoIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  title: string;
  tools: string[];
};

export default function ProjectCard({ title, tools }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      {/* Placeholder Gambar Proyek */}
      <div className="h-40 bg-gray-200 flex items-center justify-center">
        <PhotoIcon className="w-12 h-12 text-gray-400" />
      </div>
      {/* Konten Kartu */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">Tools:</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
