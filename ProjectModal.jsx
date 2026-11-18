                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Project Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-[#202F46] border-[#293A52]' : 'bg-[#FFF9F0] border-[#F5E9BE]'}`}>
            <h4 className={`font-editorial text-xl font-semibold mb-2 ${isDark ? 'text-[#D8C49A]' : 'text-[#2C2520]'}`}>
              Deskripsi Project
            </h4>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-[#C7CED8]' : 'text-[#4A423C]'}`}>
              {project.description}
            </p>
          </div>
          <div className={`p-5 rounded-2xl border ${isDark ? 'bg-[#202F46] border-[#293A52]' : 'bg-[#F3DDE3]/50 border-[#EBCFD8]'}`}>
            <h4 className={`font-editorial text-xl font-semibold mb-2 ${isDark ? 'text-[#D8C49A]' : 'text-[#2C2520]'}`}>
              Proses Pengerjaan
            </h4>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-[#C7CED8]' : 'text-[#4A423C]'}`}>
              {project.process}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
