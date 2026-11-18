                  <h3 className={`font-editorial text-2xl sm:text-3xl font-semibold mb-2 group-hover:underline decoration-1 underline-offset-4 ${isDark ? 'text-[#E1E5EB]' : 'text-[#2C2520]'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed line-clamp-2 ${isDark ? 'text-[#C7CED8]' : 'text-[#4A423C]'}`}>
                    {project.description}
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-current/10 flex items-center justify-between">
                  <span className={`text-xs font-semibold flex items-center gap-1.5 ${isDark ? 'text-[#D8C49A]' : 'text-[#2C2520]'}`}>
                    Lihat Detail & Proses
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  {project.gallery && project.gallery.length > 0 && (
                    <span className={`text-xs ${isDark ? 'text-[#C7CED8]' : 'text-[#6E655F]'}`}>
                      +{project.gallery.length} Dokumentasi
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
