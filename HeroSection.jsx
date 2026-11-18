                isDark ? 'bg-[#293A52] border-[#C5A56A]/45' : 'bg-[#FFFCF8] border-[#CFE3F2]'
              }`}
            >
              <EditorialFrame
                src={hero?.profileImage}
                alt={hero?.name}
                label={hero?.name || "Sabila Alifia Sundawa"}
                sublabel="Foto profil utama dapat diunggah melalui Studio Admin"
                isDark={isDark}
                aspectClass="aspect-[4/5]"
                className="rounded-t-[168px] rounded-b-2xl"
              />
            </div>
            {/* Floating Editorial Caption Badge */}
            <div
              className={`relative sm:absolute z-20 mt-4 sm:mt-0 sm:-bottom-5 sm:-left-6 px-5 py-3.5 rounded-2xl shadow-lg border max-w-[270px] animate-float-slow ${
                isDark
                  ? 'bg-[#202F46] border-[#C5A56A]/50 text-[#E1E5EB]'
                  : 'bg-[#F5E9BE] border-[#2C2520]/10 text-[#2C2520]'
              }`}
            >
              <p className="font-editorial italic text-sm font-semibold">
                {hero?.profileCaption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
