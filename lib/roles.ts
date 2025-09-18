export type AppRole = 'client' | 'staff' | 'attorney' | 'admin';
export function canSeeFirmArea(role?: AppRole | null) {
  return role === 'staff' || role === 'attorney' || role === 'admin';
}
