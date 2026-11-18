          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3.5 rounded-full text-sm font-semibold transition-all disabled:opacity-50 ${
            isDark
              ? 'bg-[#C5A56A] text-[#17243A] hover:bg-[#D8C49A]'
              : 'bg-[#2C2520] text-[#FFF9F0] hover:bg-opacity-90'
          }`}
        >
          {isSubmitting
            ? 'Memproses...'
            : isConfigured
              ? isRegisterMode ? 'Daftar Akun Admin' : 'Masuk ke Supabase'
              : 'Buka Studio Admin'}
        </button>
        {isConfigured && (
          <button
            type="button"
            onClick={() => {
              setIsRegisterMode(!isRegisterMode);
              setError('');
            }}
            className="text-xs underline text-center block w-full mt-2 opacity-75 hover:opacity-100"
          >
            {isRegisterMode ? 'Sudah punya akun? Masuk' : 'Belum punya akun admin? Buat akun'}
          </button>
        )}
      </form>
    </div>
  );
};
