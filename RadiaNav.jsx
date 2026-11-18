        <div
          className={`pointer-events-none absolute right-2 bottom-2 w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] rounded-full border border-dashed transition-all duration-500 ${
            radialOpen ? 'opacity-45 scale-100' : 'opacity-0 scale-50'
          } ${isDark ? 'border-[#C5A56A]' : 'border-[#2C2520]/35'}`}
          style={{ transformOrigin: 'bottom right' }}
        />
        {/* Central Radial Compass Trigger */}
        <button
          onClick={() => setRadialOpen(!radialOpen)}
          aria-label="Buka atau Tutup Radial Navigation"
          className={`relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col items-center justify-center shadow-xl border-2 transition-all duration-500 hover:scale-105 ${
            isDark
              ? 'bg-[#202F46] border-[#C5A56A] text-[#D8C49A]'
              : 'bg-[#DCEAF4] border-[#2C2520]/20 text-[#2C2520]'
          }`}
        >
          {radialOpen ? (
            <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
          ) : (
            <>
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" />
              <span className="text-[9px] uppercase tracking-widest font-semibold">Menu</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
