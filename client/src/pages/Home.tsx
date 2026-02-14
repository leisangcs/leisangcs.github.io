import { Badge } from "@/components/ui/badge";
import { profile, publications } from "@/lib/data";
import { ExternalLink, Mail, MapPin } from "lucide-react";
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
                  <div key={year} className="space-y-3">
                    <h3 className="text-base font-bold text-foreground">In the Year of {year}:</h3>
                    
                    <div className="space-y-4">
                      {pubs.map((pub) => (
                        <div key={pub.id} className="flex items-start gap-3">
                          {/* 左侧：PDF图标 + paper/code 链接，纵向排列 */}
                          <div className="flex flex-col items-center gap-1 shrink-0 pt-0.5" style={{ minWidth: '42px' }}>
                            {/* PDF 图标 */}
                            {pub.pdfUrl ? (
                              <a
                                href={pub.pdfUrl}
                                target="_blank"
                                rel="noreferrer"
                                title="Download PDF"
                                className="group flex flex-col items-center"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" className="w-7 h-8 group-hover:opacity-80 transition-opacity">
                                  <rect x="1" y="1" width="22" height="28" rx="2" fill="#fff" stroke="#dc2626" strokeWidth="1.5"/>
                                  <rect x="1" y="1" width="22" height="10" rx="2" fill="#dc2626"/>
                                  <text x="12" y="8.5" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">PDF</text>
                                  <line x1="5" y1="16" x2="19" y2="16" stroke="#ccc" strokeWidth="1"/>
                                  <line x1="5" y1="19" x2="19" y2="19" stroke="#ccc" strokeWidth="1"/>
                                  <line x1="5" y1="22" x2="14" y2="22" stroke="#ccc" strokeWidth="1"/>
                                </svg>
                              </a>
                            ) : (
                              <div className="w-7 h-8 opacity-30">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" className="w-7 h-8">
                                  <rect x="1" y="1" width="22" height="28" rx="2" fill="#fff" stroke="#999" strokeWidth="1.5"/>
                                  <rect x="1" y="1" width="22" height="10" rx="2" fill="#999"/>
                                  <text x="12" y="8.5" textAnchor="middle" fill="#fff" fontSize="6" fontWeight="bold" fontFamily="Arial, sans-serif">PDF</text>
                                  <line x1="5" y1="16" x2="19" y2="16" stroke="#ccc" strokeWidth="1"/>
                                  <line x1="5" y1="19" x2="19" y2="19" stroke="#ccc" strokeWidth="1"/>
                                  <line x1="5" y1="22" x2="14" y2="22" stroke="#ccc" strokeWidth="1"/>
                                </svg>
                              </div>
                            )}
                            {/* paper 链接 */}
                            {pub.officialUrl && (
                              <a
                                href={pub.officialUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[11px] text-blue-600 hover:text-blue-800 hover:underline font-medium leading-none"
                              >
                                paper
                              </a>
                            )}
                            {/* code 链接 */}
                            {pub.codeUrl && (
                              <a
                                href={pub.codeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[11px] text-blue-600 hover:text-blue-800 hover:underline font-medium leading-none"
                              >
                                code
                              </a>
                            )}
                          </div>

                          {/* 右侧：论文信息（不再包含链接） */}
                          <div className="flex flex-col gap-0.5 min-w-0">
                            {/* 标题 */}
                            <div className="font-bold text-foreground leading-snug">
                              {pub.title}
                            </div>
                            
                            {/* 作者 */}
                            <div className="text-foreground/80 leading-snug text-sm">
                              {pub.authors.map((author, i) => (
                                <span key={i} className={author.includes("Lei Sang") || author.includes("Sang Lei") || author.includes("桑磊") ? "font-bold text-foreground" : ""}>
                                  {author}{i < pub.authors.length - 1 ? ", " : ""}
                                </span>
                              ))}
                            </div>
                            
                            {/* 期刊/会议 + 标签 */}
                            <div className="text-sm text-foreground/70 leading-snug flex flex-wrap items-center gap-x-2 gap-y-0.5">
                              <span className="italic">{pub.venue}</span>
                              {pub.tags?.map(tag => (
                                <Badge key={tag} variant="outline" className="h-4 px-1 text-[10px] font-normal rounded-sm border-muted-foreground/30 text-muted-foreground">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
