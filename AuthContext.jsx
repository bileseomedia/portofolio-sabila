    });
    if (error) throw error;
    return { success: true, data };
  };
  const logout = async () => {
    if (isSupabaseConfigured() && supabase) {
      await supabase.auth.signOut();
    }
    setIsDemoAdmin(false);
    localStorage.removeItem('sabila_demo_admin_auth');
  };
  const isAuthenticated = Boolean(user || isDemoAdmin);
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        isDemoAdmin,
        loginWithPassword,
        registerAdmin,
        logout,
        isConfigured: isSupabaseConfigured(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
