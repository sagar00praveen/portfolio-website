import { Mail, Phone, MapPin, GraduationCap, Award, Briefcase, ExternalLink } from "lucide-react";
import portfolioData from "../data/portfolioData";

const ContactSection = () => {
  const { personalInfo, socials, internships, certifications } = portfolioData;

  // Fallback if data is missing to prevent crash
  if (!personalInfo) return null;

  return (
    <section id="contact" className="py-24 px-6 relative z-10 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">Let's Connect</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Info Card */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col justify-between md:col-span-1 shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full"><Mail size={20} className="text-blue-400" /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-200 hover:text-white transition-colors break-all">{personalInfo.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full"><Phone size={20} className="text-green-400" /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-gray-200 hover:text-white transition-colors">{personalInfo.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full"><MapPin size={20} className="text-purple-400" /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Location</p>
                    <p className="text-gray-200">{personalInfo.education.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-all hover:scale-110"
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5 invert opacity-80" />
                </a>
              ))}
            </div>
          </div>

          {/* Experience & Education Column */}
          <div className="md:col-span-2 space-y-6">

            {/* Education */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-yellow-400" size={24} />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">{personalInfo.education.degree}</h4>
                <p className="text-blue-400 font-medium">{personalInfo.education.college}</p>
                <p className="text-gray-500 text-sm mt-1">{personalInfo.education.year} • {personalInfo.education.location}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Internships */}
              <div className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="text-orange-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Internships</h3>
                </div>
                <div className="space-y-6">
                  {internships.map((intern, idx) => (
                    <div key={idx} className="group">
                      <h4 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                        <a href={intern.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          {intern.company} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </h4>
                      <p className="text-sm text-gray-400">{intern.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-teal-400" size={24} />
                  <h3 className="text-xl font-bold text-white">Certifications</h3>
                </div>
                <div className="space-y-6">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="group">
                      <h4 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          {cert.issuer} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </h4>
                      <p className="text-sm text-gray-400">{cert.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        <footer className="mt-20 text-center text-sm text-gray-600 border-t border-white/5 pt-8">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
