                          <p className={`text-xs font-medium mt-2 px-1 ${isDark ? 'text-[#E1E5EB]' : 'text-[#2C2520]'}`}>
                            {media.title}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <EditorialFrame
                      label={`${activeVerticalTab} — Visual 01`}
                      sublabel="Unggah dokumentasi untuk kategori ini melalui Studio Admin"
                      isDark={isDark}
                      aspectClass="aspect-[4/3]"
                      className="rounded-2xl"
                    />
                    <EditorialFrame
                      label={`${activeVerticalTab} — Visual 02`}
                      sublabel="Mendukung JPG, PNG, WEBP & Video klip pendek"
                      isDark={isDark}
                      aspectClass="aspect-[4/3]"
                      className="rounded-2xl"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
