export type Project = {
  id: number; 
  title: string;
  project_type: "mobile" | "web";
  tools_used: string[];
  thumbnail_url: string;
  is_featured: boolean;
  github_link: string;
};

export type Certificate = {
  id: number;
  title: string;
  image_url: string;
  created_at: string;
}