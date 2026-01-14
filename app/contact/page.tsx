import { Mail, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Let's Create Together
            </h1>
            <div className="w-20 h-1 bg-accent"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Ready to bring your vision to life? Get in touch to discuss your next project.
            </p>
          </div>

          {/* Contact Options */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-muted">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">Preferred contact method</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:contact@example.com">
                    contact@example.com
                  </a>
                </Button>
              </div>

              {/* Instagram */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-muted">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <p className="text-sm text-muted-foreground">Follow my work</p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    @username
                  </a>
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-8 border-t border-border">
              <h2 className="text-2xl font-semibold mb-6">Work Together</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Available for documentary projects, commercial work, corporate videos,
                  event coverage, and creative collaborations.
                </p>
                <p>
                  Whether you have a clear vision or need help developing your concept,
                  I'm here to help bring your story to life through compelling visuals.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="icon">
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
