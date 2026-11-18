              <Camera className="w-3.5 h-3.5" />
              <span>
                {uploadingExpId === exp.id
                  ? 'Mengunggah...'
                  : exp.mediaUrl
                    ? 'Ganti Foto Dokumentasi'
                    : 'Unggah Foto Dokumentasi'}
              </span>
              <input
                type="file"
                disabled={uploadingExpId === exp.id}
                accept="image/jpeg,image/png,image/webp,video/mp4,video/webm"
                className="hidden"
                onChange={(e) => handleUploadMedia(idx, exp, e.target.files?.[0])}
              />
            </label>
            {exp.mediaUrl && (
              <button
                onClick={() => {
                  const next = [...draftData.experiences];
                  next[idx] = { ...exp, mediaUrl: '' };
                  onChange({ ...draftData, experiences: next });
                }}
                className="text-xs text-rose-500 underline hover:text-rose-600"
              >
                Hapus Foto
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
