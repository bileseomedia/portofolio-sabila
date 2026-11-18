          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle
          cx="100"
          cy="95"
          r="34"
          stroke={isDark ? '#C7CED8' : '#C48B9F'}
          strokeWidth="1.5"
        />
        <path
          d="M100 61C112 78 112 112 100 129C88 112 88 78 100 61Z"
          stroke={isDark ? '#D8C49A' : '#D4B459'}
          strokeWidth="1.5"
        />
        <line
          x1="20"
          y1="220"
          x2="180"
          y2="220"
          stroke={isDark ? '#C5A56A' : '#2C2520'}
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
      <span className={`font-editorial italic text-base tracking-wide ${isDark ? 'text-[#E1E5EB]' : 'text-[#2C2520]'}`}>
        {label || 'Ruang Dokumentasi Visual'}
      </span>
      <span className={`text-xs mt-1.5 max-w-[210px] leading-relaxed ${isDark ? 'text-[#C7CED8]' : 'text-[#6E655F]'}`}>
        {sublabel || 'Unggah foto asli melalui Admin Dashboard'}
      </span>
    </div>
  );
};
