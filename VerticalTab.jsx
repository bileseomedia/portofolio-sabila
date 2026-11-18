                  [cat]: { ...catData, caption: e.target.value }
                }
              })}
              placeholder="Caption kategori..."
              className={`w-full px-3 py-2 rounded-xl border text-xs ${isDark ? 'bg-[#17243A] border-[#293A52]' : 'bg-white border-[#CFE3F2]'}`}
            />
            {catData.items && catData.items.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {catData.items.map((m, mIdx) => (
                  <div key={m.id || mIdx} className="relative group rounded-xl overflow-hidden border border-current/15">
                    <EditorialFrame src={m.url} mediaType={m.type} isDark={isDark} aspectClass="aspect-square" />
                    <button
                      onClick={() => handleDeleteItem(cat, mIdx)}
                      className="absolute top-1.5 right-1.5 p-1.5 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition-colors shadow-md"
                      title="Hapus Media"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
