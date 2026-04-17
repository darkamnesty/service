import React, { useState } from 'react';
import { MessageCircle, Instagram, Heart, ShieldCheck, User, Crown, Globe } from 'lucide-react';

const team = [
  {
    name: 'Fushiguro Toji',
    role: 'Owner',
    description: 'Specialized in security & owner of this service',
    pfp: 'https://images-ext-1.discordapp.net/external/efOHBAzQZTPCfv9jw8byznuK-gwTtkHktV5hxiK3GHI/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1493102481318871121/d4091136b9d1cb14a14cdc6cf9c6f516.png?format=webp&quality=lossless&width=372&height=372',
    discordId: '1493102481318871121',
    instagram: '__hey__its.zoya__',
    isOwner: true
  },
  {
    name: 'Zenin toji',
    role: 'Co-Owner & Admin',
    description: 'Specialized in security and technology and admin of this service',
    pfp: 'https://images-ext-1.discordapp.net/external/kFr0y2NfZWasAAVbXLcsS3rGwtqUqEtnjxQX5z6TPGQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1014787474851115012/6822ae21966bb5638e368ea048338d3b.png?format=webp&quality=lossless&width=436&height=436',
    discordId: '1014787474851115012',
    instagram: '__zenin_.toji__',
    portfolio: 'https://zenintoji.vercel.app',
    isDark: true,
    country: 'German'
  },
  {
    name: 'Dark amnesty',
    role: 'Partner',
    description: 'Ethical hacker & partner in this service',
    pfp: 'https://images-ext-1.discordapp.net/external/M-SWZL4L13U-G16izV-edVVxmgqMN7aW1dDv0exylW0/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/902492012522123274/cee6886c010b6f9567db45395be3b8af.png?format=webp&quality=lossless&width=270&height=270',
    discordId: '902492012522123274'
  },
  {
    name: 'Baryal zaman',
    role: 'Partner',
    description: 'Specialized in backend and databases security',
    pfp: 'https://images-ext-1.discordapp.net/external/6yTow-fD0g6fokRmP1IXv9e1emLZrLhL4Wpkj8WY364/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1157901001219653752/06f54cba229263ac5514d45dad6f88fa.png?format=webp&quality=lossless&width=270&height=270',
    discordId: '1157901001219653752'
  }
];

export default function Contact() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [nextId, setNextId] = useState(0);

  const handleHeartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = e.currentTarget.closest('.relative')?.getBoundingClientRect();
    
    if (!parentRect) return;

    const heartX = rect.left - parentRect.left + rect.width / 2;
    const heartY = rect.top - parentRect.top + rect.height / 2;
    
    // Create 5-8 soul particles
    const particleCount = 5 + Math.floor(Math.random() * 3);
    const newParticles: Array<{ id: number; x: number; y: number }> = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const distance = 50 + Math.random() * 30;
      const x = heartX + Math.cos(angle) * distance;
      const y = heartY + Math.sin(angle) * distance;
      
      newParticles.push({ id: nextId + i, x, y });
    }
    
    setParticles(prev => [...prev, ...newParticles]);
    setNextId(prev => prev + particleCount);

    // Remove particles after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-pink-50 via-white to-purple-50 scroll-reveal">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-fredoka tracking-[0.5px]">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-sm sm:text-base text-text-light max-w-2xl mx-auto font-nunito leading-[1.7]">
            Questions or ready to start? Reach out to us!
          </p>
        </div>

        {/* Team & Partners Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#2D2342] mb-8 font-fredoka text-center flex items-center justify-center gap-2">
            <ShieldCheck className="text-pink-500" />
            Meet The Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div 
                key={member.discordId}
                className={`p-5 rounded-[32px] border-2 transition-all duration-500 hover:-translate-y-2 text-center group relative overflow-hidden ${
                  member.isDark 
                    ? 'bg-[#0a0a0c] border-purple-900 shadow-[0_0_20px_rgba(88,28,135,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]'
                    : 'bg-white border-pink-50 shadow-sm-soft hover:shadow-lg-soft'
                }`}
              >
                {/* Dark Energy Effect for isDark */}
                {member.isDark && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent opacity-60 transition-opacity duration-700"></div>
                    <div className="absolute -inset-20 bg-red-950/40 blur-[60px] animate-smoke-slow opacity-100 transition-opacity duration-1000"></div>
                    <div className="absolute -inset-20 bg-rose-900/30 blur-[40px] animate-smoke-slow-reverse opacity-80 transition-opacity duration-1500 delay-150"></div>
                    <div className="absolute inset-0 animate-aura-pulse shadow-[inset_0_0_50px_rgba(150,0,0,0.3)] opacity-100 transition-opacity duration-500 rounded-[32px]"></div>
                  </div>
                )}

                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className={`absolute inset-0 rounded-full animate-pulse opacity-20 group-hover:opacity-40 ${member.isDark ? 'bg-red-600 shadow-[0_0_30px_rgba(200,0,0,0.8)]' : 'bg-gradient-main'}`}></div>
                  {member.isDark && (
                    <div className="absolute inset-0 rounded-full border-2 border-red-500/50 animate-ping opacity-20"></div>
                  )}
                  <img 
                    src={member.pfp} 
                    alt={member.name}
                    className={`w-full h-full rounded-full object-cover border-4 relative z-10 ${member.isDark ? 'border-red-800' : 'border-white'}`}
                  />
                  {member.isOwner && (
                    <div className="absolute -top-1 -right-1 bg-yellow-400 p-1.5 rounded-full shadow-sm z-20">
                      <Crown size={14} className="text-white fill-white" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <h4 className={`text-lg font-bold font-fredoka leading-tight ${member.isDark ? 'text-white' : 'text-[#2D2342]'}`}>{member.name}</h4>
                  {member.country && (
                    <div className="flex items-center shadow-md rounded-[2px] overflow-hidden border border-white/10" title="Germany">
                      <svg width="14" height="9" viewBox="0 0 5 3">
                        <rect width="5" height="3" y="0" fill="#000"/>
                        <rect width="5" height="2" y="1" fill="#D00"/>
                        <rect width="5" height="1" y="2" fill="#FFCE00"/>
                      </svg>
                    </div>                  )}
                </div>
                <p className={`text-xs font-bold font-nunito mb-2 ${member.isDark ? 'text-red-400' : (member.isOwner ? 'text-pink-500' : 'text-purple-500')}`}>
                  {member.role}
                </p>

                <p className={`text-[10px] font-medium font-nunito leading-relaxed mb-4 px-2 ${member.isDark ? 'text-gray-400' : 'text-text-light'}`}>
                  {member.description}
                </p>
                
                <div className="flex justify-center gap-2 relative z-10">
                  <a 
                    href={`https://discord.com/users/${member.discordId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-xl transition-all shadow-sm ${member.isDark
                        ? 'bg-red-900/30 text-red-400 hover:bg-red-600 hover:text-white'
                        : 'bg-pink-50 text-pink-500 hover:bg-pink-500 hover:text-white'
                    }`}
                    title="View Discord Profile"
                  >
                    <MessageCircle size={18} />
                  </a>
                  {member.instagram && (
                    <a 
                      href={`https://instagram.com/${member.instagram}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    className={`p-2 rounded-xl transition-all shadow-sm ${member.isDark
                        ? 'bg-red-900/30 text-red-400 hover:bg-red-600 hover:text-white'
                          : 'bg-purple-50 text-purple-500 hover:bg-purple-500 hover:text-white'
                      }`}
                      title="View Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {member.portfolio && (
                    <a 
                      href={member.portfolio} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    className={`p-2 rounded-xl transition-all shadow-sm ${member.isDark
                        ? 'bg-red-900/30 text-red-400 hover:bg-red-600 hover:text-white'
                          : 'bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white'
                      }`}
                      title="Portfolio"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#2D2342] mb-4 font-fredoka">
            Direct Support
          </h3>
          <div className="h-1 w-20 bg-gradient-main mx-auto rounded-full"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Discord Card */}
          <a
            href="https://discord.com/users/1493102481318871121"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-3xl border-2 border-pink-200 shadow-md-soft hover:shadow-lg-soft transition-all duration-500 hover:-translate-y-3 group transform hover:scale-105 cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="p-4 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-500 transform group-hover:scale-110 flex-shrink-0">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-text-dark mb-1 font-fredoka tracking-wide">Discord</h3>
                <p className="text-xs text-text-light font-bold mb-2 font-nunito">Direct Messages</p>
                <p className="text-base font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent break-words font-fredoka">
                  fushiguro_toji1
                </p>
              </div>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href="https://instagram.com/__hey__its.zoya__"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-3xl border-2 border-pink-200 shadow-md-soft hover:shadow-lg-soft transition-all duration-500 hover:-translate-y-3 group transform hover:scale-105 cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="p-4 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-500 transform group-hover:scale-110 flex-shrink-0">
                <Instagram size={24} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-text-dark mb-1 font-fredoka tracking-wide">Instagram</h3>
                <p className="text-xs text-text-light font-bold mb-2 font-nunito">Follow & Message</p>
                <p className="text-base font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent break-words font-fredoka">
                  @__hey__its.zoya__
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Info Box with Interactive Heart Animation */}
        <div className="relative p-6 rounded-3xl bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 shadow-sm-soft group hover:shadow-lg-soft hover:border-pink-300 transition-all overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-purple-200/0 to-pink-200/0 group-hover:from-white/20 group-hover:via-purple-200/20 group-hover:to-pink-200/20 transition-all duration-500"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center gap-3">
            <button
              onClick={handleHeartClick}
              className="focus:outline-none transition-all cursor-pointer"
              aria-label="Click heart for animation"
            >
              <Heart
                size={28}
                className="text-pink-500 fill-pink-500 flex-shrink-0 hover:scale-125 transition-transform duration-300 cursor-pointer animate-pulse hover:animate-bounce"
              />
            </button>
            <p className="text-sm sm:text-base text-text-dark font-bold font-nunito leading-[1.7]">
              We respond super fast! DM us on Discord or Instagram for quick support and project discussions.
            </p>
          </div>

          {/* Soul Particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute pointer-events-none"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                animation: `soulFlow 1.2s ease-out forwards`,
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full shadow-lg opacity-80 blur-sm"></div>
            </div>
          ))}

          {/* CSS for soul animation */}
          <style>{`
            @keyframes soulFlow {
              0% {
                opacity: 1;
                transform: scale(1);
              }
              50% {
                opacity: 0.7;
              }
              100% {
                opacity: 0;
                transform: scale(0) translate(-50%, -50%);
              }
            }

            @keyframes dark-glow {
              0%, 100% { border-color: rgba(88, 28, 135, 1); }
              50% { border-color: rgba(168, 85, 247, 0.5); }
            }

            .animate-dark-glow {
              animation: dark-glow 3s ease-in-out infinite;
            }

            @keyframes smoke-slow {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
              33% { transform: translate(10%, -5%) scale(1.1); opacity: 0.4; }
              66% { transform: translate(-5%, 5%) scale(0.9); opacity: 0.3; }
            }
            
            @keyframes smoke-slow-reverse {
              0%, 100% { transform: translate(0, 0) scale(1.1); opacity: 0.3; }
              50% { transform: translate(-10%, 8%) scale(1); opacity: 0.5; }
            }

            @keyframes aura-pulse {
              0%, 100% { box-shadow: inset 0 0 50px rgba(88, 28, 135, 0.2); }
              50% { box-shadow: inset 0 0 80px rgba(168, 85, 247, 0.4); }
            }

            .animate-smoke-slow {
              animation: smoke-slow 10s ease-in-out infinite;
            }
            .animate-smoke-slow-reverse {
              animation: smoke-slow-reverse 12s ease-in-out infinite;
            }
            .animate-aura-pulse {
              animation: aura-pulse 4s ease-in-out infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
