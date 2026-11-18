          <input
            type="text"
            value={draftData.about.education.major}
            onChange={(e) => onChange({
              ...draftData,
              about: {
                ...draftData.about,
                education: { ...draftData.about.education, major: e.target.value }
              }
            })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${isDark ? 'bg-[#202F46] border-[#293A52]' : 'bg-white border-[#CFE3F2]'}`}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Periode Studi</label>
          <input
            type="text"
            value={draftData.about.education.period}
            onChange={(e) => onChange({
              ...draftData,
              about: {
                ...draftData.about,
                education: { ...draftData.about.education, period: e.target.value }
              }
            })}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${isDark ? 'bg-[#202F46] border-[#293A52]' : 'bg-white border-[#CFE3F2]'}`}
          />
        </div>
      </div>
    </div>
  );
};
