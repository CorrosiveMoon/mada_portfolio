import Link from "next/link"
import { categories } from "@/lib/projects"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function WorkPage() {
  // Opacity control for category thumbnails (0-1)
  const categoryThumbnailOpacity = 1

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container px-6 lg:px-16">
        {/* Header */}
        <div className="space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Our Work
          </h1>
          <div className="w-20 h-1 bg-accent"></div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our portfolio across diverse industries and creative disciplines
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/work/${category.slug}`}
              className="group"
            >
              <div className="space-y-4">
                <div className="aspect-[4/3] bg-white dark:bg-neutral-900 rounded-lg overflow-hidden relative border-2 border-border group-hover:border-accent transition-all duration-300">
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
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center px-6 text-white drop-shadow-lg">
                      {category.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
