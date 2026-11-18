              {[
                { title: 'Curious Learner', desc: 'Antusias mengeksplorasi dunia bisnis digital, tren pemasaran, dan kreativitas baru.' },
                { title: 'Collaborative Spirit', desc: 'Terbiasa bekerja selaras dalam tim organisasi maupun operasional brand.' },
                { title: 'Creative Communicator', desc: 'Menyampaikan pesan produk secara hangat melalui konten dan live commerce.' }
              ].map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className={`p-5 rounded-2xl border transition-transform duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-[#17243A] border-[#293A52]'
                      : idx === 0
                        ? 'bg-[#FFF9F0] border-[#F5E9BE]'
                        : idx === 1
                          ? 'bg-[#F3DDE3]/55 border-[#EBCFD8]'
                          : 'bg-[#DCEAF4]/55 border-[#CFE3F2]'
                  }`}
                >
                  <h4 className={`font-editorial text-lg font-semibold mb-1.5 ${isDark ? 'text-[#D8C49A]' : 'text-[#2C2520]'}`}>
                    {pillar.title}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-[#C7CED8]' : 'text-[#5A514B]'}`}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
