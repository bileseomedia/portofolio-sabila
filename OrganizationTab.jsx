                    onClick={() => {
                      const next = [...draftData.organizations.gallery];
                      [next[idx + 1], next[idx]] = [next[idx], next[idx + 1]];
                      onChange({
                        ...draftData,
                        organizations: { ...draftData.organizations, gallery: next }
                      });
                    }}
                    className="p-1 rounded border border-current/20 disabled:opacity-30 hover:bg-black/5"
                    title="Geser ke Kanan/Bawah"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button
                  onClick={() => {
                    const next = draftData.organizations.gallery.filter((_, i) => i !== idx);
                    onChange({
                      ...draftData,
                      organizations: { ...draftData.organizations, gallery: next }
                    });
                  }}
                  className="text-xs text-rose-500 hover:text-rose-600 flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
