      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-6 py-5 border-t space-y-2 transition-all ${
            isDark ? 'bg-[#202F46] border-[#293A52]' : 'bg-[#FFFCF8] border-[#EBCFD8]'
          }`}
        >
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors ${
                  activeSection === item.id
                    ? isDark
                      ? 'bg-[#293A52] text-[#C5A56A] border border-[#C5A56A]/40'
                      : 'bg-[#DCEAF4] text-[#2C2520]'
                    : isDark
                      ? 'text-[#C7CED8] hover:bg-[#17243A]'
                      : 'text-[#4A423C] hover:bg-[#FAF0D8]'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
