import { PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  tools: string[];
  thumbnailUrl: string;
  githubLink: string;
};

export default function ProjectCard({
  title,
  tools,
  thumbnailUrl,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <a href={githubLink} target="_blank">
        {/* Gambar Proyek dari Supabase */}
        <div className="h-40 bg-gray-200 relative">
          <Image
            src={thumbnailUrl}
            alt={`Thumbnail ${title}`}
            layout="fill"
            objectFit="contain"
            className="bg-gray-200"
          />
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
      </a>
    </div>
  );
}
