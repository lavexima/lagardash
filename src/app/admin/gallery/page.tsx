export default function AdminGalleryPage() {
  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80", title: "Restaurant Interior" },
    { id: 2, src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80", title: "Signature Dish" },
    { id: 3, src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80", title: "Chef at Work" },
    { id: 4, src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80", title: "Dessert Selection" },
    { id: 5, src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400&q=80", title: "Wine Cellar" },
    { id: 6, src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&q=80", title: "Table Setting" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Gallery</h2>
          <p className="text-muted-foreground mt-2">Manage photos displayed on your restaurant's website.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-xl px-5 py-2.5 text-sm font-medium hover:brightness-110 transition-all shadow-md">
          + Upload Photos
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.id} className="group relative rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-md transition-all aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end opacity-0 group-hover:opacity-100">
              <div className="p-3 w-full flex items-center justify-between">
                <span className="text-white text-sm font-medium">{img.title}</span>
                <button className="text-white/80 hover:text-red-400 transition-colors text-xs">Remove</button>
              </div>
            </div>
          </div>
        ))}

        {/* Upload placeholder */}
        <div className="rounded-xl border-2 border-dashed border-border/60 bg-muted/30 aspect-video flex flex-col items-center justify-center gap-2 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group">
          <span className="text-4xl text-muted-foreground group-hover:text-primary transition-colors">+</span>
          <span className="text-sm text-muted-foreground">Upload Image</span>
        </div>
      </div>
    </div>
  )
}
