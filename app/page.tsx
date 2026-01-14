import Link from "next/link"
import { MapPin, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects, categories } from "@/lib/projects"
import VideoPlayer from "@/components/video-player"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  const featuredProjects = projects.slice(0, 4)
  
  // Opacity control for category card thumbnail images (0-1)
  // Lower values = more transparent, Higher values = more visible
  const categoryThumbnailOpacity = 1

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="container relative z-10 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-sm tracking-widest text-muted-foreground uppercase">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Sharjah, UAE</span>
            </div>

            {/* Logo/Brand Mark */}
            <div className="relative inline-block">
              <h1 className="text-8xl md:text-9xl font-bold tracking-tighter">
                <span className="text-dark-brown dark:text-white">M</span>
                <span className="text-accent">V</span>
              </h1>
            </div>

            {/* Tagline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-dark-brown dark:text-white">Crafting Visual Stories Across</span>
              <br />
              <span className="text-accent">Every Industry</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From education to entertainment, corporate to creative—bringing visions to life through professional videography and photography
            </p>

            {/* CTA */}
            <div className="pt-6">
              <Button asChild size="lg" className="text-base group bg-accent hover:bg-accent/90 text-white">
                <Link href="/work">
                  Explore Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-dark-brown dark:text-white">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground">
              Specializing in diverse visual storytelling across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/work/${category.slug}`}
                className="group"
              >
                <Card className="relative overflow-hidden aspect-[4/3] border-2 hover:border-accent transition-all duration-300 bg-white">
                  {/* White/Solid Background Layer */}
                  <div className="absolute inset-0 bg-white dark:bg-neutral-900" />
                  
                  {/* Background Image with Opacity */}
                  {category.thumbnail && (
                    <div className="absolute inset-0" style={{ opacity: categoryThumbnailOpacity }}>
                      <Image
                        src={category.thumbnail}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  {/* Overlay Gradient - Stronger for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="space-y-2">
                      {/* Play button with stronger background */}
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </div>
                      {/* White text with text shadow for maximum visibility */}
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors drop-shadow-lg">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container px-6 lg:px-16">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-dark-brown dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              A showcase of recent work across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.categorySlug}/${project.id}`}
                className="group"
              >
                <div className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted border-2 border-border group-hover:border-accent transition-all duration-300">
                    <VideoPlayer 
                      youtubeUrl={project.youtubeUrl} 
                      title={project.title}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-accent font-medium">
                      <span>{project.category}</span>
                      {project.year && (
                        <>
                          <span>•</span>
                          <span>{project.year}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-dark-brown dark:text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="border-2 hover:border-accent hover:text-accent">
              <Link href="/work">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-dark-brown dark:text-white">
              Ready to Tell Your Story?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's collaborate to create compelling visual content that resonates with your audience
            </p>
            <Button asChild size="lg" className="text-base bg-accent hover:bg-accent/90 text-white">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

