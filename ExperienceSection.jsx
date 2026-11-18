                    {exp.company}
                  </p>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-[#C7CED8]' : 'text-[#4A423C]'}`}>
                    {exp.description}
                  </p>
                </div>
                {/* Subtle Bottom Accent Bar */}
                <div className="pt-6 mt-6 border-t border-current/10 flex items-center justify-between">
                  <span className={`text-[11px] uppercase tracking-widest ${isDark ? 'text-[#C7CED8]/70' : 'text-[#7A7069]'}`}>
                    {exp.mediaUrl ? 'Dokumentasi Tersedia' : 'Editable via Admin'}
                  </span>
                  {exp.mediaUrl && (
                    <button
                      onClick={() => onMediaClick({ url: exp.mediaUrl, type: exp.mediaType || 'image', title: exp.role, caption: exp.company })}
                      className={`text-xs font-medium flex items-center gap-1 ${isDark ? 'text-[#C5A56A]' : 'text-[#2C2520]'}`}
                    >
                      <Eye className="w-3.5 h-3.5" /> Lihat Foto
                    </button>
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
