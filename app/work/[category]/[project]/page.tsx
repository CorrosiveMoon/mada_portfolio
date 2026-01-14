import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects, getProjectById, categories } from "@/lib/projects"
import VideoPlayer from "@/components/video-player"

export function generateStaticParams() {
  return projects.map((project) => ({
    category: project.categorySlug,
    project: project.id,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ category: string; project: string }>
}) {
  const { category: categorySlug, project: projectId } = await params
  const project = getProjectById(projectId)
  
  if (!project || project.categorySlug !== categorySlug) {
    notFound()
  }

  const category = categories.find((cat) => cat.slug === categorySlug)
  
  // Find next project in same category
  const categoryProjects = projects.filter(
    (p) => p.categorySlug === categorySlug
  )
  const currentIndex = categoryProjects.findIndex((p) => p.id === projectId)
  const nextProject = categoryProjects[currentIndex + 1] || categoryProjects[0]

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container px-6 lg:px-16">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href={`/work/${categorySlug}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {category?.name}
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-sm text-accent font-semibold tracking-wide uppercase">
              <span>{project.category}</span>
              {project.year && (
                <>
                  <span>•</span>
                  <span>{project.year}</span>
                </>
              )}
              {project.client && (
                <>
                  <span>•</span>
                  <span>{project.client}</span>
                </>
              )}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {project.title}
            </h1>
            <div className="w-20 h-1 bg-accent"></div>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Video */}
        <div className="max-w-6xl mx-auto mb-16">
          <VideoPlayer 
            youtubeUrl={project.youtubeUrl} 
            title={project.title}
          />
        </div>

        {/* Navigation to Next Project */}
        {nextProject && nextProject.id !== project.id && (
          <div className="max-w-6xl mx-auto pt-16 border-t border-border">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Next Project</p>
                <h3 className="text-2xl font-semibold">{nextProject.title}</h3>
              </div>
              <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                <Link href={`/work/${categorySlug}/${nextProject.id}`}>
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
