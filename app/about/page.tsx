export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-4 mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              About MASS Visuals
            </h1>
            <div className="w-20 h-1 bg-accent"></div>
          </div>

          {/* Content */}
          <div className="space-y-12">
            <div className="max-w-none">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Based in Sharjah, UAE, MASS Visuals specializes in professional videography and photography
                across diverse industries—from education and entertainment to corporate and commercial projects.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-4 text-accent">Our Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every project is an opportunity to tell a unique story. We believe in
                  capturing authentic moments and crafting narratives that resonate across
                  cultures and industries. Whether it&apos;s educational content, entertainment,
                  or commercial work, our focus is always on creating meaningful,
                  visually compelling stories that connect with audiences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                <p className="text-muted-foreground leading-relaxed">
                  With experience across documentary films, commercial advertising,
                  corporate video production, event coverage, and social media content,
                  I bring versatility and technical expertise to every project.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Services</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Documentary Filmmaking</li>
                  <li>• Commercial & Brand Videos</li>
                  <li>• Corporate Video Production</li>
                  <li>• Event Coverage</li>
                  <li>• Educational Content</li>
                  <li>• Social Media Content Creation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
