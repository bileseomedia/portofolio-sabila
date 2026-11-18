              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <EditorialFrame
                label="Dokumentasi PKKMB Manajemen"
                sublabel="Unggah foto kegiatan kepemimpinan melalui Studio Admin"
                isDark={isDark}
                aspectClass="aspect-[16/10]"
                className="rounded-2xl"
              />
              <EditorialFrame
                label="Publikasi HIMAA"
                sublabel="Unggah poster publikasi atau dokumentasi acara HIMAA"
                isDark={isDark}
                aspectClass="aspect-[16/10]"
                className="rounded-2xl"
              />
              <EditorialFrame
                label="Kolaborasi Tim Kepanitiaan"
                sublabel="Tambahkan beberapa foto sekaligus di dashboard admin"
                isDark={isDark}
                aspectClass="aspect-[16/10]"
                className="rounded-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
