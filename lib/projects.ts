export interface Project {
  id: string
  title: string
  category: string
  categorySlug: string
  description: string
  youtubeUrl: string
  thumbnail?: string
  year?: string
  client?: string
}

export interface Category {
  name: string
  slug: string
  thumbnail?: string
}

export const categories: Category[] = [
  { name: "Documentary Films", slug: "documentary", thumbnail: "/Website.00_00_05_29.Still002.jpg" },
  { name: "Commercial & Advertising", slug: "commercial", thumbnail: "/Website.00_00_02_16.Still001.jpg" },
  { name: "Corporate & Business", slug: "corporate", thumbnail: "/DSC_8554.jpg" },
  { name: "Event Filmmaking", slug: "events", thumbnail: "/DSC08087.jpg" },
  { name: "Educational", slug: "educational", thumbnail: "/DSC_0031.jpg" },
  { name: "Social Media Content", slug: "social-media", thumbnail: "/Website.00_00_44_11.Still010.jpg" },
]

export const projects: Project[] = [
  {
    id: "sport-documentary-1",
    title: "Sport Documentary",
    category: "Documentary Films",
    categorySlug: "documentary",
    description: "A captivating look into the world of competitive sports, exploring dedication, passion, and the pursuit of excellence.",
    youtubeUrl: "https://www.youtube.com/watch?v=3_2zgTq0GZw",
    year: "2024",
  },
  {
    id: "social-media-campaign-1",
    title: "Social Media Campaign",
    category: "Social Media Content",
    categorySlug: "social-media",
    description: "Dynamic social media content designed to capture attention and drive engagement across platforms.",
    youtubeUrl: "https://www.youtube.com/watch?v=kDyWThA4REI",
    year: "2024",
  },
  {
    id: "commercial-brand-1",
    title: "Commercial Brand Film",
    category: "Commercial & Advertising",
    categorySlug: "commercial",
    description: "High-impact commercial production showcasing brand identity and product excellence through cinematic storytelling.",
    youtubeUrl: "https://www.youtube.com/watch?v=iJC7G0XX7NE",
    year: "2024",
  },
  {
    id: "social-content-series-1",
    title: "Social Content Series",
    category: "Social Media Content",
    categorySlug: "social-media",
    description: "Engaging social media content series optimized for maximum reach and audience connection.",
    youtubeUrl: "https://www.youtube.com/watch?v=mcZbzhRoHCc",
    year: "2024",
  },
]

export function getProjectsByCategory(categorySlug: string): Project[] {
  return projects.filter((project) => project.categorySlug === categorySlug)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
