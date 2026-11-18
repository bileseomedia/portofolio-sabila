                <span className={`text-xs uppercase tracking-widest ${isDark ? 'text-[#D8C49A]' : 'text-[#5A514B]'}`}>
                  Interpersonal
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {(skills?.soft || []).map((soft) => (
                  <span
                    key={soft}
                    className={`px-5 py-3 rounded-2xl text-sm font-medium border transition-transform duration-300 hover:scale-105 ${
                      isDark
                        ? 'bg-[#17243A] border-[#C5A56A]/40 text-[#E1E5EB]'
                        : 'bg-[#FFFCF8] border-[#EBCFD8] text-[#2C2520] shadow-sm'
                    }`}
                  >
                    {soft}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-8 mt-8 border-t border-current/10">
              <p className={`font-editorial italic text-lg leading-relaxed ${isDark ? 'text-[#D8C49A]' : 'text-[#3B332E]'}`}>
                “Menggabungkan pemahaman manajemen bisnis dengan kepekaan komunikasi kreatif dan kerja sama tim yang adaptif.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
