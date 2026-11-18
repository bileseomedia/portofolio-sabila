import { supabase, isSupabaseConfigured } from './supabase';
import { INITIAL_PORTFOLIO_DATA } from '../types/initialData';
const LOCAL_STORAGE_KEY = 'sabila_portfolio_offline_cache';
/**
 * Loads entire portfolio data from Supabase.
 * Returns structured object matching INITIAL_PORTFOLIO_DATA.
 */
export const fetchPortfolioData = async () => {
  if (!isSupabaseConfigured() || !supabase) {
    const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        console.warn('Failed to parse cached data:', e);
      }
    }
    return INITIAL_PORTFOLIO_DATA;
  }

        await supabase.from('vertical_showcase').upsert({
        id: catKey,
        caption: catVal.caption || '',
        sort_order: i + 1,
        updated_at: new Date().toISOString()
      });
      // Clear & insert items for this category
      await supabase.from('vertical_showcase_items').delete().eq('category_id', catKey);
      if (catVal.items && catVal.items.length > 0) {
        const itemRows = catVal.items.map((item, idx) => ({
          id: item.id || `vt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          category_id: catKey,
          media_url: item.url,
          media_type: item.type || 'image',
          title: item.title || '',
          sort_order: idx + 1
        }));
        await supabase.from('vertical_showcase_items').insert(itemRows);
      }
    }
    return { success: true, message: 'Berhasil disinkronisasi ke Supabase!' };
  } catch (err) {
    console.error('Supabase save error:', err);
    throw err;
  }
};
/**
 * Realtime subscription to any portfolio changes.
 */
export const subscribeToPortfolioUpdates = (onUpdate) => {
  if (!isSupabaseConfigured() || !supabase) return () => {};
  const channel = supabase
    .channel('public:portfolio-changes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'portfolio_profile' }, () => onUpdate())
    .on('postgres_changes', { event: '*', schema: 'public', table: 'experiences' }, () => onUpdate())
    .on('postgres_changes', { event: '*', schema: 'public', table: 'organizations' }, () => onUpdate())
    .on('postgres_changes', { event: '*', schema: 'public', table: 'projects' }, () => onUpdate())
    .on('postgres_changes', { event: '*', schema: 'public', table: 'vertical_showcase' }, () => onUpdate())
    .subscribe();
  return () => {
    supabase.removeChannel(channel);
  };
};
