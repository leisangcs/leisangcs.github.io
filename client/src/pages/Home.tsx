import { Badge } from "@/components/ui/badge";
import { profile, publications } from "@/lib/data";
import { ExternalLink, FileText, Mail, MapPin } from "lucide-react";
import { useMemo } from "react";

export default function Home() {
  // Group publications by year
  const publicationsByYear = useMemo(() => {
    const grouped: Record<number, typeof publications> = {};
    publications.forEach(pub => {
      if (!grouped[pub.year]) {
        grouped[pub.year] = [];
      }
      grouped[pub.year].push(pub);
    });
    // Sort years descending
    return Object.entries(grouped).sort((a, b) => Number(b[0]) - Number(a[0]));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans text-[15px] leading-snug">
      <div className="container mx-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar - Compact */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="w-40 h-40 overflow-hidden border border-border shadow-sm">
              <img 
                src="/images/leisang-photo-v2.png" 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-foreground">
                {profile.name}
              </h1>
              <p className="text-base text-muted-foreground">
                {profile.chineseName}
              </p>
              <p className="text-sm font-medium pt-1">
                {profile.title}
              </p>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-tight">{profile.affiliation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 shrink-0" />
                <a href={profile.social?.googleScholar} target="_blank" rel="noreferrer">
                  Google Scholar
                </a>
              </div>
            </div>
          </aside>

          {/* Right Content Area - Compact */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* About Section */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold border-b border-border pb-1 mb-3 uppercase tracking-wide">About</h2>
              <p className="text-justify text-foreground/90 whitespace-pre-line">
                {profile.bio}
              </p>
            </section>

            {/* Research Interests */}
            <section className="space-y-2">
              <h2 className="text-lg font-bold border-b border-border pb-1 mb-3 uppercase tracking-wide">Research Interests</h2>
              <div className="flex flex-wrap gap-2">
                {profile.researchInterests.map((interest, i) => (
                  <span key={interest} className="text-foreground/90">
                    {interest}{i < profile.researchInterests.length - 1 ? " • " : ""}
                  </span>
                ))}
              </div>
            </section>

            {/* Publications */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold border-b border-border pb-1 mb-3 uppercase tracking-wide">Publications</h2>
              
              <div className="space-y-6">
                {publicationsByYear.map(([year, pubs]) => (
                  <div key={year} className="space-y-2">
                    <h3 className="text-base font-bold text-foreground/60 border-b border-border/50 pb-1 mb-2">{year}</h3>
                    
                    <ul className="space-y-4 list-disc list-outside ml-4">
                      {pubs.map((pub) => (
                        <li key={pub.id} className="pl-1 flex flex-col gap-1">
                          {/* 标题 */}
                          <div className="font-semibold text-foreground leading-tight">
                            {pub.title}
                          </div>
                          
                          {/* 作者 */}
                          <div className="text-foreground/80 leading-tight">
                            {pub.authors.map((author, i) => (
                              <span key={i} className={author.includes("Lei Sang") || author.includes("Sang Lei") || author.includes("桑磊") ? "font-bold text-foreground underline decoration-dotted underline-offset-2" : ""}>
                                {author}{i < pub.authors.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </div>
                          
                          {/* 期刊/会议 + 引用 + 标签 */}
                          <div className="italic text-foreground/70 text-sm flex flex-wrap items-center gap-2 leading-tight">
                            <span>{pub.venue}</span>
                            {pub.citations && (
                              <span className="text-xs text-muted-foreground">
                                [Cited: {pub.citations}]
                              </span>
                            )}
                            {pub.tags?.map(tag => (
                              <Badge key={tag} variant="outline" className="h-4 px-1 text-[10px] font-normal rounded-sm border-muted-foreground/30 text-muted-foreground">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          {/* Paper / PDF / Code 链接按钮 */}
                          {(pub.officialUrl || pub.pdfUrl || pub.codeUrl) && (
                            <div className="flex flex-wrap gap-2 mt-0.5">
                              {pub.officialUrl && (
                                <a 
                                  href={pub.officialUrl} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded border border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-400 transition-colors"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  Paper
                                </a>
                              )}
                              {pub.pdfUrl && (
                                <a 
                                  href={pub.pdfUrl} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded border border-red-300 bg-red-50 text-red-700 hover:bg-red-100 hover:border-red-400 transition-colors"
                                >
                                  <FileText className="w-3 h-3" />
                                  PDF
                                </a>
                              )}
                              {pub.codeUrl && (
                                <a 
                                  href={pub.codeUrl} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded border border-green-300 bg-green-50 text-green-700 hover:bg-green-100 hover:border-green-400 transition-colors"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  Code
                                </a>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-8 pb-4 border-t border-border mt-12 text-xs text-muted-foreground text-center">
              <p>© {new Date().getFullYear()} {profile.name}. Last updated: {new Date().toLocaleDateString()}.</p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}
