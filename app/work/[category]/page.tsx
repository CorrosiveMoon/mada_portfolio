import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories, getProjectsByCategory } from "@/lib/projects"
import VideoPlayer from "@/components/video-player"

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category: categorySlug } = await params
  const category = categories.find((cat) => cat.slug === categorySlug)
  
  if (!category) {
    notFound()
  }

  const projects = getProjectsByCategory(categorySlug)

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container px-6 lg:px-16">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href="/work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {category.name}
          </h1>
          <div className="w-20 h-1 bg-accent"></div>
          <p className="text-xl text-muted-foreground">
            {projects.length} {projects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${categorySlug}/${project.id}`}
                className="group"
              >
                <div className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <VideoPlayer 
                      youtubeUrl={project.youtubeUrl} 
                      title={project.title}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      {project.year && <span>{project.year}</span>}
                      {project.client && (
                        <>
                          <span>•</span>
                          <span>{project.client}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
