        />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">URL LinkedIn</label>
        <input
          type="url"
          value={draftData.contact?.linkedin || ''}
          onChange={(e) => onChange({
            ...draftData,
            contact: { ...draftData.contact, linkedin: e.target.value }
          })}
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${isDark ? 'bg-[#202F46] border-[#293A52]' : 'bg-white border-[#CFE3F2]'}`}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1">URL Instagram</label>
        <input
          type="url"
          value={draftData.contact?.instagram || ''}
          onChange={(e) => onChange({
            ...draftData,
            contact: { ...draftData.contact, instagram: e.target.value }
          })}
          className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${isDark ? 'bg-[#202F46] border-[#293A52]' : 'bg-white border-[#CFE3F2]'}`}
        />
      </div>
    </div>
  );
};
